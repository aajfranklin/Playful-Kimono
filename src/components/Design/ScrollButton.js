import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateScrollDown } from '../../actions/actionCreators';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-bi/arrow-down';
import arrowUp from '@iconify/icons-bi/arrow-up';

function ScrollButton({ main, shouldScrollDown, updateScrollDown }) {
  const scroll = useRef(null);
  
  useEffect(() => {
    let scrollMain = main.current;
    const handleScroll = () => updateScrollDown(main.current.scrollTop <= 180);
    scrollMain.addEventListener('scroll', handleScroll);
    return () => scrollMain.removeEventListener('scroll', handleScroll);
  });
  
  const handleClick = () => {
    main.current.scrollTo({
      left: 0,
      top: shouldScrollDown ? scroll.current.offsetTop : 0,
      behaviour: 'smooth'
    })
  };
  
  return(
    <div ref={scroll} className="down" id="scroll-button-overlay">
      <button type="button" id="scroll-button" onClick={handleClick}>
        <Icon icon={shouldScrollDown ? arrowDown : arrowUp}/>
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: ownProps.main,
    shouldScrollDown: state.gallery.scrollDown
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateScrollDown: (scrollDown) => dispatch(updateScrollDown(scrollDown))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollButton);