import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Form />} ></Route>
          <Route path='/home' element={<Form />} ></Route>
          <Route path='/about' element={<About />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
