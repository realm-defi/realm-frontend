import React, { useState } from 'react'
import styled from 'styled-components'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber } from 'utils/formatBalance'
import { BASE_ADD_LIQUIDITY_URL } from 'config'

import { Heading, Card, Text, BaseLayout, Link, Button, LinkExternal, Flex, ChevronDownIcon } from 'ui-kit/'

import AprSection from './AprSection'
import Details from './Details'

interface HorizontalFarmCard {
  farm: Farm
  account?: string
}

const CardWrapper = styled(Card)<{ open: boolean }>`
  max-height: 70px;
  width: 1100px;
  /* max-width: 1100px; */
  background: ${({ theme }) => theme.card.background};
  margin-bottom: 10px;
  padding: 0 38px 0 24px;

  ${({ open }) => {
    if (open) {
      return `
      max-height: unset;
      `
    }
    return ''
  }}
`

const InformationSection = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  ${({ theme, open }) =>
    open ? `border-bottom: solid 2px ${theme.colors.primary}` : ''}/* border-bottom: solid 2px ${({ theme }) =>
    theme.colors.primary} */
`

const OpenContract = styled(LinkExternal)``

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
  cursor: pointer;
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  width: 40px;
`

const HorizontalFarmCard: React.FC<HorizontalFarmCard> = ({ farm, account }) => {
  const { lpSymbol, quoteTokenAdresses, tokenAddresses } = farm
  const [toggleDetails, setToggleDetails] = useState(false)
  const { pid } = useFarmFromSymbol(lpSymbol)
  const { earnings } = useFarmUser(pid)
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, tokenAddresses })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const rawEarningsBalance = account ? getBalanceNumber(earnings) : 0
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <CardWrapper open={toggleDetails}>
      <InformationSection open={toggleDetails}>
        <Flex alignItems="center" width="200px">
          <Heading color="primary">{lpSymbol}</Heading>
          <OpenContract external href={`https://bscscan.com/address/${'test'}`} />
        </Flex>
        <AprSection value={10000} />
        <Flex>
          <Flex marginRight="10px" flexDirection="column" alignItems="flex-end">
            <Text fontSize="24px" color="pricePrimary" fontWeight="bold" lineHeight="1">
              {displayBalance}
            </Text>
            <Text fontWeight="600">NOBLES Earned</Text>
          </Flex>
          <ArrowIcon color="primary" toggled={toggleDetails} onClick={() => setToggleDetails(!toggleDetails)} />
        </Flex>
      </InformationSection>
      <Details
        open={toggleDetails}
        account={account}
        lpSymbol={lpSymbol}
        addLiquidityUrl={addLiquidityUrl}
        earnings={earnings}
      />
    </CardWrapper>
  )
}

export default HorizontalFarmCard
