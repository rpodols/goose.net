import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Setlist from './components/Setlist';
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div>
      <Router>
      <div className='margin-format'>
        <Header />
          <Routes>
            <Route path="/" element={<Setlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
