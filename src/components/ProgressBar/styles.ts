import styled from 'styled-components'
type Props = {
  size: number
}
export const Container = styled.div(
  ({ size }: Props) =>
    `
  background-color: #20212c;
  padding: 0.6rem;
  border-radius: 0.2rem;
   h3 {
    color: white;
  }
  p {
    color: white;
    margin-bottom: -10px;
  }

  span{
    display:inline-block;
    transition: .5s;
    width: ${size === 0 ? '100%' : size + 'px'};
    height:5px;
    background-color: ${size === 0 ? 'red' : 'green'};
  }
  `
)
