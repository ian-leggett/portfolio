import styled, { keyframes } from 'styled-components'
import { FaReact, FaLinkedin } from 'react-icons/fa'
import { fadeInUp, fadeIn } from 'react-animations'

import { MEDIA_QUERIES } from '../../styles/constants'

const HeaderContainer = styled('section')`
  padding: 40px 20px;
  background: rgb(47, 61, 75);
  background: linear-gradient(
    0deg,
    rgba(47, 61, 75, 1) 0%,
    rgba(37, 37, 37, 1) 100%
  );
  height: 400px;
`

const HeaderInnerContainer = styled('div')`
  ${MEDIA_QUERIES.TABLET} {
    display: grid;
    grid-template-columns: 1.5fr 4fr;
    column-gap: 40px;
    margin: 0 auto;
    max-width: 960px;
  }
`

const StyledHeader = styled('h1')`
  animation: 0.5s ${keyframes(fadeInUp)};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 700;
  font-size: 3.9rem;
`

const ProfilePic = styled('div')`
  display: none;
  ${MEDIA_QUERIES.TABLET} {
    display: block;
    transform: rotate(-4deg);
    text-align: center;

    img {
      /* width: 100%; */
      max-width: 250px;
      border-radius: 5px;
      border: 2px solid ${({ theme }) => theme.palette.lightGrey};
      margin-bottom: 20px;
    }
  }
`
const HeaderContent = styled('div')`
 
`

const StyledParagraph = styled('p')`
animation: 2s ${keyframes(fadeIn)};
  color: ${({ theme }) => theme.palette.lightGrey};
  font-size: 1.8rem;
`

const StyledQuote = styled('q')`
  font-size: 2.5rem;
  font-weight: 100;
  color: ${({ theme }) => theme.palette.lightGrey};
`

const StyledFaLinkedin = styled(FaLinkedin)`
  font-size: 5rem;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <ProfilePic>
          <img
            src="/assets/images/profile.jpeg"
            alt="Ian Leggett's profile picture"
          />
          <StyledQuote>Failing as fast as I can</StyledQuote>
        </ProfilePic>
        <HeaderContent>
          <StyledHeader>{`< Hey, I'm Ian Leggett />`}</StyledHeader>
          <StyledParagraph>
            I'm a{' '}
            <b>
              Senior Front-end Developer with over 15 years commercial
              experience
            </b>{' '}
            developing web applications for top companies in domains such as
            insurance, gaming, finance, digital filming, academic publishing,
            public sector, government and recruitment.
          </StyledParagraph>
          <p>Get in contact</p>
          <a href="https://www.linkedin.com/in/ianleggett/"><StyledFaLinkedin /></a>Connect with me
        </HeaderContent>
      </HeaderInnerContainer>
    </HeaderContainer>
  )
}

export default Header
