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
    font-family: sans-serif;
  }

  input,
  button {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  input {
    min-width: 0;
    background: none;
  }
`

export default globalStyles
