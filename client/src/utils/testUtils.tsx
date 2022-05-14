import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from 'store';

interface TestProviderProps {
  store: any,
  children: ReactNode,
}

const TestProvider = ({
  store,
  children
}: TestProviderProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export function testRender(ui: ReactNode, {store, ...otherOpts}: any) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts);
}

export const makeTestStore = (opts = {}) => {
  const store = configureStore({ reducer, ...opts });
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch) as jest.Mocked<typeof store.dispatch>
  return store;
}
