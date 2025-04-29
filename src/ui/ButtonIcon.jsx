import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  font-size: 4rem;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin-top: 1px;
  }
`;

export default ButtonIcon;
