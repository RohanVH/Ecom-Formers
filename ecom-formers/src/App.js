import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ErrorPage from './ErrorPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
