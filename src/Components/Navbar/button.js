import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onclick, buttonStyle, buttonSize }) => {
    const checkButtonSize = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonStyle = SIZES.includes(buttonSize) ? buttonSize :SIZES[0];

  return(
      <Link to ='/sign-up' className='brn-mobile'>
          <button
          className ={'btn ${checkButtonStyle} ${checkButtonSize}'}
          onClick = {onclick}
          type ={type}
          
          >
              
              {children}
          </button>
      </Link>
  )
};