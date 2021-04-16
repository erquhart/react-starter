import { useMediaQuery } from 'react-responsive'
import { mediaQueries as mq } from 'ui'

const useBreakpoint = () => ({
  isExtraSmallScreen: useMediaQuery({ query: mq.minWidthExtraSmall }),
  isSmallScreen: useMediaQuery({ query: mq.minWidthSmall }),
  isMediumScreen: useMediaQuery({ query: mq.minWidthMedium }),
  isLargeScreen: useMediaQuery({ query: mq.minWidthLarge }),
  isExtraLargeScreen: useMediaQuery({ query: mq.minWidthExtraLarge }),
})

export default useBreakpoint
