import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {useGridProvider} from "./Grid";

export const Text = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {slots: {[props.slot]: slotClass}} = useGridProvider();

  // I don't know if this is really needed... to protect us from passing the class further down
  return (
    <span {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'text', slotClass, props.className)}>
      {props.children}
    </span>
  );
});
