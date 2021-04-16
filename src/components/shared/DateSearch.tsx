import React from "react";
import "./shared.css";
import calender_icon from "../../assets/images/icon_calender.svg";
import search_icon from "../../assets/images/icon_search.svg";

function DateSearch() {
  return (
    <div className="date-search">
      <div className="icon">
        <img src={search_icon} alt="search icon" />
      </div>
      <div className="input">
        <div className="calender-icon">
          <img src={calender_icon} alt="calender icon" />
        </div>
        <input
          type="datetime"
          name="date input"
          id="date_input"
          defaultValue="2020/1/1 - 2020/1/1"
        />
      </div>
    </div>
  );
}

export default DateSearch;
