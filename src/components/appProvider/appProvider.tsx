import { createContext, useReducer } from 'react';
import { metaReducer } from './reducers';

type IMetaQuery = {
  data: any;
  initialLoad: boolean;
};

type IInitialState = {
  meta: IMetaQuery;
};

const initialState = {
  meta: {
    data: [],
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
  const [state, dispatch] = useReducer<any>(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
