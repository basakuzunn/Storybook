import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button, {
  ButtonDisable,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './Button';

describe('Button Unit Tests', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      variant: 'primary',
      disable: false,
      size: 'large',
      label: '',
      className: '',
    };
  });

  test('Button renders correctly', () => {
    const component = render(<Button {...props} />);
    expect(component.container).toBeInTheDocument();
  });

  /**
   * primary button
   */

  test('should assert class names are correct when variant is primary.', () => {
    const variant = 'primary';
    const expectedClassNames = [
      'bg-rose-600',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-rose-700',
      'text-white',
      'font-bold',
      'rounded',
      'active:bg-rose-700',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is primary and disable.', () => {
    const variant: ButtonVariant = 'primary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-gray-200',
      'text-gray-300',
      'font-bold',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is primary and large.', () => {
    const variant = 'primary';
    const size = 'large';
    const expectedClassNames = [
      'bg-rose-600',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-rose-700',
      'text-white',
      'font-bold',
      'rounded',
      'active:bg-rose-700',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant, size };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });
  
  test('should assert class names are correct when variant is primary,large and disable.', () => {
    const variant: ButtonVariant = 'primary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-gray-200',
      'text-gray-300',
      'font-bold',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
      'px-6', 'py-2'
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is primary and medium.', () => {
    const variant = 'primary';
    const size = 'medium';
    const expectedClassNames = [
      'bg-rose-600',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-rose-700',
      'text-white',
      'font-bold',
      'rounded',
      'active:bg-rose-700',
      'px-3',
      'py-1',
    ];
    const newprop: ButtonProps = { ...props, variant, size };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is primary and focus.', () => {
    const variant = 'primary';
    const size = 'large';
    const expectedClassNames = ['focus:outline-4', 'focus:ring'];
    const newprop: ButtonProps = { ...props, variant, size };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * bluePrimary button
   */

  test('should assert class names are correct when variant is bluePrimary.', () => {
    const variant: ButtonVariant = 'bluePrimary';
    const expectedClassNames = [
      'bg-blue-900',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-white',
      'font-bold',
      'active:bg-blue-800',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is bluePrimary and disable.', () => {
    const variant: ButtonVariant = 'bluePrimary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-gray-200',
      'text-gray-300',
      'font-bold',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * blueSecondary button
   */

  test('should assert class names are correct when variant is blueSecondary.', () => {
    const variant: ButtonVariant = 'blueSecondary';
    const expectedClassNames = [
      'bg-transparent',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-blue-900',
      'font-semibold',
      'hover:text-white',
      'border-2',
      'border-blue-900',
      'hover:border-2-transparent',
      'active:bg-transparent',
      'active:text-blue-900',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is blueSecondary and disable.', () => {
    const variant: ButtonVariant = 'blueSecondary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-transparent',
      'text-gray-300',
      'font-semibold',
      'border-2',
      'border-gray-200',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * blackPrimary button
   */

  test('should assert class names are correct when variant is blackPrimary.', () => {
    const variant: ButtonVariant = 'blackPrimary';
    const expectedClassNames = [
      'bg-black',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-white',
      'font-bold',
      'active:bg-black',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is blackPrimary and disable.', () => {
    const variant: ButtonVariant = 'blackPrimary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-gray-200',
      'text-gray-300',
      'font-bold',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * blackSecondary button
   */

  test('should assert class names are correct when variant is blackSecondary.', () => {
    const variant: ButtonVariant = 'blackSecondary';
    const expectedClassNames = [
      'bg-transparent',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-black',
      'font-semibold',
      'hover:text-white',
      'border-2',
      'border-black',
      'hover:border-2-transparent',
      'active:bg-transparent',
      'active:text-black',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is blackSecondary and disable.', () => {
    const variant: ButtonVariant = 'blackSecondary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-transparent',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-black',
      'font-semibold',
      'hover:text-white',
      'border-2',
      'border-black',
      'hover:border-2-transparent',
      'active:bg-transparent',
      'active:text-black',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * whitePrimary button
   */

  test('should assert class names are correct when variant is whitePrimary.', () => {
    const variant: ButtonVariant = 'whitePrimary';
    const expectedClassNames = [
      'bg-white',
      'focus:outline-4',
      'focus:ring',
      'text-blue-600',
      'hover:bg-blue-600',
      'hover:text-white',
      'font-bold',
      'active:bg-white',
      'active:text-blue-600',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is whitePrimary and disable.', () => {
    const variant: ButtonVariant = 'whitePrimary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-white',
      'focus:outline-4',
      'focus:ring',
      'text-blue-600',
      'hover:bg-blue-600',
      'hover:text-white',
      'font-bold',
      'active:bg-white',
      'active:text-blue-600',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * whiteSecondary button
   */

  test('should assert class names are correct when variant is whiteSecondary.', () => {
    const variant: ButtonVariant = 'whiteSecondary';
    const expectedClassNames = [
      'bg-transparent',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-white',
      'font-semibold',
      'hover:text-white',
      'border-2',
      'border-white',
      'hover:border-2-transparent',
      'active:bg-blue-800',
      'rounded',
      'px-6',
      'py-2',
    ];
    const newprop: ButtonProps = { ...props, variant };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when variant is whiteSecondary and disable.', () => {
    const variant: ButtonVariant = 'whiteSecondary';
    const disable: ButtonDisable = true;
    const expectedClassNames = [
      'bg-transparent',
      'focus:outline-4',
      'focus:ring',
      'hover:bg-blue-600',
      'text-white',
      'font-semibold',
      'hover:text-white',
      'border-2',
      'border-white',
      'hover:border-2-transparent',
      'active:bg-blue-800',
      'rounded',
      'opacity-50',
      'cursor-not-allowed',
    ];
    const newprop: ButtonProps = { ...props, variant, disable };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  /**
   * Sizes
   */

  test('should assert class names are correct when size is small', () => {
    const size: ButtonSize = 'medium';
    const expectedClassNames = ['px-3', 'py-1'];
    const newprop: ButtonProps = { ...props, size };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });

  test('should assert class names are correct when size is large', () => {
    const size: ButtonSize = 'large';
    const expectedClassNames = ['px-6', 'py-2'];
    const newprop: ButtonProps = { ...props, size };
    const component = render(<Button {...newprop} />);
    const element =
      component.container.querySelector<HTMLButtonElement>('button');
    if (element === null) {
      throw new Error('Element not found');
    }
    expect(Array.from(element.classList)).toEqual(
      expect.arrayContaining(expectedClassNames)
    );
  });
});
