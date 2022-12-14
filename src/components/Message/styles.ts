import styled from 'styled-components'
type Props = {
  message: boolean
  textMessage: boolean
  completedList: boolean
}

export const Container = styled.div(
  (props: Props) => `

  display:flex;
  justify-content:space-between;
  padding-inline: 2rem;
  color : white;

  p{
    text-align:center;
  }
  .completed{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.2rem;
    min-width:13rem;
    padding:1rem .5rem;
    border-radius: .4rem;
    border: 1px solid #555;
    background-color: #20212c;
    opacity: 0;
    animation : ${props.completedList ? 'anima-completed' : ''} 6s forwards;
  }

  .completed p{
    text-align:left;
  }
  .completed span{
    display:flex;
    width:2rem;
    overflow:hidden;
    opacity: ${props.completedList ? '1' : '0'};
    transform: translateX(${props.completedList ? 'initial' : '-300px'});
    animation: show-message 1s infinite linear;
  }


  .content{
    opacity: ${props.message ? '1' : '0'};
    transform: translateX(${props.message ? 'initial' : '300px'});
    transition: 1.5s;
    width: 15rem;
    padding:1rem .5rem;
    border-radius: .4rem;
    border: 1px solid #555;
    background-color: #20212c;
  }

  .content span{
    display:block;
    opacity: ${props.message ? '1' : '0'};
    width:10px;
    height:5px;
    background-color: ${props.textMessage ? 'green' : 'red'};
    margin-top:.5rem;
    animation: ${props.message ? 'progress' : ''} 1s forwards;
  }

  @keyframes show-message{
    from{
      opacity:0;
    }
    to{
      opacity:initial;
    }
  }


  @keyframes anima-completed{
    0%{
      opacity:1;
      transform: translateX(-300px)
    }
    50%{
      opacity:1;
      transform: initial;
    }
    100%{
      transform: translateX(-300px)
      
    }
  }


  @keyframes progress{
    0% {
      width:0%
    }

    10% {
      width:10%
    }  
    20% {
      width:20%
    }  
    30% {
      width:30%
    }  
    40% {
      width:40%
    }  
    50%{
      width:50%
    }  
    60% {
      width:60%
    }  
    70% {
      width:70%
    }
    80% {
      width:80%
    }
    90% {
      width:90%
    }
    100%{
      width:100%
    }
  }

    `
)
