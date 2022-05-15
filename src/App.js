import './App.css';
import Footer from './components/Footer/Footer';
import Middlebody from './components/Middlebody/Middlebody';
import Appbar from './components/Topbar/Appbar';
import Upperbody from './components/Upperbody/Upperbody';

function App() {
  return (
    <div className="App">
        <Appbar/>
        <Upperbody/>
        <Middlebody/>
        <Footer/>
    </div>
  );
}

export default App;
