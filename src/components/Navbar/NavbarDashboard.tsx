import { useEffect, useState } from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const NavbarDashboard = () => {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    setUser([JSON.parse(localStorage.getItem("user") || "")]);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.setItem("user", "");
    Swal.fire("Congratulations!", "You logged out!", "success");
    navigate("/");
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            JobFinder
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user.map((res, index) => {
          return (
            <Dropdown
              key={index}
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={res.image_url} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{res.name}</span>
                <span className="block truncate text-sm font-medium">
                  {res.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/dashboard/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/dashboard/change-password">Change password</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          );
        })}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to="/dashboard/job-vacancy-list">Job vacancy list</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to="/dashboard/job-vacancy-list/form">Add data</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to="/dashboard/profile">Profile</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to="/dashboard/change-password">Change Password</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarDashboard;
