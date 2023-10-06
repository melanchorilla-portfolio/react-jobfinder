import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterHome = () => {
  return (
    <Footer container className="mt-5">
      <Footer.Copyright by="JobFinder" href="#" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#"><Link to="/">Home</Link></Footer.Link>
        <Footer.Link href="#"><Link to="/job-vacancy">Job Vacancy</Link></Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterHome;
