interface ButtonProps {
  label: string;
  disable?: boolean
  onClick?: () => void;
  variant?: 'orange' | 'stroked'
  className?: string;
}

function Button(props: ButtonProps) {
  const { label, onClick, variant = 'orange', className = "", disable = false } = props

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0)
    }
    if (onClick) onClick()
  }

  return (
    <button
      disabled={disable}
      onClick={handleClick}
      className={`h-fit w-fit px-[16px] hover:cursor-pointer md:px-[25px] 2xl:px-[32px] py-2 md:py-[12px] xl:py-[16px] text-sm md:text-xl font-semibold rounded-tr-xl xl:rounded-tr-3xl rounded-bl-xl xl:rounded-bl-3xl ${variant === 'stroked' ? 'bg-transparent text-contrasted border border-contrasted' : 'bg-contrasted text-dark'} ${disable ? 'opacity-50' : 'opacity-100'} ${className}`}
    >
      {label}
    </button>
  )
}

export default Button