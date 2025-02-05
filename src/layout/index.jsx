import { Outlet } from 'react-router';
import Sidebar from '../components/Siderbar';

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className='main'>
                <nav className='navbar'>Navbar</nav>
                <main className='content'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
export default Layout;
