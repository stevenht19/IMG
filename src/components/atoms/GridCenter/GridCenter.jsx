import styled from 'styled-components'

const Grid = styled.div`
  grid-column: 1 / 3;
  @media screen and (min-width: 546px) {
    grid-column: 1 / 4;
  }
  @media screen and (min-width: 800px) {
    grid-column: 1 / 5;
  }
  @media screen and (min-width: 1200px){
    grid-column: 1 / 6;
  }
`

const GridCenter = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  )
}

export default GridCenter