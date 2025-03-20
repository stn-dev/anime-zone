interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'orange' | 'stroked'
  className?: string;
}

function Button(props: ButtonProps) {
  const { label, onClick, variant = 'orange', className = "" } = props
  return (
    <button
      onClick={onClick}
      className={`h-fit w-fit px-[16px] 2xl:px-[32px] py-2 2xl:py-[16px] text-sm 2xl:text-xl font-semibold rounded-tr-xl 2xl:rounded-tr-3xl rounded-bl-xl 2xl:rounded-bl-3xl ${variant === 'stroked' ? 'bg-transparent text-contrasted border border-contrasted' : 'bg-contrasted text-dark'} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button