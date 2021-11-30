
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homes/Home/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/Homes/About/About';
import Details from './Pages/Homes/Details/Details';
import Header from './Pages/Homes/Header/Header';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
           <Header/>
           <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="home" element={<Home/>}/>
                   <Route path="about" element={<About/>}/>
                   <Route path="blogs" element={<Blogs/>}/>
                   <Route path=":id" element={<Details/>}/>
                   <Route path="contact" element={<Contact/>}/>
            </Routes>
             
      </BrowserRouter>
            <Footer></Footer>
    </div>
  );
}

export default App;
