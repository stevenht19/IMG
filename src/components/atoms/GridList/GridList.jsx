import styled from 'styled-components'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
  grid-auto-rows: minmax(10rem, auto);
  li:nth-child(3n) {
    grid-column: span 2;
    grid-row: span 2;
  }
  li:nth-child(3n+1) {
    grid-column: span 1;
    grid-row: span 1;
  }

`

const GridList = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  )
}

export default GridList