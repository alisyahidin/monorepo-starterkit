import { HTMLAttributes } from 'react';

export type ButtonProps = {
  color: 'primary' | 'secondary'
} & HTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <div>
      <button {...props} className='rounded-lg bg-blue-500 px-4 py-2 text-white'></button>
    </div>
  );
}