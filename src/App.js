import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './components/pages/Home';
import Carousel from './components/pages/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
