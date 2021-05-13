import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((items, index) => {
            const { links, page } = items
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, indx) => {
                    const { url, icon, label } = link
                    return (
                      <a href={url} key={indx}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
