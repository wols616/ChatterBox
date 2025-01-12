import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime.js";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-purple-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} pb-1`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">
        {formatedTime}
      </div>
    </div>
  );
}

export default Message;

//STARTER CODE
// function Message() {
//     return (
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             />
//           </div>
//         </div>
//         <div className="chat-bubble text-white bg-purple-500">Test Message</div>
//         <div className="chat-footer opacity-50 text-white text-xs flex gap-1 items-center">
//           12:43
//         </div>
//       </div>
//     );
//   }

//   export default Message;
