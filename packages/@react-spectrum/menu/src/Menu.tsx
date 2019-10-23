import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {ReactNode, RefObject, useContext} from 'react';
import styles from '../styles/index.css';
import {useProviderProps} from '@react-spectrum/provider';

export interface MenuProps {
  children?: ReactNode
}

export let ItemContext = React.createContext(null);

export function useItemProvider() {
  return useContext(ItemContext);
}

export const Menu = React.forwardRef((props: MenuProps, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));

  return (
    <div {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'spectrum-Menu')}>
      <ItemContext.Provider
        value={{
          container: classNames(styles, 'container'),
          icon: classNames(styles, 'icon'),
          label: classNames(styles, 'label'),
          description: classNames(styles, 'description'),
          tools: classNames(styles, 'tools')
        }}>
        {props.children}
      </ItemContext.Provider>
    </div>
  );
});
