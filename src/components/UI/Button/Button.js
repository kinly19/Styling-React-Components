import React from 'react';

// import './Button.css'; ////these styles are not scoped to this component only...
import styles from './Button.module.css' //using CSS Modules

//styled components =======================================================================================================================================
// import styled from 'styled-components';

//styled components is a package that helos you build components, which have their styles attached to them.
//the styles attached to them only affect their own component and not any other components. 
//tag template `` literal, not specific to this package or react. Can be used in any Javascript project
//styled package has methods for all HTML elements.
//button is simply a method on this styled object, like a special method, instead of calling a method with () parenthesis we use the two backticks `` (tag literal) instead.
//what we pass inbetween these two back ticks will end up in this button method.

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     //just add the styles inside of here for this media query
//     width:auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `; 

//above is just like css but without any class names, any styles passed between the backticks will directly effect the styled-component button .
// the button which is returned by default still applies all the props, click events, set the type etc, that will all be forwarded by the style components package.

//=================================================================================================================================================================


const Button = props => {
  return (
    // <button type={props.type} className="button" onClick={props.onClick}>
    //using css module, where we apply our class name. we apply something dynamic
    //we refer to the styles which we import from (import styles from './Button.module.css') and that will be the object where all our classes will be defined
    //if we had a class style called red-button we can refer to that style with styles.red-botton
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
