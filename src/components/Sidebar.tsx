import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import SidebarItems from "./SidebarItems";
import SidebarLogo from "./SidebarLogo";
const Sidebar = (): JSX.Element => {
    const { isOpen, handleOpen } = useContext(SidebarContext)

    return (
        <div className={`${isOpen ? 'w-96' : 'w-20'} fixed top-0 bottom-0 h-screen duration-500 bg-[#1a1a27]`}>
            <SidebarLogo open={isOpen} setOpen={handleOpen} />
            <div className="overflow-auto h-full">
                <SidebarItems />
            </div>
        </div>
    )
}

export default Sidebar