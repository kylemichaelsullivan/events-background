import { FormatProvider } from '../context/FormatContext';

import Title from './Title';
import Edit from './edit/Edit';
import Format from './format/Format';
import Preview from './preview/Preview';
import Ports from './files/Ports';

function App() {
	return (
		<div className='App flex flex-col gap-4 p-4'>
			<FormatProvider>
				<Title title='Events Background' />
				<Edit />
				<Format />
				<Preview />
				<Ports />
			</FormatProvider>
		</div>
	);
}

export default App;
