import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
    <div className="border-r border-s-slate-500 p-4 flex flex-col sm:w-[250px] w-full sm:block hidden">
      <SearchInput />
      <div className="divider px-3 mt-0"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;

//STARTER CODE
// import SearchInput from "./SearchInput";
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";

// function Sidebar() {
//   return (
//     <div className="border-r border-s-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3 mt-0"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// }

// export default Sidebar;
