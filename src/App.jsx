import './App.css';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />   {/* Route content renders here */}
      <Footer />
    </>
  );
}

export default App;
