import { HTMLAttributes, MouseEvent, useId } from 'react';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  onClick?: () => void;
  reversal?: boolean;
}

const Checkbox = ({ children, isChecked = false, onClick, reversal = false }: CheckboxProps) => {
  const id = useId();

  const handleClickEvent = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <label className="group inline-block" htmlFor={id}>
      <span className="relative flex cursor-pointer select-none items-center p-0">
        <span
          className={`relative box-border inline-block h-[24px] w-[24px] rounded align-middle
          ${
            reversal
              ? 'after:absolute after:left-[4px] after:top-[5px] after:box-content after:h-[7px] after:w-[12px] after:border-[3px] after:border-r-0 after:border-t-0 after:border-solid after:border-[#C1C7CD] after:-rotate-45 after:content-[""]'
              : 'bg-gray-300'
          }
            ${
              isChecked
                ? `${
                    reversal ? 'bg-white' : '!bg-blue-400'
                  } after:absolute after:left-[4px] after:top-[5px] after:box-content after:h-[7px] after:w-[12px] after:border-[3px] after:border-r-0 after:border-t-0 after:border-solid ${
                    reversal ? 'after:border-blue-400' : 'after:border-white'
                  } after:-rotate-45 after:content-[""]`
                : ''
            }
          `}
        />
        <input
          className="absolute z-[-1] m-0 h-0 w-0 opacity-0 outline-none"
          id={id}
          type="checkbox"
          onClick={handleClickEvent}
        />
        {children || null}
      </span>
    </label>
  );
};

export default Checkbox;
