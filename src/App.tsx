import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useAppSelector(selectSendMessageIsOpen);
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
