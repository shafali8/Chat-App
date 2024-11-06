import "./chatbox.css"
import asserts from "../../asset/assets"
import { GoDotFill } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
const ChatBox = () => {
 return (
  <div className="chat-box">
   <div className="chat-user">
    <img src={asserts.userProfile} alt="user" />
    <p>Shafali Sonker <GoDotFill className="green"/></p>
    
    <CiCircleInfo className="help"/>
   </div>
  </div>
    )
}

export default ChatBox