import { createContext, useState } from 'react';

export const PageContext = createContext({
  currentPage: '',
  setCurrentPage: () => null,
});

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');
  const value = { currentPage, setCurrentPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
