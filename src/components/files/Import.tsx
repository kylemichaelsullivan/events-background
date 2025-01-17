import { useData } from '../../context/Data';

import { schema } from './zod';

import { faFileImport } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function Import() {
	const { applyImport } = useData();

	function handleImport() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'application/json';

		input.click();

		input.onchange = async (e) => {
			const target = e.target as HTMLInputElement;
			if (target.files && target.files.length > 0) {
				const file = target.files[0];
				if (file) {
					const reader = new FileReader();
					reader.onload = async (event) => {
						const json = event?.target?.result;
						try {
							const parsedJSON = JSON.parse(json as string);
							schema.parse(parsedJSON);
							applyImport(parsedJSON);
						} catch (error) {
							if (error instanceof Error) {
								console.error('Invalid JSON:', error.message);
							} else {
								console.error('Unknown error occurred:', error);
							}
						}
					};
					reader.readAsText(file);
				}
			}
			input.remove();
		};
	}

	return (
		<Button
			title='Import'
			icon={faFileImport}
			order={1}
			handleClick={handleImport}
		/>
	);
}

export default Import;
