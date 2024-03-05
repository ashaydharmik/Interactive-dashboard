import React ,{useState} from 'react'
import { CiFolderOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import "./products.scss"
import { FaSortDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { PiNumberCircleSevenLight } from "react-icons/pi";

const Products = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const products = ["Roadmap", "Feedback","Performance", "Team","Analytics"];
  return (
    <>
    <section className='folder-container'>
    <div className='box1'>

    <div className='folders'>
        <p style={{color:'grey'}}>FOLDERS </p>
        <p ><GoPlus /></p>
    </div>
    <div className='folder-box'  style={{background:" rgb(230, 230, 230)" }}>
        <p><span><CiFolderOn /></span>Products</p>
        {isDropdownOpen ? (
          <FaCaretUp onClick={() => setDropdownOpen(!isDropdownOpen)} />
        ) : (
          <FaSortDown onClick={() => setDropdownOpen(!isDropdownOpen)} />
        )}
    </div>
    {isDropdownOpen && (
        <div className='dropdowns'>
          
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
            <li style={{cursor:"pointer"}}><span><IoIosAddCircleOutline /></span>Add new sub</li>
          </ul>
        </div>
      )}

<div className='folder-box' >
        <p><span><CiFolderOn /></span>Sales</p>
        {isDropdownOpen ? (
          <FaCaretUp  />
        ) : (
          <FaSortDown  />
        )}
    </div>
<div className='folder-box' >
        <p><span><CiFolderOn /></span>Design</p>
        {isDropdownOpen ? (
          <FaCaretUp  />
        ) : (
          <FaSortDown  />
        )}
    </div>
<div className='folder-box' >
        <p><span><CiFolderOn /></span>Office</p>
    </div>
<div className='folder-box' >
        <p><span><CiFolderOn /></span>Legal</p>
    </div>
    </div>
<div className='box2'>

    <div className='bottom-menu'>
        <p><MdOutlinePersonAddAlt1/>Invite teammates</p>
        <p><IoMdHelpCircleOutline/>Help and First steps</p>
        <p  style={{background:" rgb(230, 230, 230)" }}><PiNumberCircleSevenLight/>days left on trial <span>Add billing</span></p>
    </div>
</div>

    </section>
    </>
  )
}

export default Products