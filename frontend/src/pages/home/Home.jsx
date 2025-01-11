import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";

function Home() {
  return (
    <div
      className="
    flex sm:h-[550px] md:h-[650px] bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
    "
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
