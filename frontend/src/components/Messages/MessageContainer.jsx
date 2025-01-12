import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessageSquare } from "react-icons/lu";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //Clean up the selecction
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[550px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-purple-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To: </span>
            <span className="text-white font-bold">
              {selectedConversation.fullName}{" "}
            </span>
          </div>

          {/* Messages */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

function NoChatSelected(selectedConversation) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome </p>
        <p>Select a chat to start a conversation</p>
        <LuMessageSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
}

//STARTER CODE
// function MessageContainer() {
//     const noChatSelected = true;

//     return (
//       <div className="md:min-w-[550px] flex flex-col">
//         {noChatSelected ? (
//           <NoChatSelected />
//         ) : (
//           <>
//             {/* header */}
//             <div className="bg-purple-500 px-4 py-2 mb-2">
//               <span className="label-text text-white">To:</span>
//               <span className="text-white font-bold"> Wilber Rivas</span>
//             </div>

//             {/* Messages */}
//             <Messages />
//             <MessageInput />
//           </>
//         )}
//       </div>
//     );
//   }

//   export default MessageContainer;

//   function NoChatSelected() {
//     return (
//       <div className="flex items-center justify-center w-full h-full">
//         <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//           <p>Welcome</p>
//           <p>Select a chat to start a conversation</p>
//           <LuMessageSquare className="text-3xl md:text-6xl text-center" />
//         </div>
//       </div>
//     );
//   }
