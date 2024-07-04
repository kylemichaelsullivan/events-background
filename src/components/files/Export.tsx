import { useData } from '../../context/Data';

import { faFileExport } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function Export() {
  const { data } = useData();
  function handleExport() {
    const stringifiedJSON = JSON.stringify(data);

    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      stringifiedJSON,
    )}`;

    const exportFilename = 'events.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFilename);
    linkElement.click();

    alert('Background exported successfully.');
  }

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
