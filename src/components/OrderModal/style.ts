import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
  backdrop-filter: blur(4.5px);
`

export const ModalBody = styled.div`
  padding: 3.2rem;
  width: 48rem;
  background-color: #FFF;
  border-radius: 0.8rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
    }

    button {
      font-size: 1.6rem;
      line-height: 0;
      background-color: transparent;
      border: 0;
    }
  }

  .status-container {
    margin-top: 3.2rem;

    small {
      font-size: 1.4rem;
      opacity: .8;
    }

    > div {
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-top: .8rem;

      span, strong {
        font-size: 1.6rem;
      }
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 3.2rem;

  > strong {
    font-size: 2rem;
    font-weight: 500;
    opacity: .8rem;
  }

  .order-items {
    margin-top: 1.6rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1.6rem;
      }

      > img {
        height: 2.851rem;
        width: 5.8rem;
        border-radius: .6rem;
      }

      .quantity {
        display: block;
        font-size: 1.4rem;
        color: #666;
        margin-left: 1.2rem;
        min-width: 2rem;
      }

      .product-details {
        strong {
          display: block;
          font-size: 1.6rem;
          margin-bottom: .4rem;
        }
        span {
          font-size: 1.4rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.4rem;

    span {
      font-size: 1.4rem;
      font-weight: 500;
      opacity: .8;
    }

    > strong {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    font-size: 2rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    border: 0;
    border-radius: 4.8rem;
    transition: filter .3s;
  }
  .primary {
    color: #FFF;
    background-color: #333;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .secondary {
    color: #D73035;
    margin-top: 1.6rem;
    padding: 1.4rem 2.4rem;
    background-color: transparent;

    &:hover {
      filter: brightness(0.6);
    }
  }
`
