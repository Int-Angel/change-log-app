import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CgSearch } from "react-icons/cg";

import "react-datepicker/dist/react-datepicker.css";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="searchbarContainer">
      <div className="searchName">
        <input type="text" placeholder="project" />
      </div>
      <div className="searchCreator">
        <input type="text" placeholder="creator" />
      </div>

      <div className="dates">
        <div>
          <div className="dateTitle">Start date:</div>
          <DatePicker
            selected={startDate}
            placeholderText="Start Date"
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <div className="dateTitle">End date:</div>
          <DatePicker
            selected={endDate}
            placeholderText="End Date"
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>

      <div className="Search">
        <CgSearch size={30} />
      </div>
    </div>
  );
}

export default SearchBar;
