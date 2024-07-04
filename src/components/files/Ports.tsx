import Save from './Save';
import Import from './Import';
import Export from './Export';

function Ports() {
  return (
    <div className='Ports flex flex-col gap-1 sm:flex-row sm:justify-around'>
      <Save />
      <Import />
      <Export />
    </div>
  );
}

export default Ports;
