
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
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/BounceLoader";


function App() {
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 5000)
  }, [])
  
  return (
    <div className="">
     
          {/* // <div className="spin-loader"><ClipLoader color={"#e67e22"} loading={loading}  size={100} /></div> */}
        < BrowserRouter>
           <Header/>
           <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="home" element={<Home/>}/>
                   <Route path="about" element={<About/>}/>
                   <Route path="blogs" element={<Blogs/>}/>
                   <Route path=":id" element={<Details/>}/>
                   <Route path="contact" element={<Contact/>}/>
            </Routes>
              <Footer></Footer>
      </BrowserRouter>
            

      
    </div>
  );
}

export default App;
