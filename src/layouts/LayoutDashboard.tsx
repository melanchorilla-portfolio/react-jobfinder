import NavbarDashboard from "../components/Navbar/NavbarDashboard";
import SidebarDashboard from "../components/Sidebar/SidebarDashboard";

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const LayoutDashboard = ({children}: Props) => {
    return (
      <>
        <NavbarDashboard />
        <div className="flex">
          <div className="w-1/5 bg-gray-50 dark:bg-gray-800 min-h-screen hidden md:block">
            <SidebarDashboard />
          </div>
          <div className="w-4/5 sm:w-full overflow-x-auto">
            <main>
              {children}
            </main>
          </div>
        </div>
      </>
    );
  };
  
  export default LayoutDashboard;