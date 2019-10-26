import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import {useProviderProps} from '@react-spectrum/provider';
import styles from '../styles/index.css';
import {Grid} from "./Grid";


export const MenuItem = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {slots: {
      container: classNames(styles, 'container'),
      avatar: classNames(styles, 'avatar'),
      label: classNames(styles, 'label'),
      description: classNames(styles, 'description'),
      icon: classNames(styles, 'icon'),
      tools: classNames(styles, 'tools')
    }};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {layout = 'default', slots} = completeProps;

  return (
    <div {...filterDOMProps(completeProps)} className={classNames(styles, 'spectrum-MenuItem', props.className, {[layout]: layout !== 'none'})} ref={ref}>
      <Grid slots={slots}>
        {props.children}
      </Grid>
    </div>
  );
});
