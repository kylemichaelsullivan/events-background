import { useContext } from 'react';
import {
	FormatContext,
	type FormatContextType,
} from '../context/FormatContext';

export function useFormat(): FormatContextType {
	const context = useContext(FormatContext);
	if (!context) {
		throw new Error('useFormat must be used within a <FormatProvider />');
	}
	return context;
}
