import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PublicRoute from './auth/PublicRoute';
import AdminRoute from './auth/AdminRoute';
import {
  AddCategory,
  Categories,
  Login,
  Register,
  Statistics,
  UpdateCategory,
} from './routes/Routes';

function App() {
  const { isLogin, roles } = useSelector((state) => state?.auth);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<PublicRoute isLogin={isLogin} />}>
          <Route path='/' element={<Login />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Route>
        <Route element={<AdminRoute isLogin={isLogin} roles={roles} />}>
          <Route path='/dashboard' element={<Statistics />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/add' element={<AddCategory />} />
          <Route path='/categories/:id/update' element={<UpdateCategory />} />
          {/* <Route path='/dashboard/statistics' element={<Statistics />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
