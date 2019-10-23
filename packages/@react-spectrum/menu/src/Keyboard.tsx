import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {useItemProvider} from './Menu';

export const Keyboard = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let { keyboard } = useItemProvider();

  return (
    <kbd {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, keyboard, props.className)}>
      {props.children}
    </kbd>
  );
});
