import {HTMLElement} from 'react-dom';
import React, {RefObject, useContext} from 'react';
import {classNames} from "@react-spectrum/utils";

export let GridContext = React.createContext(null);

export function useGridProvider() {
  return useContext(GridContext);
}

export const Grid = React.forwardRef((props, ref: RefObject<HTMLElement>) => {
  let {slots} = props;

  return (
    <div className={classNames({}, slots && slots.container, props.className)}>
      <GridContext.Provider
        value={{
          slots
        }}>
        {props.children}
      </GridContext.Provider>
    </div>
  );
});
