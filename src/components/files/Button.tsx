import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { large_button } from '../../lib/classNames';

type ButtonProps = {
  title: string;
  icon: any;
  order: number;
  handleClick: any;
};

function Button({ title, icon, order, handleClick }: ButtonProps) {
  return (
    <button
      type='button'
      className={`${large_button} sm:order-${order}`}
      title={title}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        className='cursor-pointer text-3xl transition duration-300'
      />
      <span>{title}</span>
    </button>
  );
}

export default Button;
