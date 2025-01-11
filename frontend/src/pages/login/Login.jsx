function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 border-opacity-20 p-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-purple-800"> ChatterBox</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
            />
          </div>
          <a className="link link-secondary text-purple-800 hover:text-white transition duration-500 ">
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-3 bg-purple-900 hover:bg-gray-300 hover:border-purple-500 hover:text-purple-800 transition duration-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

// STARTER CODE FOR THIS FILE

// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="h-full w-full bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 border-opacity-20 p-5">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login
//             <span className="text-purple-800"> ChatterBox</span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//               />
//             </div>
//             <a className="link link-secondary text-purple-800 hover:text-white transition duration-500 ">
//               Don't have an account?
//             </a>

//             <div>
//               <button className="btn btn-block btn-sm mt-3 bg-purple-900 hover:bg-gray-300 hover:border-purple-500 hover:text-purple-800 transition duration-500">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   export default Login;
