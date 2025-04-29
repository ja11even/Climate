import styled from "styled-components";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1rem;
`;
function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
