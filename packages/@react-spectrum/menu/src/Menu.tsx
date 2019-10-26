import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {ReactNode, RefObject} from 'react';
import styles from '../styles/index.css';
import {useProviderProps} from '@react-spectrum/provider';

export interface MenuProps {
  children?: ReactNode
}

export const Menu = React.forwardRef((props: MenuProps, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));

  return (
    <div {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'spectrum-Menu')}>
      {props.children}
    </div>
  );
});
