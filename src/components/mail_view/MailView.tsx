import React from "react";
import "./mailView.css";
import { MailInterface } from "../../App";
import close_icon from "../../assets/images/close.svg";
import clip_icon from "../../assets/images/icon_clip.svg";

export default function MailView(props: {
  onTabClick: any;
  showView: boolean;
  deleteOpenMail: any;
  updateShowMailView: any;
  currentOpenMail: number;
  updateCurrentOpenMail: number;
  openMails: { result: string; data: OpenMailDictionary<MailInterface> };
}) {
  const {
    showView,
    onTabClick,
    openMails,
    updateShowMailView,
    deleteOpenMail,
    currentOpenMail,
    updateCurrentOpenMail
  } = props;
  var openMailList: MailListInterface[] = getMailList(openMails.data);

  return (
    <div className={`mail-view ${showView ? "show-view" : "hide-view"}`}>
      <div className="top-close-icon" onClick={() => updateShowMailView(false)}>
        <img src={close_icon} alt="close icon" />
      </div>
      <div className="view-container">
        <ViewHeader
          onTabClick={onTabClick}
          openMailList={openMailList}
          deleteOpenMail={deleteOpenMail}
          setCurrentMail={updateCurrentOpenMail}></ViewHeader>
        <ViewBody openMailList={openMailList} currentOpenMail={currentOpenMail}></ViewBody>
      </div>
    </div>
  );
}

function ViewHeader(props: {
  onTabClick: any;
  deleteOpenMail: any;
  setCurrentMail: any;
  openMailList: MailListInterface[];
}) {
  return (
    <ul className="view-header">
      {props.openMailList.map((value, index) => (
        <li id={String(index)} key={index} onClick={() => tabClick(index)}>
          <img src={close_icon} alt="close icon" onClick={() => closeMail(value.key, index)} />
          <p>{value.value.subject}</p>
        </li>
      ))}
    </ul>
  );

  function closeMail(key: number, index: number) {
    if (index === 0 && props.openMailList.length > 0) index++;
    else if (index > 0) index--;
    props.deleteOpenMail(key);
    setTimeout(() => {
      tabClick(index);
    }, 100);
  }

  function tabClick(id: number) {
    props.onTabClick(id);
    props.setCurrentMail(id);
  }
}

function ViewBody(props: { openMailList: MailListInterface[]; currentOpenMail: number }) {
  const { openMailList, currentOpenMail } = props;

  if (openMailList.length > 0 && openMailList[currentOpenMail]) {
    var mail: MailInterface = openMailList[currentOpenMail].value;

    return (
      <div className="view-body">
        <div className="top">
          <p className="subject">{mail.subject}</p>
          <div className="top-details">
            <div className="date">
              {mail.hasAttachment && <img src={clip_icon} alt="clip icon" />}
              <p>{mail.date}</p>
            </div>

            <div className="email-address">
              <p className="from">{mail.from}</p>
              <p>{`To: ${mail.to}`}</p>
            </div>
          </div>
        </div>
        <div className="body-text">
          <p>{mail.body}</p>
        </div>
      </div>
    );
  } else return <div></div>;
}

function getMailList(obj: OpenMailDictionary<MailInterface>): MailListInterface[] {
  var mailList: MailListInterface[] = [];
  for (let key in obj) {
    mailList.push({ key: parseInt(key), value: obj[key] });
  }
  return mailList;
}

interface OpenMailDictionary<Interface> {
  [id: number]: Interface;
}
interface MailListInterface {
  key: number;
  value: MailInterface;
}
MailView.defaultProps = {
  openMails: {},
  showView: false
};
