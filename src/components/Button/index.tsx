import * as React from 'react';

type Props = {
  onClick: () => void;
  label: string;
};

export const Button = (props: Props) => {
  const { onClick, label } = props;

  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
      {label}
    </button>
  );
};
