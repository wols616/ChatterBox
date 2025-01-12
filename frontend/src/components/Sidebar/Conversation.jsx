import useConversation from "../../zustand/useConversation.js";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id; //the '?' is used to don't get an error if a value is null
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-3 cursor-pointer
        ${isSelected ? "bg-purple-500" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}

export default Conversation;

//STARTER CODE
// function Conversation() {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online ">
//             <div className="w-12 rounded-full">
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 alt="user avatar"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//               <p className="font-bold text-gray-200">Wilber Rivas</p>
//               <span className="text-xl">😒</span>
//             </div>
//           </div>
//         </div>
//         <div className="divider my-0 py-0 h-1" />
//       </>
//     );
//   }

//   export default Conversation;
