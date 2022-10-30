import { createContext, useState } from 'react'
import ChildrenProps from '../models/ChildrenModel'

export const SidebarContext = createContext({
    isOpen: false,
    handleOpen: (): void => { }
})

export const SidebarContextProvider = ({ children }: ChildrenProps) => {
    const [sideOpen, setSideOpen] = useState<boolean>(false)

    const draweToggleClickHandler = () => {
        setSideOpen(!sideOpen)
    }
    const context = {
        isOpen: sideOpen,
        handleOpen: draweToggleClickHandler,
    }

    return (
        <SidebarContext.Provider value={context}>
            {children}
        </SidebarContext.Provider>
    )
}


