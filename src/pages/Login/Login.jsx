import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../utilities/utils";
import { CgSpinnerAlt } from "react-icons/cg";

const Login = () => {
  const { signIn, setUser, signInWithGoogle, loading, setLoading, user } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  //   if (loading) return <LoadingSpinner />
  if (user) return <Navigate to={from} replace={true} />;
  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      //User Login
      const res = await signIn(email, password);
      setUser(res?.user);
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const data = await signInWithGoogle();
      // save user info in db if the user is new
      await saveUser({ ...data?.user, coin: 0 });
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="flex justify-center my-10 md:my-16 items-center bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 bg-[#FBF5E5] text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
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
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 input input-bordered focus:outline-[#A35C7A] text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#C890A7] hover:bg-[#A35C7A] font-bold w-full rounded-lg py-3 text-white"
            >
              {loading ? (
                <CgSpinnerAlt className="animate-spin m-auto" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1 my-2">
          <button className="text-xs hover:underline hover:text-[#A35C7A] text-gray-400">
            Forgot password?
          </button>
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center border-[#A35C7A] items-center space-x-2 border p-2 rounded-lg border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 mt-2 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#A35C7A] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
