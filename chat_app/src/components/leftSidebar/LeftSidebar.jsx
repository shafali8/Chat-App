import "./leftSidebar.css"
import { IoMdMore } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import assets from "../../asset/assets"

const LeftSidebar = () => {
 return (
 <div className="ls">
  <div className="ls-top">
   <div className="ls-nav">
    <div className="ls-nav-logo">
        <img src={assets.chat_logo} alt="logo" />
         <span>Talk App</span>
    </div>
    <div className="menu">
     <IoMdMore /> 
    </div>   
   </div>
   <div className="ls-search">
    <HiMagnifyingGlass className="search-icon"/>
    <input type="text" placeholder="Search here" />
   </div>
  </div>

  <div className="ls-list">
   {Array(12).fill("").map((item, index) => (
    <div className="friends" key={index}>
    <img src={assets.userProfile} alt="user" />
    <div className="user-info">
     <p>Shafali Sonker</p>
     <span>Hello, how are you ?</span>
    </div>
   </div>
   ))}
  </div>
 </div>
    )
}

export default LeftSidebar