import React from "react";
import "./mailList.css";
import { MailInterface } from "../../App";
import clip_icon from "../../assets/images/icon_clip.svg";
import mail_icon from "../../assets/images/icon_mail_sp.svg";
import order_icon from "../../assets/images/icon_arrow01.svg";
import arrow_icon from "../../assets/images/icon_arrow02.svg";

var isMobile: boolean = window.innerWidth <= 768;

export default function MailList(props: { mails: MailInterface[] }) {
  return (
    <div className="mail-list">
      <div className="table-list">
        <ListHeader />
        {isMobile ? (
          <MobileList mails={props.mails}></MobileList>
        ) : (
          <TableList mails={props.mails}></TableList>
        )}
      </div>
    </div>
  );
}

function ListHeader() {
  return (
    <ul className="table-header">
      <li className="col-2 inline-display">
        <p style={isMobile ? { color: "#2f313f" } : {}}>From</p>
        {isMobile && <img src={order_icon} alt="order icon" />}
      </li>
      <li className="col-4">
        <p>To</p>
      </li>
      <li className="col-5">
        <p>Subject</p>
      </li>
      <li className="col-1 inline-display">
        <p style={!isMobile ? { color: "#2f313f" } : {}}>Date</p>
        {!isMobile && <img src={order_icon} alt="order icon" />}
      </li>
    </ul>
  );
}

function TableList(props: { mails: MailInterface[] }) {
  const { mails } = props;
  var mailItems = mails.map((mail, index) => (
    <li className="body-list" id={`mail_${index}`}>
      <ul>
        <li className="col-2">
          <p>{mail.from}</p>
        </li>
        <li className="col-4">
          <div className="indicators">
            {mail.count && mail.count > 0 ? (
              <div className="count">
                <p>{`+${mail.count}`}</p>
              </div>
            ) : null}
            <div>
              <p className="to-text">{mail.to}</p>
            </div>
          </div>
        </li>
        <li className="col-5">
          <div className="indicators">
            {mail.hasAttachment && <img src={clip_icon} alt="clip icon" />}
            <div>
              <p className="subject-text">{mail.subject}</p>
            </div>
          </div>
        </li>
        <li className="col-1 body-date">
          <p>{mail.date}</p>
        </li>
      </ul>
    </li>
  ));

  return <ul className="table-body">{mailItems}</ul>;
}

function MobileList(props: { mails: MailInterface[] }) {
  const { mails } = props;
  var mailItems = mails.map((mail, index) => (
    <li className="body-list" id={`mail_${index}`}>
      <div className="mail-details">
        <img src={mail_icon} alt="mail icon" />
        <div className="details">
          <div className="from">
            <img id="arrow_icon_id" src={arrow_icon} alt="arrow icon" />
            <p className="date">{mail.date}</p>
            <img src={clip_icon} alt="attachment icon" />
            <p className="from-text">{mail.from}</p>
          </div>
          <div className="to">
            <div className="indicators">
              <p>{`+${mail.count}`}</p>
            </div>
            <div className="to-text">
              <p>{mail.to}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mail-subject">{mail.subject}</p>
    </li>
  ));
  return <ul className="table-body">{mailItems}</ul>;
}
