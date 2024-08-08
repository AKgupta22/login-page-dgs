import TableHeaderItem from "@/components/TableHeaderItem";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const AppealsLetterContent = () => {
  return (
    <div className="content-container">
      <div className="tab-container">
        <div className="tab-content">
          <span className="tab-content_text">Appeal Letter </span>
          <div className="flex tab-content_badge">
            <span className="tab-content_badge-text">05</span>
          </div>
        </div>
        <div className="tab-container_hr" />
      </div>
      <div className="table-container">
        <div className="table-search-box-container">
          <div className="table-search-box-items">
            <div className="relative">
              <input
                type="text"
                className="table-search-box-container_input"
                placeholder="Search by Property, Jurisdiction, Parcel Number or Client"
              />
              <div className="table-search-box-container_search">
                <CiSearch size={"18px"} />
              </div>
            </div>
            <button className="table-search-box-items_setting">
              <img src="/images/icons/setting-5.svg" alt="setting-5.svg" />
            </button>
            <button>
              <img src="/images/icons/tooltip-icon.svg" alt="tooltip.svg" />
            </button>
          </div>
        </div>
        <div className="table-container_table">
          <table className="w-full">
            <thead className="table_heading">
              <tr>
                <th className="table-container_table_first-child">
                  <button>
                    <img src="/images/icons/untick-square.svg" alt="tick.svg" />
                  </button>
                </th>
                <th>
                  <TableHeaderItem heading="TAX YEAR" />
                </th>
                <th />
                <th>
                  <TableHeaderItem heading="COMPANY" />
                </th>
                <th />
                <th>
                  <TableHeaderItem heading="STATE" />
                </th>
                <th />
                <th>
                  <TableHeaderItem heading="ASSESSOR" />
                </th>
                <th />
                <th>
                  <TableHeaderItem heading="ACCOUNT NUMBER" />
                </th>
                <th />
                <th>
                  <TableHeaderItem heading="APPEALED DEADLINE" />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((item, i) => (
                <tr key={i}>
                  <td className="table-container_table_first-child">
                    <button>
                      <img
                        src={
                          i % 2 === 0
                            ? "/images/icons/untick-square.svg"
                            : "/images/icons/tick-square.svg"
                        }
                        alt="tick.svg"
                      />
                    </button>
                  </td>
                  <td>2017</td>
                  <td />
                  <td>Alabama and Gulf Coast Railway LLC</td>
                  <td />
                  <td>AL</td>
                  <td />
                  <td>Wilcox County Tax Collector</td>
                  <td />
                  <td>1_87060</td>
                  <td />
                  <td>June 25, 2023</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          <span className="pagination-container_page-text">1-10 of 120</span>
          <div className="pagination_pages">
            <div className="pagination_pages_action-container">
              <GrFormPreviousLink size={"8.17px"} />{" "}
              <span className="pagination-container_page-text action-text">
                Previous
              </span>
            </div>
            <div className="pages_buttons_container">
              <button className="page-number_button active pagination-container_page-text">
                1
              </button>
              <button className="page-number_button pagination-container_page-text">
                2
              </button>
              <button className="page-number_button pagination-container_page-text">
                3
              </button>
              <button className="page-number_button pagination-container_page-text">
                ...
              </button>
              <button className="page-number_button pagination-container_page-text">
                8
              </button>
              <button className="page-number_button pagination-container_page-text">
                9
              </button>
              <button className="page-number_button pagination-container_page-text">
                10
              </button>
            </div>
            <div className="pagination_pages_action-container">
              <span className="pagination-container_page-text action-text">
                Next
              </span>
              <GrFormNextLink size={"8.17px"} />
            </div>
          </div>
          <div className="pagination-goto">
            <span className="pagination-container_page-text">Go on to</span>
            <input type="text" className="pagination-container_page-text" defaultValue={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppealsLetterContent;
