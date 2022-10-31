import { useContext } from 'react'
import Sidebar from "../components/Sidebar"
import { SidebarContext } from '../context/SidebarContext'

const Homepage = (): JSX.Element => {
    const { isOpen } = useContext(SidebarContext)
    return (
        <div className="flex">
            <Sidebar />
            <div className={`${isOpen ? 'mr-96  ': 'mr-20'} duration-500`}>
                <div>HomePage</div>
            </div>
        </div>
    )
}

export default Homepage