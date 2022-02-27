import styled from "styled-components";

const FormControl = styled.div`
  margin: 2rem 1rem;
  & label {
    font-weight: bold;
    display: block;
    margin: 0.5rem 0;
    margin-bottom: 0.5rem;
  }

  & input {
    width: 100%;
    display: block;
    margin-bottom: 2rem;
    padding: 0.5rem 0.25rem;
    line-height: 1.2rem;
    font-size: 20px;
  }

  & input:focus {
    outline: none;
    border: 3px solid rgb(191, 222, 255);
    border-radius: 8px;
    flex: auto;
  }

  &.invalid label {
    color: red;
  }
  &.invalid input {
    outline: none;
    border-color: #ff6666;
    background: #ffb3b3;
    border-radius: 8px;
  }
`;

export default FormControl;
