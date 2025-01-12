import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 border-opacity-20 p-5">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-purple-800"> ChatterBox</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password Again"
              className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <div className="mt-3">
            <Link
              to="/login"
              className="link link-secondary text-purple-800 hover:text-white transition duration-500"
            >
              Already have an account?
            </Link>
          </div>

          <div>
            <button
              className="btn btn-block btn-sm mt-3 bg-purple-900 hover:bg-gray-300 hover:border-purple-500 hover:text-purple-800 transition duration-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

//STARTER CODE
// import GenderCheckbox from "./GenderCheckbox";

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="h-full w-full bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 border-opacity-20 p-5">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-purple-800"> ChatterBox</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Fullname</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter fullname"
//               className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password Again"
//               className="w-full input input-bordered h-10 bg-purple-500 bg-opacity-25 border border-white border-opacity-20"
//             />
//           </div>

//           <GenderCheckbox />

//           <div className="mt-3">
//             <a className="link link-secondary text-purple-800 hover:text-white transition duration-500">
//               Already have an account?
//             </a>
//           </div>

//           <div>
//             <button className="btn btn-block btn-sm mt-3 bg-purple-900 hover:bg-gray-300 hover:border-purple-500 hover:text-purple-800 transition duration-500">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
