import React, { useState } from 'react';
import '../../index.css';

export type ButtonVariant =
  | 'primary'
  | 'bluePrimary'
  | 'blueSecondary'
  | 'blackPrimary'
  | 'blackSecondary'
  | 'whitePrimary'
  | 'whiteSecondary';
export type ButtonSize = 'medium' | 'large';
export type ButtonDisable = boolean;

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: ButtonVariant;
  disable?: ButtonDisable;
  className?: string;

  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  disable = false,
  size = 'large',
  label,
  className,
  variant,
  ...props
}: ButtonProps) => {
  /**
   * Buttons
   */
  if (variant === 'primary') {
    if (disable) {
      var className: string | undefined =
        'bg-gray-200 text-gray-300 font-bold rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-rose-600 focus:outline-4 focus:ring hover:bg-rose-700 text-white font-bold rounded active:bg-rose-700 ';
    }
  } else if (variant === 'bluePrimary') {
    if (disable) {
      var className: string | undefined =
        'bg-gray-200 text-gray-300 font-bold rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-blue-900 focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold active:bg-blue-800 rounded ';
    }
  } else if (variant === 'blueSecondary') {
    if (disable) {
      var className: string | undefined =
        'bg-transparent text-gray-300 font-semibold border-2 border-gray-200 rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-blue-900 font-semibold hover:text-white  border-2 border-blue-900 hover:border-2-transparent active:bg-transparent active:text-blue-900 rounded';
    }
  } else if (variant === 'blackPrimary') {
    if (disable) {
      var className: string | undefined =
        'bg-gray-200 text-gray-300 font-bold rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-black focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold active:bg-black rounded';
    }
  } else if (variant === 'blackSecondary') {
    if (disable) {
      var className: string | undefined =
         'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-black font-semibold hover:text-white border-2 border-black hover:border-2-transparent active:bg-transparent active:text-black rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-black font-semibold hover:text-white border-2 border-black hover:border-2-transparent active:bg-transparent active:text-black rounded';
    }
  } else if (variant === 'whitePrimary') {
    if (disable) {
      var className: string | undefined =
         ' bg-white focus:outline-4 focus:ring text-blue-600 hover:bg-blue-600 hover:text-white font-bold active:bg-white active:text-blue-600 rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-white focus:outline-4 focus:ring text-blue-600 hover:bg-blue-600 hover:text-white font-bold active:bg-white active:text-blue-600 rounded';
    }
  } else {
    if (disable) {
      var className: string | undefined =
    'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-white font-semibold hover:text-white border-2 border-white hover:border-2-transparent active:bg-blue-800 rounded opacity-50 cursor-not-allowed';
    } else {
      var className: string | undefined =
        'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-white font-semibold hover:text-white border-2 border-white hover:border-2-transparent active:bg-blue-800 rounded';
    }
  }

  /**
   * Size
   */
  if (size === 'large') {
    var className: string | undefined = className + ' ' + 'px-6 py-2';
  } else {
    var className: string | undefined = className + ' ' + 'px-3 py-1';
  }
  

  return (
    <button type='button' className={className} id='myElement'>
      {label}
    </button>
  );
};
export default Button;
