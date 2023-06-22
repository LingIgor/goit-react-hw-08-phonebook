import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.email)
  const dispatch = useDispatch()
const handleLogOut =() => {
dispatch(logOut())

}

    
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleLogOut}>Logout</button>
      
    </div>
  );
};
