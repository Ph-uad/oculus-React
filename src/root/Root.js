import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import Nav from '../layout/navigation/Nav';
import CartBar from '../components/cartBar/CartBar';

const Root = () => {
  return (
    <>
      <CartBar/>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root