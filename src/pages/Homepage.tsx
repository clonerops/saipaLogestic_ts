import { useContext } from 'react'
import Sidebar from "../components/Sidebar"
import { SidebarContext } from '../context/SidebarContext'

const Homepage = (): JSX.Element => {
    const { isOpen } = useContext(SidebarContext)
    return (
        <div className="flex">
            <Sidebar />
            <div className={`${isOpen ? 'mr-72  ': 'mr-20'} duration-300`}>
                <div>HomePage</div>
            </div>
        </div>
    )
}

export default Homepage