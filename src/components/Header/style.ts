import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
  background-color: #D73035;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  max-width: 1216px;
  width: 100%;

  .page-details {
    h1 {
      font-size: 3.2rem;
      font-weight: 600;
      color: #FFF;
      margin-bottom: .6rem;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: #FFF;
      opacity: 0.9;
    }
  }
`
