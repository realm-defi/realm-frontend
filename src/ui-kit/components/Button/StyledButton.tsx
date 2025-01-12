import styled, { DefaultTheme } from 'styled-components'
import { space, layout, variant as variantSelector } from 'styled-system'
import { scaleVariants, styleVariants } from './theme'
import { BaseButtonProps } from './types'

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme
}

const getDisabledStyles = ({ isLoading, theme, variant }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `
  }

  if (['peons', 'nobles', 'exiled'].includes(variant)) {
    return `
    &:disabled,
    &.button--disabled {
      opacity: 0.65;
      box-shadow: none;
      cursor: not-allowed;
    }
    `
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `
}

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? '.5' : '1'
}

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 8px;
  /* box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset; */
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s;

  &:hover:not(:disabled):not(.button--disabled):not(.button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {
    opacity: 0.85;
  }

  ${getDisabledStyles}
  ${variantSelector({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${variantSelector({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
`

export default StyledButton
