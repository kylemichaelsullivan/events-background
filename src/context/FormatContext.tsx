import {
	createContext,
	useState,
	type ChangeEvent,
	type ReactNode,
} from 'react';
import { DEFAULT_FontSize, DEFAULT_PaddingTop } from '../constants/defaults';

export type FormatContextType = {
	fontSize: string;
	paddingTop: string;
	setFontSize: (value: string) => void;
	setPaddingTop: (value: string) => void;
	handleFormatChange: (
		e: ChangeEvent<HTMLSelectElement>,
		attribute: 'fontSize' | 'paddingTop',
	) => void;
};

export const FormatContext = createContext<FormatContextType | undefined>(
	undefined,
);

type FormatProviderProps = {
	children: ReactNode;
};

function FormatProvider({ children }: FormatProviderProps): JSX.Element {
	const [fontSize, setFontSize] = useState<string>(DEFAULT_FontSize);
	const [paddingTop, setPaddingTop] = useState<string>(DEFAULT_PaddingTop);

	function handleFormatChange(
		e: ChangeEvent<HTMLSelectElement>,
		attribute: 'fontSize' | 'paddingTop',
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
}

export default FormatProvider;
