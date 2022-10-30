import { useState } from "react";
import SidebarArrow from "./SidebarArrow";
import SidebarLogo from "./SidebarLogo";
const Sidebar = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className={`${open ? 'w-72' : 'w-20'}  relative h-screen duration-300 bg-[#1a1a27]`}>
            {/* <SidebarArrow open={open} setOpen={setOpen} /> */}
            <SidebarLogo open={open} setOpen={setOpen} />
            <div className="overflow-auto">
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>
                <div className="text-indigo-700">HH</div>

            </div>
        </div>
    )
}

export default Sidebar