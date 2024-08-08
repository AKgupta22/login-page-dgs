import React from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const TableHeaderItem = ({ heading }) => {
  return (
    <div className="table_heading_item">
      <span>{heading}</span>
      <button>
        <FaSort size={"12px"} />
      </button>
      <button>
        <FaFilter size={"12px"} />
      </button>
    </div>
  );
};

export default TableHeaderItem;
