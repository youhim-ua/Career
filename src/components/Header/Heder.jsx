import { useState, useEffect } from "react";
import _ from "lodash";

const Header = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let startScrollHeight = window.pageYOffset;

    const scrollHandler = () => {
      const lastScrollHeight = window.pageYOffset;
      if (startScrollHeight < lastScrollHeight) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      startScrollHeight = lastScrollHeight;
    }
    
    document.addEventListener("scroll", _.throttle(scrollHandler, 400));

    return () => {
      document.removeEventListener("scroll", _.throttle(scrollHandler, 400));
    }
  }, [])


  return ( 
    <header className={ showHeader ? "header" : "header header--hide" }>
      <div>
        { children }
      </div>
    </header>
  );
};

export default Header;
