import Navbar from './navbar/Navbar';

export default function Layout() {
  return (
    <div className='page-container'>
      {/* Sidebar */}
      <div className='page-content'>
        <Navbar />
      </div>
    </div>
  );
}
