import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarDashboard = () => {
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
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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
