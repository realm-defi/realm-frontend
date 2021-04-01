import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Link, Button, Flex } from 'ui-kit/'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import HomeCard from 'views/Home/components/HomeCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  /* background-image: url('/images/pan-bg-mobile.svg'); */
  /* background-repeat: no-repeat;
  background-position: top center; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    /* background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center; */
    height: 165px;
    padding-top: 0;
  }
`

const MainBody = styled(Page)`
  background-image: url('/images/realmBG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 140px;
`

const MainSection = styled.main`
  margin-bottom: 32px;
`

const TextAccent = styled.span`
  color: yellow;
`

const InlineLink = styled.a`
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: yellow;
`

// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 3;
//     }
//   }
// `

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  gap: 50px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const TempHeader = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  color: white;
`

const Home: React.FC = () => {
  // const TranslateString = useI18n()

  return (
    <MainBody>
      <Hero>
        {/* <Heading as="h1" size="xl" mb="24px" color="secondary"> */}
        {/* {TranslateString(576, 'Welcome to Realm')} */}
        <TempHeader>Welcome to Realm</TempHeader>
        {/* </Heading> */}
        {/* <Text>{TranslateString(578, 'The #1 AMM and yield farm on Binance Smart Chain.')}</Text> */}
        <Text color="white">
          The <TextAccent>Realm Protocol</TextAccent> is an algorithmic stablecoing running on Binance Smart Chain
          (BSC).
        </Text>
        <Text color="white">
          Completely decentralised on-chain governance, <InlineLink href="/">read more</InlineLink>.
        </Text>
      </Hero>
      <MainSection>
        <Cards>
          <CardWrapper>
            <HomeCard title="PEONS" logo="/images/tokens/iconPeons.png" />
            <Button scale="md" variant="peons" marginTop="10px">
              Buy PEONS
            </Button>
          </CardWrapper>
          <CardWrapper>
            <HomeCard title="NOBLES" logo="/images/tokens/iconNoble.png" />
            <Button scale="l" variant="nobles" marginTop="10px">
              Buy NOBLES
            </Button>
          </CardWrapper>
          <CardWrapper>
            <HomeCard title="EXILED" logo="/images/tokens/iconExile.png" />
            <Button scale="md" variant="exiled" disabled marginTop="10px">
              Buy EXILED
            </Button>
          </CardWrapper>
        </Cards>
        {/* <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards>
        <CTACards>
          <EarnAPYCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards> */}
      </MainSection>
    </MainBody>
  )
}

export default Home
