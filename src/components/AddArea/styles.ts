import styled from "styled-components";

export const container = styled.div`
  border: 1px solid #555;
  border-radius: 0.9rem;
  padding: 0.6rem;
  margin-block: 1.2rem;
  display: flex;
  align-items: center;

  .image {
    width: 1.25rem;
    margin-right: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input {
    border: 0px;
    background: transparent;
    flex: 1;
    outline: none;
    color: #fff;
    font-size: 1.1rem;
  }
`