import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 my-3">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-opacity-0 border border-purple-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle bg-purple-800 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;

//STARTER CODE
// import { IoSearchSharp } from "react-icons/io5";

// function SearchInput() {
//   return (
//     <form className="flex items-center gap-2 my-3">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full bg-opacity-0 border border-purple-800"
//       />
//       <button className="btn btn-circle bg-purple-800 text-white">
//         <IoSearchSharp className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// }

// export default SearchInput;
