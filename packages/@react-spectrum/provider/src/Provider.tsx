/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import classNames from 'classnames';
import {DOMRef} from '@react-types/shared';
import {filterDOMProps} from '@react-aria/utils';
import {I18nProvider, useLocale} from '@react-aria/i18n';
import {ModalProvider, useModalProvider} from '@react-aria/overlays';
import {ProviderContext, ProviderProps} from '@react-types/provider';
import React, {useContext, useEffect, useRef} from 'react';
import {
  shouldKeepSpectrumClassNames,
  useDOMRef,
  useStyleProps
} from '@react-spectrum/utils';
import styles from '@adobe/spectrum-css-temp/components/page/vars.css';
import typographyStyles from '@adobe/spectrum-css-temp/components/typography/index.css';
import {useColorScheme, useScale} from './mediaQueries';
// @ts-ignore
import {version} from '../package.json';

const Context = React.createContext<ProviderContext | null>(null);

function Provider(props: ProviderProps, ref: DOMRef<HTMLDivElement>) {
  let prevContext = useProvider();
  let prevColorScheme = prevContext && prevContext.colorScheme;
  let {
    theme = prevContext && prevContext.theme,
    defaultColorScheme
  } = props;
  // Hooks must always be called.
  let autoColorScheme = useColorScheme(theme, defaultColorScheme);
  let autoScale = useScale(theme);
  let {locale: prevLocale} = useLocale();
  // if the new theme doesn't support the prevColorScheme, we must resort to the auto
  let usePrevColorScheme = !!theme[prevColorScheme];

  // importance of color scheme props > parent > auto:(OS > default > omitted)
  let {
    colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme,
    scale = prevContext ? prevContext.scale : autoScale,
    locale = prevContext ? prevLocale : null,
    children,
    isQuiet,
    isEmphasized,
    isDisabled,
    isRequired,
    isReadOnly,
    validationState,
    ...otherProps
  } = props;

  // select only the props with values so undefined props don't overwrite prevContext values
  let currentProps = {
    version,
    theme,
    colorScheme,
    scale,
    isQuiet,
    isEmphasized,
    isDisabled,
    isRequired,
    isReadOnly,
    validationState
  };
  let filteredProps = {};
  Object.entries(currentProps).forEach(([key, value]) => value !== undefined && (filteredProps[key] = value));

  // Merge options with parent provider
  let context = Object.assign({}, prevContext, filteredProps);

  // Only wrap in a DOM node if the theme, colorScheme, or scale changed
  let contents = children;
  let domProps = filterDOMProps(otherProps);
  let {styleProps} = useStyleProps(otherProps);
  if (!prevContext || props.locale || theme !== prevContext.theme || colorScheme !== prevContext.colorScheme || scale !== prevContext.scale || Object.keys(domProps).length > 0 || otherProps.UNSAFE_className || Object.keys(styleProps.style).length > 0) {
    contents = (
      <ProviderWrapper {...props} UNSAFE_style={{isolation: !prevContext ? 'isolate' : undefined, ...styleProps.style}} ref={ref}>
        {contents}
      </ProviderWrapper>
    );
  }

  return (
    <Context.Provider value={context}>
      <I18nProvider locale={locale}>
        <ModalProvider>
          {contents}
        </ModalProvider>
      </I18nProvider>
    </Context.Provider>
  );
}

/**
 * Provider is the containing component that all other React Spectrum components
 * are the children of. Used to set locale, theme, scale, toast position and
 * provider, modal provider, and common props for children components. Providers
 * can be nested.
 */
let _Provider = React.forwardRef(Provider);
export {_Provider as Provider};

const ProviderWrapper = React.forwardRef(function ProviderWrapper(props: ProviderProps, ref: DOMRef<HTMLDivElement>) {
  let {
    children,
    ...otherProps
  } = props;
  let {locale, direction} = useLocale();
  let {theme, colorScheme, scale} = useProvider();
  let {modalProviderProps} = useModalProvider();
  let {styleProps} = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  let themeKey = Object.keys(theme[colorScheme])[0];
  let scaleKey = Object.keys(theme[scale])[0];

  let className = classNames(
    styleProps.className,
    styles['spectrum'],
    typographyStyles['spectrum'],
    theme[colorScheme][themeKey],
    theme[scale][scaleKey],
    theme.global ? Object.values(theme.global) : null,
    {
      'react-spectrum-provider': shouldKeepSpectrumClassNames,
      spectrum: shouldKeepSpectrumClassNames,
      [themeKey]: shouldKeepSpectrumClassNames,
      [scaleKey]: shouldKeepSpectrumClassNames
    }
  );

  let style = {
    ...styleProps.style,
    // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
    // See https://web.dev/color-scheme/.
    colorScheme: props.colorScheme ?? Object.keys(theme).filter(k => k === 'light' || k === 'dark').join(' ')
  };

  let hasWarned = useRef(false);
  useEffect(() => {
    if (direction && domRef.current) {
      let closestDir = domRef.current.parentElement.closest('[dir]');
      let dir = closestDir && closestDir.getAttribute('dir');
      if (dir && dir !== direction && !hasWarned.current) {
        console.warn(`Language directions cannot be nested. ${direction} inside ${dir}.`);
        hasWarned.current = true;
      }
    }
  }, [direction, domRef, hasWarned]);


  return (
    <div
      {...filterDOMProps(otherProps)}
      {...styleProps}
      {...modalProviderProps}
      className={className}
      style={style}
      lang={locale}
      dir={direction}
      ref={domRef}>
      {children}
    </div>
  );
});

export function useProvider(): ProviderContext {
  return useContext(Context);
}

export function useProviderProps<T>(props: T) : T {
  let context = useProvider();
  if (!context) {
    return props;
  }
  return Object.assign({}, {
    isQuiet: context.isQuiet,
    isEmphasized: context.isEmphasized,
    isDisabled: context.isDisabled,
    isRequired: context.isRequired,
    isReadOnly: context.isReadOnly,
    validationState: context.validationState
  }, props);
}
