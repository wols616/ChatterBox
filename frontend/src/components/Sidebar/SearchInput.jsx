import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className="flex items-center gap-2 my-3">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-opacity-0 border border-purple-800"
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
