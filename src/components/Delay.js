import { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import * as animations from 'react-animations'

const DisplayWrapper = styled('div')`
  display: inline-block;
  opacity: ${({ hideAfter }) => (hideAfter ? 1 : 0)};
  ${({ isRunning, animation, duration }) =>
    isRunning &&
    css`
      animation-name: ${keyframes(animation)};
      animation-duration: ${duration};
      opacity: ${({ hideAfter }) => (hideAfter ? 0 : 1)};
    `};
`

const Delay = ({
  children,
  delay = 1000,
  animation,
  duration = '1s',
  hideAfter = false,
  ...rest
}) => {
  const animationToRun = animations[animation]
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsRunning(true)
    }, delay)
  }, [])

  return (
    <DisplayWrapper
      isRunning={isRunning}
      animation={animationToRun}
      duration={duration}
      hideAfter={hideAfter}
      {...rest}
    >
      {children}
    </DisplayWrapper>
  )
}

export default Delay
