import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Blogs from './pages/Blogs';
import MyProducts from './navs/MyProducts';
// import Experiences from './pages/Experiences';
// import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blogs"/>
        <Route path="/products" element={<MyProducts />} />
        <Route path="/experiences"/>
        <Route path="/me"/>
      </Routes>
    </>
  );
}

export default App;
