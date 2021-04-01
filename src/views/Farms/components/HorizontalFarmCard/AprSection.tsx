import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import styled from 'styled-components'
import { Text } from 'ui-kit/'

interface AprSection {
  value: number
}

const AprContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 5px 20px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.75);
`

const AprSection: React.FC<AprSection> = ({ value }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals: 2,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])
  return (
    <AprContainer>
      <Text color="priceSecondary" fontSize="18px" fontWeight="bold">
        {countUp}%
      </Text>
      <Text fontSize="14px" fontWeight="600" lineHeight="1">
        APY
      </Text>
    </AprContainer>
  )
}

export default AprSection
