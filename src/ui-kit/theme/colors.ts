import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#314753',
  primaryBright: '#53DEE9',
  primaryDark: '#0098A1',
  secondary: '#7645D9',
  success: '#31D0AA',
  warning: '#FFB237',
}

export const brandColors = {
  binance: '#F0B90B',
}

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#FAF9FA',
  backgroundDisabled: '#E9EAEB',
  contrast: '#191326',
  invertedContrast: '#FFFFFF',
  input: '#eeeaf4',
  inputSecondary: '#d7caec',
  tertiary: '#EFF4F5',
  // text: '#452A7A',
  text: '#314753',
  textDisabled: '#BDC2C4',
  textSubtle: '#8f80ba',
  borderColor: '#E9EAEB',
  card: '#FFFFFF',
  pricePrimary: '#d74796',
  priceSecondary: '#e49643',
  priceTertiary: '#c63535',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)',
  },
  cardBackground: 'rgba(255, 255, 255, 0.7)',
}

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#9A6AFF',
  background: '#100C18',
  backgroundDisabled: '#3c3742',
  contrast: '#FFFFFF',
  invertedContrast: '#191326',
  input: '#483f5a',
  inputSecondary: '#66578D',
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: '#EAE2FC',
  textDisabled: '#666171',
  textSubtle: '#A28BD4',
  pricePrimary: '#d74796',
  priceSecondary: '#e49643',
  priceTertiary: '#c63535',
  borderColor: '#524B63',
  card: '#27262c',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
  },
  cardBackground: 'rgba(255, 255, 255, 0.7)',
}
