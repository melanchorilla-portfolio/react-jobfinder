import { Footer } from "flowbite-react";

const FooterHome = () => {
  return (
    <Footer container className="mt-5">
      <Footer.Copyright by="Flowbite™" href="#" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterHome;
