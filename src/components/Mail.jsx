import React, { useState } from "react";
import "./mail.css";
import MailList from "./mail_list/MailList";
import MailView from "./mail_view/MailView";

var isMobile: boolean = window.innerWidth <= 768;

function Mail(props) {
  const [time, updateTime] = useState(new Date().getTime());
  const [showMailView, updateShowMailView] = useState(false);
  const [currentOpenMail, updateCurrentOpenMail] = useState(0);
  const [openMails, setOpenMails] = useState({ length: 0, data: {} });

  return (
    <div className="app-mail">
      <MailList mails={props.mails} updateOpenMails={updateOpenMails}></MailList>
      <MailView
        time={time}
        openMails={openMails}
        onTabClick={onTabClick}
        showView={showMailView}
        deleteOpenMail={deleteOpenMail}
        currentOpenMail={currentOpenMail}
        updateCurrentOpenMail={updateCurrentOpenMail}
        updateShowMailView={updateShowMailView}></MailView>
    </div>
  );

  function updateOpenMails(index) {
    var _mailList = openMails;
    if (!_mailList.data[index]) {
      if (isMobile) {
        _mailList = { length: 0, data: {} };
      }

      if (Object.keys(_mailList.data).length >= 3) {
        var _firstKey = Object.keys(_mailList.data)[0];
        delete _mailList.data[_firstKey];
        _mailList.length--;
      }

      _mailList.length = ++_mailList.length;
      _mailList.data[index] = props.mails[index];
      setOpenMails(_mailList);
      updateTime(new Date().getTime());

      setTimeout(() => {
        onTabClick(_mailList.length - 1);
        updateCurrentOpenMail(_mailList.length - 1);
      }, 100);
    }

    if (!showMailView) updateShowMailView(true);
  }

  function deleteOpenMail(index) {
    if (openMails.data[index]) {
      if (openMails.length === 1) updateShowMailView(false);
      var _updatedOpenMails = openMails;
      delete _updatedOpenMails.data[index];
      _updatedOpenMails.length = --openMails.length;
      setOpenMails(_updatedOpenMails);
      updateTime(new Date().getTime());
    }
  }

  function onTabClick(id) {
    for (let i = 0; i < 3; i++) {
      document.getElementById(String(i))?.classList.remove("active");
    }
    document.getElementById(String(id))?.classList.add("active");
  }
}

export default Mail;
