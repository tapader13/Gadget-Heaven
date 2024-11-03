import { useContext } from 'react';
import { contextProvider } from './ConProvider';

export const useData = () => {
  return useContext(contextProvider);
};
