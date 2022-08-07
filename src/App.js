import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";
import {Routes, Route} from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Details from './components/Pages/Details';


function App() {
  return (
    <div>
    <NavBar />

    <ItemListContainer />


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Products' element={<Products />} />
      <Route path='/Details' element={<Details />} />
    </Routes>
    </div>
  );
}

export default App;
