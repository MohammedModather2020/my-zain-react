import { Outlet } from 'react-router';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

export default function Layout() {
  return (
    <div className='page-container'>
      <Sidebar />
      <div className='page-content'>
        <Navbar />
        <div className='page-inner'>
          <div id='main-wrapper'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
