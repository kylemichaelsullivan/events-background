import { useData } from '../../hooks/useData';

import Button from './Button';

import { faFileExport } from '@fortawesome/free-solid-svg-icons';

function Export() {
	const { data } = useData();

	const handleExport = () => {
		const json = JSON.stringify(data, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'events.json';
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<Button
			title='Export'
			icon={faFileExport}
			order={3}
			handleClick={handleExport}
		/>
	);
}

export default Export;
