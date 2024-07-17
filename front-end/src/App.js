
import './App.css';
import Nav from "./component/nav";
import Footer from "./component/footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./component/Signup";
import Privatecomponent from './component/privatecomponent';
import Login from './component/login';
import Addproduct from './component/Addproduct';
import ProductList from "./component/ProductList";
import Updateproduct from './component/Updateproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Privatecomponent/>}>
          <Route path="/home" element={<ProductList/>}></Route>
          <Route path="/add" element={<Addproduct/>}></Route>
          <Route path="/update/:id" element={<Updateproduct/>}></Route>
          <Route path="/services" element={<h1>Services Component</h1>}></Route>
          </Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
