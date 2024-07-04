import html2canvas from 'html2canvas';

import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function Save() {
  const handleSave = async () => {
    const element = document.getElementById('preview')!;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'background.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <Button
      title='Save'
      icon={faFileArrowDown}
      order={2}
      handleClick={handleSave}
    />
  );
}

export default Save;
