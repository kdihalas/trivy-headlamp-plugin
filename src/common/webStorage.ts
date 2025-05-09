import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export enum TrivySettings {
  ComplianceTab,
  VulnerabilityTab,
  FailedControls,
}

export function useLocalStorage<T>(
  key: TrivySettings,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const storageKey = `kubescape.${TrivySettings[key]}`;

  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
