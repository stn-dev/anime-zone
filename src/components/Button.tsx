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
      className={`h-fit w-fit px-[32px] py-[16px] rounded-tr-3xl rounded-bl-3xl ${variant === 'stroked' ? 'bg-transparent text-contrasted border border-contrasted' : 'bg-contrasted text-dark'} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button