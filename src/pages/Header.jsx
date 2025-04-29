import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import Heading from "../ui/Heading";
const StyledHeader = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90px;
    margin-left: 4.5px;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    margin-left: 195px;
  }
`;
function Header() {
  return (
    <div>
      <StyledHeader>
        <Heading as="h1">Climate.</Heading>
        <Container>
          <HeaderMenu />
        </Container>
      </StyledHeader>
    </div>
  );
}

export default Header;
