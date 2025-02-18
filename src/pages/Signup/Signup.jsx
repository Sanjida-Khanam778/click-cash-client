import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { imageUpload, saveUser } from "../../utilities/utils";
import { useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import useCoin from "../../hooks/useCoin";
import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json"
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SignUp = () => {
  const [role, setRole] = useState("Worker");
  const [coin, setCoin] = useState(null);
  const [, , refetch] = useCoin()
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, signInWithGoogle, loading, setLoading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')  
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const photoURL = await imageUpload(image);
    if (password.length < 6) {
      setError("Length must be at least 6 character ");
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one digit");
      return;
    }
    
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      await saveUser({ ...result?.user, coin });
      refetch()
      const { data } = await axiosPublic(`/users/${result?.user?.email}`);
      if (data.role === "Buyer") {
        navigate("/dashboard/buyerHome");
      }
      if (data.role === "Admin") {
        navigate("/dashboard/adminHome");
      }
      if (data.role === "Worker") {
        navigate("/dashboard/workerHome");
      }
      toast.success("Signup Successful");
    } catch (err) {
      setLoading(false)
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser({...data.user, coin:10});
      refetch()
      const { data:userRole } = await axiosPublic(`/users/${data?.user?.email}`);
      if (userRole.role === "Buyer") {
        navigate("/dashboard/buyerHome");
      }
      if (userRole.role === "Admin") {
        navigate("/dashboard/adminHome");
      }
      if (userRole.role === "Worker") {
        navigate("/dashboard/workerHome");
      }
      // toast.success("Login Successful");
      toast.success("Signup Successful");
    } catch (err) {
      setLoading(false)
      toast.error(err?.message);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-20 my-10 md:my-16 lg:my-20 justify-center items-center min-h-screen bg-white">
      <div className="text-center lg:text-left lg:w-1/3 p-10">
        <Lottie animationData={registerLottie}></Lottie>
      </div>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#FBF5E5] text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to ClickCash</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 input input-bordered focus:outline-[#A35C7A] text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 input input-bordered focus:outline-[#A35C7A] text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Select the Role</span>
              </div>
              <select
                onChange={(e) => {
                  const selectedRole = e.target.value;
                  setRole(selectedRole);
                  setCoin(selectedRole === "Worker" ? 10 : 50);
                }}
                className="select select-bordered focus:outline-[#A35C7A]"
              >
                <option disabled selected>
                  Select the Role
                </option>
                <option>Worker</option>
                <option>Buyer</option>
              </select>
            </label>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border input input-bordered rounded-md focus:outline-[#A35C7A] text-gray-900"
              />
            </div>
            {error && <p className="mb-2 text-red-500 text-sm">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#C890A7] hover:bg-[#A35C7A] w-full rounded-md py-3 text-white font-bold"
            >
              {loading ? (
                <CgSpinnerAlt className="animate-spin m-auto" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center border-[#A35C7A] items-center space-x-2  border my-3 p-2 rounded-lg cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#A35C7A] font-bold text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
