import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Sidebar from "./components/Sidebar";

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
