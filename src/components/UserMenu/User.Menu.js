import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";
import { Button } from '@chakra-ui/react'
import { LogOutDiv } from "./UserMenu.styled";

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.email)
  const dispatch = useDispatch()
const handleLogOut =() => {
dispatch(logOut())

}

    
  return (
    <LogOutDiv>
      <p>{name}</p>
      <Button onClick={handleLogOut}>Logout</Button>
      
    </LogOutDiv>
  );
};
