import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Email,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import "../styles/Header.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectCurrentUser, signOut } from "../features/userSlice";

const Header: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <div className="emblem">
          <Email />
          <h1>Gmail</h1>
        </div>
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user?.photoURL || ""} onClick={logOut} />
      </div>
    </div>
  );
};

export default Header;
