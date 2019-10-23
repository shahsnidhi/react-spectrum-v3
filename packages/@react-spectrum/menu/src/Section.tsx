import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {useItemProvider} from './Menu';


export const Section = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {[props.slot]: slotClass} = useItemProvider();

  return (
    <section {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, slotClass, props.className)}>
      {props.children}
    </section>
  );
});
