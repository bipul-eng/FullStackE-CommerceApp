import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import { HomePage } from './customer/pages/HomePage/homepage';
import { Footer } from './customer/components/Footer/footer';

function App() {
  return (
    <div>
      <Navigation/>

      <div>
        <HomePage/>
      </div>

      <div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
