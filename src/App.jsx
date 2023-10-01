import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './auth/PublicRoute';
import { Login } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isLogin={false} />}>
          <Route path='/' element={<Login />} />
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
