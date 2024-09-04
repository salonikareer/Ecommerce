 
 import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Order from './Pages/order/Order';
import Dashboard from './Pages/Admin/Dashboard';
import NoPage from './Pages/nopage/NoPage';
import MyState from './Context/Data/myState';
import Signup from "./Pages/Registration/SignUp";
import Login from "./Pages/Registration/Login";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import AddProduct from "./Pages/Admin/Page/AddProduct";
import UpdateProduct from "./Pages/Admin/Page/UpdateProduct";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Provider } from "react-redux";
  import store from "./Redux/store";
 function App() {
   return (
    <Provider store={store}>
     <div>
      <MyState>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/cart" element={<Cart/>} />
           <Route path="/order" element={
            <ProtectedRoutes>
              <Order/>
            </ProtectedRoutes>
           }/>
           <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard/>
            </ProtectedRoutesForAdmin>
           }/>
           <Route path="/signUp" element={<Signup/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/productinfo/:id" element={<ProductInfo/>}/>
           <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct/>
            </ProtectedRoutesForAdmin>
           }/>
           <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct/>
            </ProtectedRoutesForAdmin>
           }/>
           <Route path="*" element={<NoPage/>} />
        </Routes>
        <ToastContainer/>

      </Router>
      </MyState>
     
     </div>
     </Provider>
   )
 }
 
 export default App;

 // eslint-disable-next-line react/prop-types
 export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// eslint-disable-next-line react/prop-types
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'kamal@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}