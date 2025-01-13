import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import { HomePage } from './customer/pages/HomePage/homepage';

function App() {
  return (
    <div>
      <Navigation/>

      <div>
        <HomePage/>
      </div>
      
    </div>
  );
}

export default App;
