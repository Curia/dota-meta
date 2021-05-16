import React, { useContext } from 'react';
import { AppContext } from '@/components/appProvider';

export default function Home() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: `UPDATE_META`,
            payload: { foo: `foobar` },
          });
        }}
      >
        click
      </button>
    </>
  );
}
