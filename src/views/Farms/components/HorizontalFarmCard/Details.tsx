import React, { useState, useMemo, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import useWeb3 from 'hooks/useWeb3'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'

import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { useApprove } from 'hooks/useApprove'

import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Modal, Flex, Text, Box } from 'ui-kit/'
import TokenInput from 'components/TokenInput'
import UnlockButton from 'components/UnlockButton'
import Balance from 'components/Balance'

interface Details {
  open?: boolean
  lpSymbol?: string
  addLiquidityUrl?: string
  account?: string
  earnings?: BigNumber
}

const SectionWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  /* height: ${({ open }) => (open ? '50px' : '0')}; */
`

const StakingSection = styled(Flex)`
  flex-direction: column;
  padding: 15px;
`

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`

const StakingTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
`

const StakingSubtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
`

const Details: React.FC<Details> = ({ open, lpSymbol, account, addLiquidityUrl, earnings }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)
  const { pid, lpAddresses } = useFarmFromSymbol(lpSymbol)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()

  const lpContract = getBep20Contract(lpAddress, web3)

  const { onApprove } = useApprove(lpContract)
  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const [stakeValue, setStakeValue] = useState('')
  const [unstakeValue, setUnstakeValue] = useState('')

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(tokenBalance, 18)
  }, [tokenBalance])

  const stakedFullBalance = useMemo(() => {
    return getFullDisplayBalance(stakedBalance)
  }, [stakedBalance])

  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const handleStakeChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setStakeValue(e.currentTarget.value)
    },
    [setStakeValue],
  )
  const handleStakeMax = useCallback(() => {
    setStakeValue(fullBalance)
  }, [setStakeValue, fullBalance])

  const handleUnstakeChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUnstakeValue(e.currentTarget.value)
    },
    [setUnstakeValue],
  )
  const handleUnstakeMax = useCallback(() => {
    setUnstakeValue(stakedFullBalance)
  }, [setUnstakeValue, stakedFullBalance])

  // TODO: Implement isFInished
  const isFinished = false

  return (
    <SectionWrapper open={open}>
      {!account ? (
        <UnlockButton mt="8px" width="100%" />
      ) : (
        <>
          <StakingSection>
            <StakingTitle>I want to stake</StakingTitle>
            <StakingSubtitle>Available Balance: {fullBalance}</StakingSubtitle>
            <InputSection>
              <TokenInput
                value={stakeValue}
                max={fullBalance}
                symbol={lpSymbol}
                onChange={handleStakeChange}
                onSelectMax={handleStakeMax}
              />
              <Button
                scale="sm"
                marginLeft="5px"
                variant="peons"
                disabled={pendingTx}
                onClick={async () => {
                  setPendingTx(true)
                  // await onStake(stakeValue, 18)
                  await onStake(stakeValue)
                  setPendingTx(false)
                }}
              >
                {/* {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')} */}
                {pendingTx ? 'Pending Confirmation' : 'Stake'}
              </Button>
            </InputSection>
          </StakingSection>
          <StakingSection>
            <StakingTitle>I want to unstake</StakingTitle>
            <StakingSubtitle>Available Balance: {displayBalance}</StakingSubtitle>
            <InputSection>
              <TokenInput
                value={unstakeValue}
                max={stakedFullBalance}
                symbol={lpSymbol}
                onChange={handleUnstakeChange}
                onSelectMax={handleUnstakeMax}
              />
              <Button
                scale="sm"
                marginLeft="5px"
                variant="peons"
                disabled={pendingTx}
                onClick={async () => {
                  setPendingTx(true)
                  await onUnstake(stakeValue)
                  setPendingTx(false)
                }}
              >
                {/* {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')} */}
                {pendingTx ? 'Pending Confirmation' : 'Unstake'}
              </Button>
            </InputSection>
          </StakingSection>
          <Flex padding="19px 0" alignSelf="flex-end">
            <Button
              scale="sm"
              marginLeft="5px"
              variant="nobles"
              disabled={pendingTx}
              onClick={async () => {
                setPendingTx(true)
                await onUnstake(stakeValue)
                setPendingTx(false)
              }}
            >
              {/* {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')} */}
              {pendingTx ? 'Pending Confirmation' : `Claim ${getBalanceNumber(earnings, 18)} NOBLES`}
            </Button>
          </Flex>
        </>
      )}
    </SectionWrapper>
  )
}

export default Details
