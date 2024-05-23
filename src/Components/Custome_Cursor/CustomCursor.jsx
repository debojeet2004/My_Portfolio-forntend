// src/CustomCursor.js
import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const cursor = cursorRef.current;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;



// // src/CustomCursor.js
// import React, { useEffect, useRef } from 'react';
// import './CustomCursor.css';

// const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX: x, clientY: y } = event;
//       const cursor = cursorRef.current;
//       cursor.style.transform = `translate(${x}px, ${y}px)`;
//     };

//     // Highlighted code for handling hover effect
//     const handleMouseEnter = () => {
//       const cursor = cursorRef.current;
//       cursor.classList.add('custom-cursor--hover');
//     };

//     const handleMouseLeave = () => {
//       const cursor = cursorRef.current;
//       cursor.classList.remove('custom-cursor--hover');
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     // Add event listeners to elements with the class 'effect'
//     const elements = document.querySelectorAll('.effect');
//     elements.forEach(element => {
//       element.addEventListener('mouseenter', handleMouseEnter);
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       elements.forEach(element => {
//         element.removeEventListener('mouseenter', handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return <div className="custom-cursor" ref={cursorRef}></div>;
// };

// export default CustomCursor;
