import "./chat.css"
import LeftSidebar from "../../components/leftSidebar/LeftSidebar"
import RightSidebar from "../../components/rightSidebar/RightSideBar"
import ChatBox from "../../components/chatBox/ChatBox"
const Chat = () => {
    return (
     <div className="chat">
      <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RightSidebar/>
      </div>
     </div>
    )
}

export default Chat