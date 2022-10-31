import { useContext, useEffect, useState } from 'react'
import { AiFillAndroid, AiFillCaretLeft } from "react-icons/ai";
import { SidebarContext } from '../context/SidebarContext';
import { menuItemData } from '../fakedata/fakedata';
import { SidebarItemDataModel } from '../models/SidebarItemData';
const SidebarItem = (): JSX.Element => {
    const { isOpen } = useContext(SidebarContext)

    const [data, setData] = useState<SidebarItemDataModel[]>([])

    const loadedList = () => {
        setData(menuItemData)
    }

    useEffect(() => {
        loadedList()
    }, [])

    console.log(data)

    return (
        <li className="m-3">
            <div className="flex justify-center items-center rounded-lg p-2 cursor-pointer 
    duration-300 text-[#9D9DA6] hover:text-white hover:bg-slate-800">
                <span className="p-3"><AiFillAndroid /></span>
                <span className={`${!isOpen && 'hidden origin-right duration-200'}`}>داشبورد</span>
                <span className={`${!isOpen && 'hidden origin-right duration-200'} mr-auto`}><AiFillCaretLeft /></span>
            </div>
        </li>
    )
}

export default SidebarItem