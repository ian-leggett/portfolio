import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

import { MEDIA_QUERIES } from '../styles/constants'
import Particles from '../components/Particles'
import Delay from '../components/Delay'
import BigHeadLeggett from '../components/BigHeadLeggett'

export const BackgroundGradient = styled('div')`
  background: rgb(47, 61, 75);
  background: linear-gradient(
    0deg,
    rgba(47, 61, 75, 1) 0%,
    rgba(37, 37, 37, 1) 100%
  );
  height: 100vh;
`

const CenterContainer = styled('div')`
  text-align: center;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`

const StyledHeader = styled('h1')`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  margin: 0;
  font-size: 4rem;
  line-height: 1.2;
  ${MEDIA_QUERIES.TABLET} {
    font-size: 5rem;
  }
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 6rem;
  }
  div:first-child {
    margin-right: 10px;
    font-weight: 400;
  }
  div:last-child {
    margin-left: 10px;
    font-weight: 400;
  }
`
const StyledSubHeader = styled('h2')`
  color: ${({ theme }) => theme.palette.turquoise};
  font-weight: 100;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 30px;
  ${MEDIA_QUERIES.TABLET} {
    font-size: 4rem;
  }
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 5rem;
  }
`

const StyledLink = styled('a')`
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  ${MEDIA_QUERIES.TABLET} {
    font-size: 2rem;
  }

  span:first-child {
    transition: all 0.2s ease-in-out;
    display: block;
  }
  span:last-child {
    transition: all 0.2s ease-in-out;
    display: block;
    font-size: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.turquoise};
    span:first-child {
      transform: scale(1.2);
    }
    span:last-child {
      transform: translate(0, 10px);
    }
  }
`

const Index = () => {
  const router = useRouter()
  const [eyes, setEyes] = useState('happy')
  const [hasEnteredSite, setEnterSite] = useState(false)

  const onHoverRespond = (isActive) => {
    isActive ? setEyes('normal') : setEyes('happy')
  }

  const enterSite = (e) => {
    e.preventDefault()
    setEnterSite(true)
  }

  useEffect(() => {
    hasEnteredSite &&
      setTimeout(() => {
        console.log('yes')
        router.push('/about')
      }, 2000)
  }, [hasEnteredSite])

  return (
    <>
      <Head>
        <title>Ian Leggett - Front-end web developer</title>
      </Head>
      <BackgroundGradient>
        {!hasEnteredSite && <Particles />}
        <CenterContainer>
          <div>
            <Delay
              hideAfter={hasEnteredSite}
              animation={hasEnteredSite ? 'bounceOutUp' : 'bounceInDown'}
              delay={2000}
              duration="0.5s"
            >
              <BigHeadLeggett eyesStyle={hasEnteredSite ? 'dizzy' : eyes} />
            </Delay>
          </div>
          <div>
            <StyledHeader>
              <Delay
                hideAfter={hasEnteredSite}
                animation={hasEnteredSite ? 'fadeOutUp' : 'fadeInUp'}
                delay={2000}
              >{`<`}</Delay>
              <Delay
                hideAfter={hasEnteredSite}
                animation={hasEnteredSite ? 'fadeOutUp' : 'fadeInUp'}
              >
                Ian Leggett{' '}
              </Delay>
              <Delay
                hideAfter={hasEnteredSite}
                animation={hasEnteredSite ? 'fadeOutUp' : 'fadeInUp'}
                delay={2000}
              >{`/>`}</Delay>
            </StyledHeader>
          </div>
          <div>
            <Delay
              hideAfter={hasEnteredSite}
              animation={hasEnteredSite ? 'fadeOutDown' : 'fadeInUp'}
              delay={1200}
            >
              <StyledSubHeader>Front-end developer</StyledSubHeader>
            </Delay>
          </div>
          <Link href="/about">
            <StyledLink
              onMouseEnter={() => onHoverRespond(true)}
              onMouseLeave={() => onHoverRespond(false)}
              onClick={enterSite}
            >
              <Delay
                hideAfter={hasEnteredSite}
                animation={hasEnteredSite ? 'fadeOut' : 'fadeIn'}
                duration="2s"
                delay={3000}
                as="span"
              >
                Want to know about me?
              </Delay>
              <Delay
                hideAfter={hasEnteredSite}
                animation={hasEnteredSite ? 'fadeOutDown' : 'fadeInDown'}
                duration="0.5s"
                delay={3500}
                as="span"
              >
                <IoIosArrowDown />
              </Delay>
            </StyledLink>
          </Link>
        </CenterContainer>
      </BackgroundGradient>
    </>
  )
}

export default Index
