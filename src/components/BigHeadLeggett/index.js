import React from 'react'
import { BigHead } from '@bigheads/core'
import styled from 'styled-components'

import { MEDIA_QUERIES } from '../../styles/constants'

const StyledBigHead = styled(BigHead)`
  width: 250px;
  ${MEDIA_QUERIES.TABLET} {
    width: 280px;
  }
  ${MEDIA_QUERIES.DESKTOP} {
    width: 300px;
  }
`

const BigHeadLeggett = ({ eyesStyle }) => (
  <StyledBigHead
    accessory="none"
    body="chest"
    circleColor="blue"
    clothing="shirt"
    clothingColor="blue"
    eyebrows="raised"
    eyes={eyesStyle}
    faceMask={false}
    lashes={false}
    faceMaskColor="black"
    facialHair="stubble"
    graphic="react"
    hair="none"
    hairColor="white"
    hat="none5"
    hatColor="blue"
    lipColor="turqoise"
    mask={false}
    mouth="openSmile"
    skinTone="light"
  />
)

export default BigHeadLeggett
