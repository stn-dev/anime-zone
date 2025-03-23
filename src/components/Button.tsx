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
      className={`h-fit w-fit px-[16px] hover:cursor-pointer md:px-[25px] 2xl:px-[32px] py-2 md:py-[12px] xl:py-[16px] text-sm md:text-xl font-semibold rounded-tr-xl xl:rounded-tr-3xl rounded-bl-xl xl:rounded-bl-3xl ${variant === 'stroked' ? 'bg-transparent text-contrasted border border-contrasted' : 'bg-contrasted text-dark'} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button