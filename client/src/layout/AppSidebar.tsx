import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const sidebarItems = [
    {
      path: "#",
      text: "Gender List",
    },
    {
      path: "#",
      text: "User List",
    },
  ];

  return (
    <>
      {!isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        id="top-bar-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-full pt-14 transition-transform 
          ${isOpen ? "-translate-x-full" : "translate-x-0"} bg-white border-e border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto border-e border-default">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((sidebarItem) => (
              <li>
                <Link
                  to={sidebarItem.path}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-blue-800 hover:text-blue-100 rounded-[20px] group"
                >
                  <span className="ms-3 text-white">{sidebarItem.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
