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
  
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  /**
   * Buttons
   */
  if (primary) {
    var className: string | undefined =
      'bg-rose-600 focus:outline-4 focus:ring hover:bg-rose-700 text-white font-bold py-2 px-4 rounded ';
  } else if (bluePrimary) {
    var className: string | undefined =
      'bg-blue-900 focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ';
  } else if (blueSecondary) {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-blue-900 font-semibold hover:text-white py-2 px-4 border-2 border-blue-900 hover:border-2-transparent rounded';
  } else if (blackPrimary) {
    var className: string | undefined =
      'bg-black focus:outline-4 focus:ring hover:bg-blue-600 text-white font-bold py-2 px-4 rounded';
  } else if (blackSecondary) {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-2-transparent rounded';
  } else if (whitePrimary) {
    var className: string | undefined =
      'bg-white focus:outline-4 focus:ring text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded';
  } else {
    var className: string | undefined =
      'bg-transparent focus:outline-4 focus:ring hover:bg-blue-600 text-white font-semibold hover:text-white py-2 px-4 border-2 border-white hover:border-2-transparent rounded';
  }
  /**
   * Disable Buttons
   */
  if (disable && (whitePrimary || whiteSecondary)) {
    var className: string | undefined =
      className + ' ' + 'opacity-50 cursor-not-allowed';
  } else if (disable && (primary || bluePrimary)) {
    var className: string | undefined =
      'bg-gray-200 text-gray-300 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed';
  } else if (disable && blueSecondary ) {
    var className: string | undefined =
      'bg-transparent text-gray-300 font-semibold py-2 px-4 border-2 border-gray-200 rounded opacity-50 cursor-not-allowed';
  } else if (disable && blackPrimary) {
    var className: string | undefined =
      'bg-gray-200 text-gray-300 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed';
  }
  
  return (
    <button type='button' className={className}>
      {label}
    </button>
  );
};
