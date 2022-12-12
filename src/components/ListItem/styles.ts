import styled from 'styled-components'

type Props = {
  done: boolean
}

export const Container = styled.div(
  (props: Props) =>
    `
  display: flex;
  background-color: #20212c;
  padding: 0.6rem;
  border-radius: 0.6rem;
  margin-bottom: 0.6rem;
  alig-items: center;
  justify-content: space-between;
  animation: anima-left 1s ease;

  label {
    display: flex;
    alig-items: center;
    justify-content:center;
    gap: .3rem;
    color: #ccc;
    text-decoration: ${props.done ? 'line-through' : 'initial'};
    font-size:1.3rem;

  }
  label input {
    width:1.5rem;
  }

  button{
    border: none;
    display:inline-block;
    width:1.7rem;
    background-color:transparent;
    heigth:100%;
    cursor:pointer;
  }

  button:hover img{
    animation: show-pop 1s infinite linear;
  }

  @keyframes show-pop{
  0%{
    transform: scale(1,1);
  }
  50%{
    transform: scale(1.1,1.1);
  }
  100%{
    transform: scale(1,1);
  }
}

  @keyframes anima-left{
    from{
      opacity:0;
      transform:translate3D(-500px,0,0)
    }
    to{
      opacity:initial;
      transform:initial;
    }
  }

`
)
