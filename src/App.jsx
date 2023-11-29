import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PublicRoute from './auth/PublicRoute';
import AdminRoute from './auth/AdminRoute';
import AdminAndUserRoute from './auth/AdminAndUserRoute';
import AdminAndShopRoute from './auth/AdminAndShopRoute';
import AllPrivateRoute from './auth/AllPrivateRoute';
import {
  AddCategory,
  AddOffer,
  AddPackage,
  AddPromotions,
  AddRole,
  AddSegment,
  AddShop,
  AddVasCategory,
  Admins,
  Categories,
  DetailsOffer,
  DetailsShop,
  Login,
  OfferSegments,
  Offers,
  Packages,
  Profile,
  Promotions,
  Register,
  Roles,
  Segments,
  SegmentsOffer,
  Shops,
  SignRole,
  Statistics,
  UpdateCategory,
  UpdateOffer,
  UpdatePackage,
  UpdateRole,
  UpdateSegment,
  UpdateShop,
  VasCategories,
  VasDspAddDigitalProduct,
  VasDspAddIvrProduct,
  VasDspDigitalProducts,
  VasDspIvrProducts,
  VasDspSmsProducts,
  VasDspUpdateSmsProduct,
  VasUpdateCategory,
} from './routes/Routes';
import VasDspTop from './pages/vas/dsp/product/top/Top';

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
        <Route element={<AllPrivateRoute isLogin={isLogin} />}>
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/add' element={<AddCategory />} />
          <Route path='/categories/:id/update' element={<UpdateCategory />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/packages/add' element={<AddPackage />} />
          <Route path='/packages/:id/update' element={<UpdatePackage />} />
          <Route path='/segments' element={<Segments />} />
          <Route path='/segments/add' element={<AddSegment />} />
          <Route path='/segments/:id/update' element={<UpdateSegment />} />
          <Route path='/segments/:id/offers' element={<SegmentsOffer />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/offers/add' element={<AddOffer />} />
          <Route path='/offers/:id/details' element={<DetailsOffer />} />
          <Route path='/offers/:id/update' element={<UpdateOffer />} />
          <Route path='/offers/:id/segments' element={<OfferSegments />} />
          <Route path='/auth/profile/' element={<Profile />} />
          <Route path='/shops' element={<Shops />} />
          <Route path='/shops/add' element={<AddShop />} />
          <Route path='/shops/:id/update' element={<UpdateShop />} />
          <Route path='/shops/:id/details' element={<DetailsShop />} />
          <Route path='/vas-dsp/products/top' element={<VasDspTop />} />
          <Route path='/vas-dsp/products/sms' element={<VasDspSmsProducts />} />
          <Route path='/vas-dsp/products/sms/:id/update' element={<VasDspUpdateSmsProduct />} />
          <Route path='/vas-dsp/products/ivr' element={<VasDspIvrProducts />} />
          <Route path='/vas-dsp/products/ivr/add' element={<VasDspAddIvrProduct />} />
          <Route path='/vas-dsp/products/digital' element={<VasDspDigitalProducts />} />
          <Route path='/vas-dsp/products/digital/add' element={<VasDspAddDigitalProduct />} />
          <Route path='/promotions' element={<Promotions />} />
          <Route path='/promotions/add' element={<AddPromotions />} />
          <Route path='/vas-dsp/categories' element={<VasCategories />} />
          <Route path='/vas-dsp/categories/add' element={<AddVasCategory />} />
          <Route path='/vas-dsp/categories/:id/update' element={<VasUpdateCategory />} />
        </Route>
        <Route element={<AdminRoute isLogin={isLogin} roles={roles} />}>
          <Route path='/dashboard/statistics' element={<Statistics />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/roles/add' element={<AddRole />} />
          <Route path='/roles/:id/update' element={<UpdateRole />} />
          <Route path='/roles/sign' element={<SignRole />} />
          <Route path='/admins' element={<Admins />} />
        </Route>
        <Route
          element={<AdminAndUserRoute isLogin={isLogin} roles={roles} />}
        ></Route>
        <Route
          element={<AdminAndShopRoute isLogin={isLogin} roles={roles} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
