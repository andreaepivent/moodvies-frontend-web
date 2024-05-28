import { useState, useEffect } from 'react';
import BurgerNavbar from './BurgerNavbar';
import NavbarProfile from './NavbarProfile';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}


function ResponsiveNavbarProfile() {
  const size = useWindowSize();

  return (
    size.width > 768 ? <NavbarProfile /> : <BurgerNavbar />
  )
}

export default ResponsiveNavbarProfile