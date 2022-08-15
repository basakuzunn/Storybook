import React from 'react';
import '../index.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  bluePrimary?: boolean;
  blueSecondary?: boolean;
  blackPrimary?: boolean;
  blackSecondary?: boolean;
  whitePrimary?: boolean;
  whiteSecondary?: boolean;
  disable?: boolean;
  className?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'medium' | 'large';
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
export const Button = ({
  primary = false,
  bluePrimary = false,
  blueSecondary = false,
  blackPrimary = false,
  blackSecondary = false,
  whitePrimary = false,
  whiteSecondary = false,
  disable = false,
  size = 'large',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  /**
   * Buttons
   */
  if (primary) {
    var className: string | undefined =
      'bg-rose-600 focus:outline-4 focus:ring hover:bg-rose-700 text-white font-bold rounded active:bg-rose-700 ';
  } else if (bluePrimary) {
    var className: string | undefined =
      'bg-blue-900 focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold active:bg-blue-800 rounded ';
  } else if (blueSecondary) {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-blue-900 font-semibold hover:text-white  border-2 border-blue-900 hover:border-2-transparent active:bg-transparent active:text-blue-900 rounded';
  } else if (blackPrimary) {
    var className: string | undefined =
      'bg-black focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold active:bg-black rounded';
  } else if (blackSecondary) {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-black font-semibold hover:text-white border-2 border-black hover:border-2-transparent active:bg-transparent active:text-black rounded';
  } else if (whitePrimary) {
    var className: string | undefined =
      'bg-white focus:outline-4 focus:ring text-blue-600 hover:bg-blue-600 hover:text-white font-bold active:bg-white active:text-blue-600 rounded';
  } else {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-white font-semibold hover:text-white border-2 border-white hover:border-2-transparent active:bg-blue-800 rounded';
  }
  /**
   * Disable Buttons
   */
  if (disable && (whitePrimary || whiteSecondary)) {
    var className: string | undefined =
      className + ' ' + 'opacity-50 cursor-not-allowed';
  } else if (disable && (primary || bluePrimary)) {
    var className: string | undefined =
      'bg-gray-200 text-gray-300 font-bold rounded opacity-50 cursor-not-allowed';
  } else if (disable && blueSecondary ) {
    var className: string | undefined =
      'bg-transparent text-gray-300 font-semibold border-2 border-gray-200 rounded opacity-50 cursor-not-allowed';
  } else if (disable && blackPrimary) {
    var className: string | undefined =
      'bg-gray-200 text-gray-300 font-bold rounded opacity-50 cursor-not-allowed';
  }
  /**
   * Size
   */
  if(size==='large'){
    var className: string | undefined =
    className + ' ' + 'px-6 py-2';
  } else {
    var className: string | undefined =
    className + ' ' + 'px-3 py-1';
  }

  return (
    <button type='button' className={className}>
      {label}
    </button>
  );
};
