import { css } from '@emotion/react'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body,
  input {
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.1px;
  }

  input,
  button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;

    &:active,
    &:focus {
      outline: none;
    }
  }

  input {
    min-width: 0;
    background: none;
    border: 0;
    width: 100%;
  }
`

export default globalStyles
