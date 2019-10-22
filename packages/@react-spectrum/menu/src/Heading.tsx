import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';

export const Heading = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));

  return (
    <h1 {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'details')}>
      {props.children}
    </h1>
  );
});
