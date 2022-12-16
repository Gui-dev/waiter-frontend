import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
  margin: 4rem auto;
  max-width: 1216px;
  width: 100%;
`

export const LoadingContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: calc(100vh - 198px);
`
