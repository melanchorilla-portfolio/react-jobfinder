import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarHome = (): JSX.Element => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            JobFinder
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to="/job-vacancy">Job Vacancy</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
