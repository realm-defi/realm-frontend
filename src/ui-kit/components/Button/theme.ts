import { scales, variants } from './types'

export const scaleVariants = {
  [scales.L]: {
    height: '48px',
    padding: '0 80px',
  },
  [scales.MD]: {
    height: '48px',
    padding: '0 24px',
  },
  [scales.SM]: {
    height: '32px',
    padding: '0 16px',
  },
  [scales.SMP]: {
    height: '32px',
    padding: '0 36px',
  },
  [scales.XS]: {
    height: '20px',
    fontSize: '12px',
    padding: '0 8px',
  },
}

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: 'primary',
    color: 'white',
  },
  [variants.SECONDARY]: {
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: 'primary',
    boxShadow: 'none',
    color: 'primary',
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  [variants.NOBLES]: {
    backgroundColor: 'priceSecondary',
    background: 'linear-gradient(180deg, rgba(235,156,63,1) 50%, rgba(229,134,59,1) 51%)',
    boxShadow: '0px 0px 14px 2px rgba(0,0,0,0.75)',
    color: 'white',
    textShadow: '0 0 3px black',
  },
  [variants.PEONS]: {
    background: 'linear-gradient(180deg, rgba(92,162,215,1) 50%, rgba(67,118,183,1) 51%);',
    boxShadow: '0px 0px 14px 2px rgba(0,0,0,0.75)',
    color: 'white',
    textShadow: '0 0 3px black',
  },
  [variants.EXILED]: {
    backgroundColor: 'priceTertiary',
    boxShadow: '0px 0px 14px 2px rgba(0,0,0,0.75)',
    color: 'white',
    textShadow: '0 0 3px black',
  },
  [variants.TERTIARY]: {
    backgroundColor: 'tertiary',
    boxShadow: 'none',
    color: 'primary',
  },
  [variants.SUBTLE]: {
    backgroundColor: 'textSubtle',
    color: 'white',
  },
  [variants.DANGER]: {
    backgroundColor: 'failure',
    color: 'white',
  },
  [variants.SUCCESS]: {
    backgroundColor: 'success',
    color: 'white',
  },
  [variants.TEXT]: {
    backgroundColor: 'transparent',
    color: 'primary',
    boxShadow: 'none',
  },
}
