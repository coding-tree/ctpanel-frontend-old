import React, {createContext, useState} from 'react';

export const SelectedElementContext = createContext('');

export const SelectedElementProvider = ({children}) => {
  const [selectedElement, toggleSelection] = useState([]);

  return <SelectedElementContext.Provider value={[selectedElement, toggleSelection]}>{children}</SelectedElementContext.Provider>;
};
