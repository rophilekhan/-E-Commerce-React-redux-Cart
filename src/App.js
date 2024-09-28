import './App.css';
import Layout from './Components/layout';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
