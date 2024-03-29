/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';

import { TrackingProviderProps as ProviderProps, Payload } from '../../types';
import { TrackingContext } from '../TrackingContext';

type Props = ProviderProps & {
  onDispatch?: (payload: Payload) => void;
};

export function TrackingRoot({
  name,
  onDispatch,
  children,
}: Props): JSX.Element {
  const contextValue = React.useMemo(
    () => ({
      app: name,
      dispatch: onDispatch,
      elementTree: [],
    }),
    [name, onDispatch],
  );

  return (
    <TrackingContext.Provider value={contextValue}>
      {children}
    </TrackingContext.Provider>
  );
}
