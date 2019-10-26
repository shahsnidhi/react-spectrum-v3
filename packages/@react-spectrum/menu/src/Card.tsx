import {classNames, filterDOMProps} from '@react-spectrum/utils';
import {HTMLElement} from 'react-dom';
import React, {RefObject} from 'react';
import styles from '../styles/card-index.css';
import {useProviderProps} from '@react-spectrum/provider';
import {Grid} from "./Grid";

export const Card = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let defaults = {slots: {
      container: classNames(styles, 'container'),
      preview: classNames(styles, 'preview'),
      avatar: classNames(styles, 'avatar'),
      title: classNames(styles, 'title'),
      metadata: classNames(styles, 'metadata'),
      body: classNames(styles, 'body'),
      indicators: classNames(styles, 'indicators'),
      actions: classNames(styles, 'actions'),
      footer: classNames(styles, 'footer'),
      divider: classNames(styles, 'divider')
    }};
  let completeProps = Object.assign({}, defaults, useProviderProps(props));
  let {layout = 'default', slots} = completeProps;

  return (
    <div {...filterDOMProps(completeProps)} ref={ref} className={classNames(styles, 'spectrum-Card', props.className, {[layout]: layout !== 'none'})}>
      <Grid slots={slots}>
        {props.children}
      </Grid>
    </div>
  );
});
