import styled from '@emotion/styled'

export const ButtonWrapper = styled.button`
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  &.storybook-button--primary {
    color: white;
    background-color: #7264d6;
  }
  &.storybook-button--secondary {
    color: gray;
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  }
  &.storybook-button--small {
    padding: 10px 16px;
    font-size: 10px;
  }
  &.storybook-button--medium {
    padding: 11px 20px;
    font-size: 12px
  }
  &.storybook-button--large {
    padding: 12px 24px;
    font-size: 14px
  }
`
