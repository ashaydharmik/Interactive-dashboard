import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import { IoFilter } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { BiImport } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import "./mainPage.scss";
import Table from "../Table/Table";
const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <section className="main-page-container">
        <div className="header">
          <div className="folder-name">
            <p>Products</p>
          </div>
          <div className="folder-search">
            <p className="input">
              <IoSearchSharp />
              <input
                type="search"
                name="search"
                placeholder="Search for..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </p>
            <p>
              <HiOutlineFolderOpen />
            </p>
            <p>
              <IoMdSettings />
            </p>
          </div>
        </div>
        <div className="heading">
          <div className="left-box">
            <button type="button">
              <PiCirclesFour
                style={{ position: "relative", top: "2px", marginRight: "5px" }}
              />
              All Brands <FaSortDown />
            </button>
            <button type="button">
              Desk
              <FaSortDown style={{ marginLeft: "5px" }} />
            </button>
            <button type="button">
              Tags
              <FaSortDown style={{ marginLeft: "5px" }} />
            </button>
            <button type="button">
              <LiaSortAlphaDownSolid
                style={{ position: "relative", top: "2px", marginRight: "5px" }}
              />
              Sort
            </button>
            <button type="button">
              {" "}
              <IoFilter
                style={{ position: "relative", top: "2px", marginRight: "5px" }}
              />
              Filter
            </button>
          </div>
          <div className="right-box">
            <button type="button">
              <CiSquarePlus
                style={{ position: "relative", top: "2px", marginRight: "5px" }}
              />
              Meeting{" "}
            </button>
            <button type="button">
              <BiImport
                style={{ position: "relative", top: "2px", marginRight: "5px" }}
              />
              Import/Export
            </button>
          </div>
        </div>
        <div className="body">
          <Table searchQuery={searchQuery} />
        </div>
        <div className="bottom">
          <div className="bottom-box">
            <button type="button">
              <TbSquareRoundedNumber3Filled />
              Selected
            </button>
            <button type="button">
              <IoArchiveOutline />
              Archive
            </button>
            <button type="button" style={{ color: "#c93131" }}>
              <RiDeleteBin7Line style={{ color: "#c93131" }} />
              Delete
            </button>
            <button type="button">
              More{" "}
              <FaSortDown style={{ position: "relative", bottom: "4px" }} />
            </button>
            <p>
              <RxCross2 />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
