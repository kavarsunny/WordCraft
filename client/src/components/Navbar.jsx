import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import mockLogo from "../logo.png";

const Navbar = () => {
  const isAdmin = localStorage.getItem("isAdmin");

  const isUser = useAuthContext();

  const { logout } = useLogout();

  const checkUser = () => {
    //   if(!isUser.user){
    //   setUser(false)
    //  } else{
    //   setUser(true)
    //  }

    // Check local storage for user and set user flag to true
    const token = localStorage.getItem("token");
    if (token && isUser) {
      console.log("Token is found, user is logged in");
    } else {
      console.log("Token is not found, user not logged in");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <div class="navbar bg-red-600 text-primary-content flex justify-between p-6 mb-24">
        <div className="flex">
          <img src="image.png" alt="" className="w-25 h-10" />
          <b className="w-25 bg-blend-color-dodge">WordCraft</b>
        </div>
        <div className="flex">
          {isAdmin === "true" && (
            <>
              {" "}
              <Link
                className="btn bg-orange-400 normal-case text-center text-2xl"
                to={`/admin`}
              >
                Admin
              </Link>{" "}
            </>
          )}

          {!isUser.user && (
            <>
              {" "}
              <Link className="btn btn-ghost normal-case text-xl" to={`/login`}>
                Login
              </Link>
              <Link
                className="btn btn-ghost normal-case text-xl"
                to={`/register`}
              >
                Register
              </Link>{" "}
            </>
          )}

          {isUser.user && (
            <>
              <Link className="btn btn-ghost normal-case text-xl" to={`/`}>
                Home
              </Link>
              <button
                className="btn btn-ghost normal-case text-xl btn-warning"
                onClick={logout}
              >
                Logout
              </button>{" "}
            </>
          )}

          <Link className="btn btn-ghost normal-case text-xl" to={`/about`}>
            About
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to={`/contact`}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
