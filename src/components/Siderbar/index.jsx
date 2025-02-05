import { TiHome } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa6';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { useState } from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    const menuItems = [
        { icon: <TiHome />, label: 'Home', link: '/' },
        { icon: <FaUser />, label: 'Profile', link: '/profile' },
    ];
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button onClick={toggleSidebar} className='toggle-button'>
                <MdOutlineMenuOpen />
            </button>
            <div className='menu'>
                {menuItems.map((item, index) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : undefined
                        }
                        to={item.link}
                        key={index}
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <div className='menu-item'>
                            <div className='icon'>{item.icon}</div>
                            {!isCollapsed && (
                                <span className='label'>{item.label}</span>
                            )}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};
export default Sidebar;
