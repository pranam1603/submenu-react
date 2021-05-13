import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext()
  const container = useRef(null)
  const [colums, setColums] = useState('col-2')
  useEffect(() => {
    setColums('col-2')
    const submenu = container.current
    const { bottom, center } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColums('col-3')
    }
    if (links.length === 4) {
      setColums('col-4')
    }
  }, [location])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${colums}`}>
        {links.map((link, index) => {
          const { url, label, icon } = link
          return <a href={url} key={index}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
