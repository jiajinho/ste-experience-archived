import { useEffect, useState } from 'react';

export default <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [value, setValue] = useState(defaultValue);

  //Listen to localstorage change
  useEffect(() => {
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key !== key) return;

      const rawValue = localStorage.getItem(key);
      const value = JSON.parse(rawValue ?? '');

      setValue(value);
    };

    window.addEventListener('storage', handleStorageEvent);

    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  //Initial check if 'key' already exist
  useEffect(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    } else {
      setValue(JSON.parse(item));
    }
  }, []);

  //Setter
  const setStorageValue = (value: T) => {
    try {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new StorageEvent('storage', { key }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setStorageValue];
};