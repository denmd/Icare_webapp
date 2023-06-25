

import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Welcome from './pages/Welcome/Welcome'
import Signup from'./pages/Signup/Signup'
import Restype from './pages/Restype/Restype'
import Eyetest from './pages/Eyetest/Eyetest'
import Hospital from "./pages/Hospitals/Hospital"
import Optical from './pages/Opticals/Optical';
import Medicalrecord from './pages/Medicalrecord/Medicalrecord';
import Myprofile from './pages/Myprofile/Myprofile';
import Updateprofile from './pages/UpdateProfile/Updateprofile'
import News from './pages/News/News';
import Video from './pages/Videos/Video';
import Article from './pages/Article/Article';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Articleview from './pages/Article/Articleview';


function App() {
  return (
    <div>
    
    <Router>
    <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/restype" element={<Restype/>} />
    <Route path="/eyetest" element={<Eyetest/>} />
    <Route path="/hospital" element={<Hospital/>} />
    <Route path="/optical" element={<Optical/>} />
    <Route path="/medrec" element={<Medicalrecord/>} />
    <Route path="/profile" element={<Myprofile/>} />
    <Route path="/updateprofile" element={<Updateprofile/>} />
    <Route path="/news" element={<News/>} />
    <Route path="/video" element={<Video/>} />
    <Route path="/article" element={<Article/>} />
    <Route path="/articleview" element={<Articleview/>} />


      </Routes>
     </Router>
    
    </div>
  );
}

export default App;
