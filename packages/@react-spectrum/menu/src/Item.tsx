import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {useItemProvider} from "./Menu";


export const Item = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {container} = useItemProvider();

  return (
    <div {...filterDOMProps(completeProps)} className={classNames(styles, container, props.className)} ref={ref}>
      {props.children}
    </div>
  );
});
