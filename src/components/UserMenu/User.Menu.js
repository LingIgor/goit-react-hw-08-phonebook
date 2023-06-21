import { useSelector } from "react-redux";

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.email)
    
  return (
    <div>
      <p>{name}</p>
      <button>Logout</button>
    </div>
  );
};
