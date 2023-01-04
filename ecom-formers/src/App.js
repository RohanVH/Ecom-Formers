import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/flogin" element={<Login /> }/>
          <Route path="/fsignup" element={<Signup /> }/>
          <Route path="/*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
