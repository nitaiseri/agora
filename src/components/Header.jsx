import { selectIsManager, login, logout } from "../app/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import classes from './Header.module.css'

function Header() {
  const dispatch = useDispatch();
  const isManager = useSelector(selectIsManager);

  const toggleManagerHandler = () => {
    if (isManager) {
        dispatch(logout())
    }else{
        dispatch(login())
    }
  };

  return (
    <div className={classes.header}>
      <Button onClick={toggleManagerHandler}>
        {isManager ? "Logout" : "Login"}
      </Button>
    </div>
  );
}

export default Header;
