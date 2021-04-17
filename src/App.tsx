import "./App.css";
import React from "react";
import Mail from "./components/Mail";
import DateSearch from "./components/shared/DateSearch";
import DefaultContent from "./components/shared/DefaultContent";

export default function App() {
  return (
    <div className="App">
      <div className="top-search">
        <DateSearch />
      </div>
      <div className="mail">
        <ResultCount count={mails.length}></ResultCount>
        <div className="mail-content">
          {mails.length <= 0 ? <DefaultContent></DefaultContent> : <Mail mails={mails}></Mail>}
        </div>
      </div>
    </div>
  );
}

function ResultCount(props: result) {
  return (
    <p className="result-count">
      Results: <span>{props.count}</span>
      {props.count > 0 ? "mails" : "mail"}
    </p>
  );
}

interface result {
  count: number;
}
export interface MailInterface {
  from: string;
  to: string;
  count: number;
  subject: string;
  hasAttachment: boolean;
  date: string;
  body: string;
}

var mails: MailInterface[] = [
  {
    from: "aaa@example.com",
    to: "zzz.zzz@example.com",
    count: 1,
    subject: "[ HR-888 ] Notice of official announcement",
    hasAttachment: true,
    date: "0:20",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "bbb.bbbb@example.com",
    to: "yyy@example.com",
    count: 0,
    subject: '"[web:333] "Web Contact"',
    hasAttachment: false,
    date: "0:10",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "ccc@example.com",
    to: "xxx@example.com, www.www@example.com",
    count: 1,
    subject: "Happy New Year! Greetings for the New Year.",
    hasAttachment: true,
    date: "0:00",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "ddd.dddd@example.com",
    to: "vvv.vvv@example.com, uuu@example.com",
    count: 1,
    subject: "[HR-887(Revised: Office Expansion Project Team)] Notice of office expansion",
    hasAttachment: false,
    date: "Jan 01",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "eee@example.com",
    to: "xxx@example.com, sss@example.com",
    count: 2,
    subject: "[Github] Logout page",
    hasAttachment: false,
    date: "Jan 01",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "fff.ffff@example.com",
    to: "qqq.qqq@example.com",
    count: 0,
    subject: "dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
    hasAttachment: false,
    date: "Jan 01",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "ggg@example.com",
    to: "ppp@example.com",
    count: 0,
    subject: "Re: [Github] Brush-up on loading animation ",
    hasAttachment: false,
    date: "Jan 01",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "hhh.hhh@@example.com",
    to: "ooo.ooo@example.com",
    count: 0,
    subject: "Workplace Summary for sample, Inc.: Jun 2 - Jun 9",
    hasAttachment: true,
    date: "Jan 01",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "iii@example.com",
    to: "nnn@example.com",
    count: 0,
    subject: "I love you",
    hasAttachment: true,
    date: "2019/12/31",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    from: "Pablo-Diego@example.com",
    to: "Pablo-Diego-José-Francisco@example.com",
    count: 0,
    subject: "[info:888] ABC EQUIPMENT COMPANY",
    hasAttachment: false,
    date: "2019/12/31",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
