import React, { useEffect, useRef } from 'react';

function ScrollButton({main}) {
  const scroll = useRef(null);
  const shouldScrollDown = () => main.current.scrollTop <= 180;
  
  useEffect(() => {
    let scrollMain = main.current;
    
    const handleScroll = () => {
      if (shouldScrollDown() && scroll.current.classList.contains('up')) {
        scroll.current.classList.remove('up');
        scroll.current.classList.add('down');
      }
      if (!shouldScrollDown() && scroll.current.classList.contains('down')) {
        scroll.current.classList.remove('down');
        scroll.current.classList.add('up');
      }
    };
    
    scrollMain.addEventListener('scroll', handleScroll);
    return () => scrollMain.removeEventListener('scroll', handleScroll);
  });
  
  const scrollDown = () => {
    main.current.scrollTo({
      left: 0,
      top: shouldScrollDown() ? scroll.current.offsetTop : 0,
      behaviour: 'smooth'
    })
  };
  
  return(
    <div ref={scroll} className="down" id="scroll-button-overlay">
      <button type="button" id="scroll-button" onClick={scrollDown}/>
    </div>
  )
}

export default ScrollButton;