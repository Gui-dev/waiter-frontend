import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border: 1px solid rgba(204, 204, 204, .4);
  border-radius: 1.6rem;

  > header {
    display: flex;
    align-items: center;
    gap: .8rem;
    font-size: 2rem;
    padding: .8rem;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  width: 100%;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    font-size: 1.6rem;
    font-weight: 600;
    height: 12.8rem;
    width: 100%;
    background-color: #FFF;
    border: 1px solid rgba(204, 204, 204, .4);
    border-radius: .8rem;

    & + button {
      margin-top: 2.4rem;
    }

    &:hover {
      background-color: rgba(204, 204, 204, .3);
    }

    strong {
      font-size: 1.6rem;
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }
  }
`
