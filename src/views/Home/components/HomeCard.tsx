import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, LinkExternal } from 'ui-kit/'

import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardBusdValue from './CardBusdValue'
import CardValue from './CardValue'

export interface HomeCard {
  title: string
  logo: string
  height?: string
}

const StyledHomeSideCard = styled(Card)`
  /* background-image: url('/images/cake-bg.svg'); */
  /* background-repeat: no-repeat; */
  /* background-position: top right; */
  background: ${({ theme }) => theme.card.background};
  height: max-content;
  min-width: 300px;
`

const StyledCardBody = styled(CardBody)`
  height: 100%;
`

const CoinLogo = styled.img`
  /* width: 100px; */
`

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const PriceSection = styled(Prices)``

const OpenPrice = styled(LinkExternal)`
  position: absolute;
  top: 15px;
  right: 15px;
`

const Label = styled.div`
  /* color: ${({ theme }) => theme.colors.textSubtle}; */
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`

const HomeCard: React.FC<HomeCard> = ({ title, logo }) => {
  const { claimAmount } = useTotalClaim()
  const cakeAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(cakeAmount).multipliedBy(usePriceCakeBusd()).toNumber()

  return (
    // <StyledHomeSideCard height={height}>
    <StyledHomeSideCard>
      {/* <OpenPrice /> */}
      <OpenPrice external href={`https://bscscan.com/address/${'test'}`} />
      <StyledCardBody>
        <Flex flexDirection="column" alignItems="center" justifyContent="space-between" height="inherit">
          <Flex flexDirection="column" alignItems="center">
            <CoinLogo src={logo} />
            <Heading size="xl">{title}</Heading>
          </Flex>
          <Prices>
            <PriceSection>
              <Label>Current Price</Label>
              <CardValue value={5323222.56} fontSize="24px" prefix="$" decimals={2} color="pricePrimary" />
            </PriceSection>
            <PriceSection>
              <Label>Circulating Supply</Label>
              <CardValue value={18342} fontSize="24px" decimals={0} color="priceSecondary" />
            </PriceSection>
            <PriceSection>
              <Label>Total Supply</Label>
              <CardValue value={60000} fontSize="24px" decimals={0} color="priceSecondary" />
            </PriceSection>
          </Prices>
        </Flex>
      </StyledCardBody>
    </StyledHomeSideCard>
  )
}

// HomeCard.defaultProps = {
//   height: '415px'
// }

export default HomeCard
