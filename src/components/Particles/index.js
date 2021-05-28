import { Particles as TsParticles } from 'react-tsparticles'
import styled from 'styled-components'
import options from './options'

const StyledTsParticles = styled(TsParticles)`
  height: 100vh;
  width: 100%;
`
const Particles = () => <StyledTsParticles id="tsparticles" options={options} />

export default Particles
