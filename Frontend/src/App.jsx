import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Contact from './pages/Contact/contact';
import SignUp from "./pages/Signup/signup"
import { Provider } from 'react-redux';
import store from './redux/store'; // import your Redux store here

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />     
          <Route path="/signup" element={<SignUp/>} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
