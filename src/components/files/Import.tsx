import type { ChangeEvent } from 'react';
import { useRef } from 'react';

import { useData } from '../../hooks/useData';
import { schema } from './zod';

import Button from './Button';

import { faFileImport } from '@fortawesome/free-solid-svg-icons';

function Import() {
	const { applyImport } = useData();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				try {
					const json = JSON.parse(e.target?.result as string);
					schema.parse(json);
					applyImport(json);
				} catch (error) {
					console.error('Error parsing JSON:', error);
					alert(
						'Error importing file. Please make sure it is a valid JSON file.'
					);
				}
			};
			reader.readAsText(file);
		}
	};

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<>
			<input
				type='file'
				ref={fileInputRef}
				onChange={handleImport}
				accept='.json'
				className='hidden'
			/>
			<Button
				title='Import'
				icon={faFileImport}
				order={2}
				handleClick={handleButtonClick}
			/>
		</>
	);
}

export default Import;
