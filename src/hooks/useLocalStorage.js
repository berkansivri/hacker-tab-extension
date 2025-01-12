import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue, raw) => {
  const [state, setState] = useState(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      if (typeof localStorageValue !== 'string') {
        if (initialValue !== undefined) {
          localStorage.setItem(
            key,
            raw ? String(initialValue) : JSON.stringify(initialValue)
          );
        }
        return initialValue;
      } else {
        return raw
          ? localStorageValue
          : JSON.parse(localStorageValue ?? 'null');
      }
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. Also JSON.stringify can throw.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
