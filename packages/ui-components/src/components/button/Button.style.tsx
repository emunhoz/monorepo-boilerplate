import styled, { css } from 'styled-components'

const BlockStyle = css`
  display: block;
  width: 100%;
`

const NegativeStyle = css`
  color: ${({ theme }) => theme.palette.darkest};
  background: ${({ theme }) => theme.palette.lightest};
  border: 2px solid ${({ theme }) => theme.palette.darkest};
  :hover {
    color: ${({ theme }) => theme.palette.lightest};
    background: ${({ theme }) => theme.palette.darkest};
  }
`

const GhostStyle = css`
  color: ${({ theme }) => theme.palette.darkest};
  background: ${({ theme }) => theme.palette.lightest};
  :hover {
    color: ${({ theme }) => theme.palette.lightest};
    background: ${({ theme }) => theme.palette.darkest};
  }
`

const SmallStyle = css`
  padding: 12px 40px;
  font-size: ${({ theme }) => theme.typography.size.s1}px;
`

const BigStyle = css`
  padding: 24px 40px;
  font-size: ${({ theme }) => theme.typography.size.s3}px;
`

export const Button = styled.button<{ negative: boolean; ghost: boolean; size: string; block: boolean }>`
  padding: 18px 40px;
  font-size: ${({ theme }) => theme.typography.size.s2}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.palette.lightest};
  text-transform: uppercase;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.darkest};
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
  transition: 0.3s;

  :hover {
    filter: brightness(150%);
  }

  :disabled {
    opacity: 0.5;
  }

  ${({ block }) => block && BlockStyle};

  ${({ negative }) => negative && NegativeStyle};
  ${({ ghost }) => ghost && GhostStyle};

  ${({ size }) => size === 'small' && SmallStyle};
  ${({ size }) => size === 'big' && BigStyle}
`
