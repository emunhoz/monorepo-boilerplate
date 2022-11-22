// @ts-nocheck

import styled from '@emotion/styled'

export const ButtonWrapper = styled.button`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.type.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  &.storybook-button--primary {
    color: ${({ theme }) => theme.palette.light};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  &.storybook-button--secondary {
    color: ${({ theme }) => theme.palette.darkest};
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  }
  &.storybook-button--small {
    padding: 10px 16px;
    font-size: ${({ theme }) => theme.typography.size.s1}px;
  }
  &.storybook-button--medium {
    padding: 11px 20px;
    font-size: ${({ theme }) => theme.typography.size.s2}px;
  }
  &.storybook-button--large {
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.typography.size.s3}px;
  }
`
