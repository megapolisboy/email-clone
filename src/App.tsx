import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Login from "./components/Login";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectCurrentUser, signIn } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useAppSelector(selectSendMessageIsOpen);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const logIn = () => {
    dispatch(signIn());
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) logIn();
    });
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
