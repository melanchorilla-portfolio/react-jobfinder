import FooterHome from "../components/Footer/FooterHome"
import NavbarHome from "../components/Navbar/NavbarHome"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({children} : Props) => {
  return (
    <>
      <NavbarHome />
      {children}
      <FooterHome />
    </>
  )
}

export default Layout