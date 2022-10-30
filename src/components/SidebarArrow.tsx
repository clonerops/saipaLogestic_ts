import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { SidebarToggleProps } from "../models/SidebarToggleProps";

const SidebarArrow = ({ open, setOpen }: SidebarToggleProps):JSX.Element => {
    const handleOpen = (): void => {
        if(setOpen)
            setOpen(!open)
    }

    return (
        <button onClick={handleOpen} className="absolute -left-4 top-5 z-10 ">
            {open ? (
                <BsFillArrowRightCircleFill color="indigo" size={24} />
            ) : (
                <BsFillArrowLeftCircleFill color="indigo" size={24} />
            )}
        </button>
    )
}

export default SidebarArrow