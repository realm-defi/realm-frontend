import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Text, Input, InputProps } from 'ui-kit/'
import useI18n from 'hooks/useI18n'

interface TokenInputProps extends InputProps {
  max: number | string
  symbol: string
  value: string
  onSelectMax?: () => void
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void
}

const StyledMax = styled(Button)`
  background: linear-gradient(180deg, rgba(215, 71, 150, 1) 50%, rgba(206, 54, 97, 1) 51%);
  box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.75);
  color: white;
  text-shadow: 0 0 3px black;
`

const TokenInput: React.FC<TokenInputProps> = ({ max, symbol, onChange, onSelectMax, value }) => {
  const TranslateString = useI18n()

  return (
    <Box>
      {/* <Flex justifyContent="flex-end" minHeight="21px" mb="8px">
        <Text color="primary" fontSize="14px">
          {max.toLocaleString()} {symbol} {TranslateString(526, 'Available')}
        </Text>
      </Flex> */}
      <Flex alignItems="center">
        <Input onChange={onChange} placeholder="0" value={value} />
        <Flex alignItems="center" marginLeft="5px">
          {/* <Text bold color="primary" textTransform="uppercase" mx="8px">
            {symbol}
          </Text> */}
          <div>
            <StyledMax scale="sm" onClick={onSelectMax}>
              {TranslateString(452, 'Max')}
            </StyledMax>
          </div>
        </Flex>
      </Flex>
    </Box>
  )
}

export default TokenInput
