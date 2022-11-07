
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
      <div className='generalStyle'>
        <h1> I am the user page.</h1>

      <nav>
      <Link to="/profile">Profile page</Link>
      </nav>

      <Outlet />
      </div>
  );
};

export default User;
