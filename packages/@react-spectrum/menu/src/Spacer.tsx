import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/layouts.css';
import {useItemProvider} from "./Menu";


export const Spacer = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));

  return (
    <div {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'spacer', props.className)} />
  );
});
