import React from 'react'
import * as S from './Button.style'

interface IButton {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean;
  /**
   * Styles button as 100% width
   *
   * @default false
   */
  block?: boolean
  /**
   * Defines the size of the button
   *  big: 66px
   *  small: 32px
   *
   * @default default
   */
  size?: 'big' | 'default' | 'small';

  /**
   * Styles button as negative style
   *
   * @default false
   */
  negative?: boolean

  /**
   * Styles button as ghost style
   *
   * @default false
   */
  ghost?: boolean
}

export const Button = ({ children, disabled, size = 'default', onClick, block = false, negative = false, ghost = false, ...rest }: IButton) => (
  <S.Button onClick={onClick} block={block} size={size} disabled={disabled} negative={negative} ghost={ghost} {...rest}>
    {children}
  </S.Button>
)
