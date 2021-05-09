import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import useSWR from 'swr';
import { GameStateInterface } from '../../types';

const GlobalStateContext = createContext({
  state: {} as Partial<GameStateInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<GameStateInterface>>>,
});

const GlobalStateProvider = ({
  children,
  value = {} as GameStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GameStateInterface>;
}) => {
  const [state, setState] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(`useGlobalState must be used within a GlobalStateContext`);
  }
  return context;
};

const RetrieveGamestate = ({ children }: { children: React.ReactChild }) => {
  const { setState } = useGlobalState();
  const fetcher = (
    ...args: [input: RequestInfo, init?: RequestInit | undefined]
  ) => fetch(...args).then((response) => response.json());

  const { data, error } = useSWR(`http://192.168.1.80:3030`, fetcher, {
    refreshInterval: 2000,
  });

  useEffect(() => {
    console.log(data);
    if (data.map) {
      setState(data);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <>{data.map ? children : <p>Waiting for game to start</p>}</>;
};

export { GlobalStateProvider, RetrieveGamestate, useGlobalState };
