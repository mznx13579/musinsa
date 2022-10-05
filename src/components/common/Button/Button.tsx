import { forwardRef, Ref, ButtonHTMLAttributes, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}
const Button = forwardRef(function Button(props: ButtonProps, forwardedRef: Ref<HTMLButtonElement>) {
  const { fullWidth = false, children, ...rest } = props;
  const id = useMemo(() => {
    return `checkbox-${Math.floor(Math.random() * 10000).toString()}`;
  }, []);

  return (
    <button
      type="button"
      id={id}
      ref={forwardedRef}
      className={`border border-1 border-solid rounded-lg font-bold text-white bg-[#4394F0] p-4 disabled:bg-[#DDE1E6] disabled:cursor-not-allowed active:bg-[#1c78e2] ${
        fullWidth ? 'w-full' : 'w-auto'
      }`}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
});

export default Button;
