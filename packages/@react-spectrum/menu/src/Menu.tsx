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
          avatar: classNames(styles, 'avatar'),
          heading: classNames(styles, 'heading'),
          text: classNames(styles, 'text'),
          section: classNames(styles, 'section'),
          spacer: classNames(styles, 'spacer'),
          item: classNames(styles, 'item'),
          keyboard: classNames(styles, 'keyboard')
        }}>
        {props.children}
      </ItemContext.Provider>
    </div>
  );
});
