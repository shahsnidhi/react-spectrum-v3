import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/semanticElems.css';
import {ItemContext, useItemProvider} from './Menu';


export const Section = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let { section } = useItemProvider();

  return (
    <section {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, section, props.className)}>
      <ItemContext.Provider
        value={{
          avatar: null,
          heading: null,
          text: null,
          section: null,
          spacer: null,
          item: null
        }}>
        {props.children}
      </ItemContext.Provider>
    </section>
  );
});
