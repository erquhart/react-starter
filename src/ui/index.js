import React from 'react'
import { css, keyframes } from '@emotion/react'

export const NewTabLink = (props) => (
  <a rel="noopener noreferrer" target="_blank" {...props} />
)

export const colors = {
  black: '#000',
  gray10: '#333',
  gray20: '#555',
  gray30: '#666',
  gray40: '#777',
  gray50: '#999',
  gray57: '#bbb',
  gray60: '#ccc',
  gray70: '#ddd',
  gray80: '#ececec',
  gray90: '#eee',
  gray100: '#efefef',
  gray110: '#f3f3f3',
  gray120: '#f7f7f7',
  white: '#fff',
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const animations = {
  rotate: css`
    ${rotate} 2s infinite linear;
  `,
  rotateFast: css`
    ${rotate} 0.7s infinite linear;
  `,
}

export const breakpoints = {
  xsmall: '600',
  small: '1000',
  medium: '1280',
  large: '1420',
  xlarge: '1800',
}

export const mediaQueries = {
  minWidthExtraSmall: `(min-width: ${breakpoints.xsmall}px)`,
  minWidthSmall: `(min-width: ${breakpoints.small}px)`,
  minWidthMedium: `(min-width: ${breakpoints.medium}px)`,
  minWidthLarge: `(min-width: ${breakpoints.large}px)`,
  minWidthExtraLarge: `(min-width: ${breakpoints.xlarge}px)`,
}
