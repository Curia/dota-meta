import { createContext, useReducer } from 'react';
import { HeroesMetaTrends } from '@/apollo/__generated__/HeroesMetaTrends';
import { metaReducer } from './reducers';

interface IMeta {
  data: HeroesMetaTrends | undefined;
  initialLoad: boolean;
}

type IInitialState = {
  meta: {
    data: HeroesMetaTrends | undefined;
    initialLoad: boolean;
  };
};

const initialState = {
  meta: {
    data: undefined,
    initialLoad: false,
  },
};

const AppContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ meta }, action) => ({
  meta: metaReducer(meta, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
