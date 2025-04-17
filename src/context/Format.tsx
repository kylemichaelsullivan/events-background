import {
  useState,
  createContext,
  useContext,
  type ChangeEvent,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import { DEFAULT_FontSize, DEFAULT_PaddingTop } from '../lib/defaults';

type FormatContextType = {
  fontSize: string;
  paddingTop: string;
  setFontSize: Dispatch<SetStateAction<string>>;
  setPaddingTop: Dispatch<SetStateAction<string>>;
  handleFormatChange: (
    e: ChangeEvent<HTMLSelectElement>,
    attribute: 'fontSize' | 'paddingTop'
  ) => void;
};

const FormatContext = createContext<FormatContextType | undefined>(undefined);

type FormatProviderProps = {
  children: ReactNode;
};

export const FormatProvider = ({ children }: FormatProviderProps) => {
  const [fontSize, setFontSize] = useState<string>(DEFAULT_FontSize);
  const [paddingTop, setPaddingTop] = useState<string>(DEFAULT_PaddingTop);

  function handleFormatChange(
    e: ChangeEvent<HTMLSelectElement>,
    attribute: 'fontSize' | 'paddingTop'
  ) {
    if (attribute === 'fontSize') {
      setFontSize(e.target.value);
    }
    if (attribute === 'paddingTop') {
      setPaddingTop(Number.parseInt(e.target.value).toString());
    }
  }

  return (
    <FormatContext.Provider
      value={{
        fontSize,
        paddingTop,
        setFontSize,
        setPaddingTop,
        handleFormatChange,
      }}
    >
      {children}
    </FormatContext.Provider>
  );
};

const useFormat = (): FormatContextType => {
  const context = useContext(FormatContext);
  if (!context) {
    throw new Error('useFormat must be used within a <FormatProvider />');
  }
  return context;
};

export { useFormat };
