
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
      <div>
        <h1> I am the user page.</h1>

      <nav>
      <Link to="/profile">Profile</Link>
      </nav>

      <Outlet />
      </div>
  );
};

export default User;
