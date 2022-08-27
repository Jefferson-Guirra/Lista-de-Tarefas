import styled from 'styled-components'

type Props = {
  done: boolean
}

export const Container = styled.div(
  ({ done }: Props) =>
    `display: flex;
  background-color: #20212c;
  padding: 0.6rem;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  alig-items: center;
  justify-content: space-between;

  label {
    display: flex;
    alig-items: center;
    gap: .3rem;
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'}
  }
  input {
    width: 1.5rem;
    height: 1.5rem;
  }

  button{
    border: none;
    width:1.7rem;
    height:100%;
    cursor:pointer;
    background-color: transparent;
  }

  button:hover{
    animation: showDelete .5s forwards
  }

  @keyframes showDelete{
    from{
      transform: rotate(-45deg)
    }
    to{
      transform: initial
    }
  }

`
)
