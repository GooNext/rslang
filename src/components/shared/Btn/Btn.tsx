import cn from 'classnames';

import './btn.scss';

type Props = {
  children: React.ReactNode;
  type?: string;
};

const Btn:React.FC<Props> = ({ children, type = 'bordered' }) => {
  return (
    <div className={cn("btn", `btn--${type}`)}>{children}</div>
  )
};

export default Btn;
