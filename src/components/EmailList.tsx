import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import nextId from "react-id-generator";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchEmails, selectEmails } from "../features/userSlice";
import "../styles/EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";

const EmailList: React.FC = () => {
  const emails = useAppSelector(selectEmails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotion" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map((email) => {
          const newId = nextId();
          return (
            <EmailRow
              id={newId}
              key={newId}
              title={email.to}
              subject={email.subject}
              description={email.message}
              time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
