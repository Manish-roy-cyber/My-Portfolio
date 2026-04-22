import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroller() {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay ensures page is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // more reliable than smooth
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default Scroller;