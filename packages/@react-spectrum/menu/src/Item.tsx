import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import {useItemProvider} from './Menu';
import styles from '../styles/semanticElems.css';


export const Item = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let { item } = useItemProvider();

  return (
    <div {...filterDOMProps(completeProps)} className={classNames(styles, item)} ref={ref}>
      {props.children}
    </div>
  );
});
