import { useEffect, useState } from "react";

/**
 * useLocalStorageState stores state in React and syncs it with localStorage.
 *
 * This hook is reusable for simple state values such as theme settings.
 */
export function useLocalStorageState<T>(key: string, initialValue: T) {
  /**
   * Lazy initial state:
   * React only runs this function during the first render.
   *
   * This prevents reading from localStorage on every render.
   */
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      if (!storedValue) {
        return initialValue;
      }

      return JSON.parse(storedValue) as T;
    } catch {
      return initialValue;
    }
  });

  /**
   * Whenever the value changes, save it to localStorage.
   */
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}