import {
  useState,
  createContext,
  useContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import { DEFAULT_FontSize, DEFAULT_PaddingTop } from '../lib/defaults';

type FormatContextType = {
  fontSize: string;
  paddingTop: number;
  setFontSize: Dispatch<SetStateAction<string>>;
  setPaddingTop: Dispatch<SetStateAction<number>>;
  handleFormatChange: (
    e: { target: { value: string | number } },
    attribute: 'fontSize' | 'paddingTop',
  ) => void;
};

const FormatContext = createContext<FormatContextType | undefined>(undefined);

type FormatProviderProps = {
  children: ReactNode;
};

export const FormatProvider = ({ children }: FormatProviderProps) => {
  const [fontSize, setFontSize] = useState<string>(DEFAULT_FontSize);
  const [paddingTop, setPaddingTop] = useState<number>(DEFAULT_PaddingTop);

  function handleFormatChange(
    e: { target: { value: string | number } },
    attribute: 'fontSize' | 'paddingTop',
  ) {
    if (attribute === 'fontSize') {
      setFontSize(e.target.value as string);
    }
    if (attribute === 'paddingTop') {
      setPaddingTop(parseInt(e.target.value as string));
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

export const useFormat = (): FormatContextType => {
  const context = useContext(FormatContext);
  if (!context) {
    throw new Error('useFormat must be used within a <FormatProvider />');
  }
  return context;
};
