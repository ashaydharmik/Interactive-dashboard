import React from "react";
import { CiPen } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import "./teams.scss";
const Teams = () => {
  return (
    <>
      <div className="teams-container">
        <div>
          <p>
            <CiPen />
            Design Team
          </p>
          <p className="unit">x+1</p>
        </div>
        <div>
          <p>
            <CiBullhorn />
            Marketing Team
          </p>
          <p className="unit">x+2</p>
        </div>
        <div>
          <p>
            <IoMdCode />
            Development Team
          </p>
          <p className="unit">x+3</p>
        </div>
        <div>
          <p style={{color:'grey'}}>
            <CiSquarePlus />
            Create a team
          </p>
       
        </div>
        
      </div>
    </>
  );
};

export default Teams;
