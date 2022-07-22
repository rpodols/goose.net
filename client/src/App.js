import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Setlist from './components/Setlist';

function App() {
  return (
    <div>
      <Router>
      <div className='margin-format'>
        <Header />
        <Setlist />
        <Setlist />
        <Setlist />
        <Setlist />
        <Setlist />
        <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
