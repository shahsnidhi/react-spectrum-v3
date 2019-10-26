import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {useGridProvider} from "./Grid";

export const Avatar = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {slots: {[props.slot]: slotClass}} = useGridProvider();

  return (
    <img {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, slotClass, props.className)} src={props.src} />
  );
});
