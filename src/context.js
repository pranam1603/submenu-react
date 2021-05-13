import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [isSubmenuOpen, setSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        return setSidebarOpen(true)
    }

    const closeSidebar = () => {
        return setSidebarOpen(false)
    }

    const openSubmenu = (text, coordinate) => {
        const SubPage = sublinks.find((links) => links.page === text)
        setPage(SubPage)
        setLocation(coordinate)
        return setSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        return setSubmenuOpen(false)
    }

    return <AppContext.Provider value={{ page, location, isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, closeSubmenu, openSubmenu }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider, useGlobalContext }