import React from "react";
import "./mail.css";
import MailList from "./mail_list/MailList";
import MailView from "./mail_view/MailView";
import { MailInterface } from "../App";


function Mail(props: { mails: MailInterface[] }) {
  return (
    <div className="app-mail">
      <MailList mails={props.mails}></MailList>
      <MailView></MailView>
    </div>
  );
}

export default Mail;
