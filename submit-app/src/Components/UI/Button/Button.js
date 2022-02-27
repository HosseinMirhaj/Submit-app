import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.75rem 1.2rem;
  border: 1px solid silver;
  background: rgb(29, 155, 240);
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  @media (min-width: 768px) {
    width: auto;
  }
  &:focus {
    outline: none;
  }
  &:hover,
  active {
    background: rgb(26, 140, 216);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
