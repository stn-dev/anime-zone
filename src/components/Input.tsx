import { InputPros } from "../services/Tyoe"

function Input(props: InputPros) {
  const { placeholder, className = '', value, onChange, type = 'text' } = props
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full border border-contrasted p-3 text-base md:border-[2px] md:p-4 rounded-xl md:text-lg text-neutre outline-none placeholder:text-neutre placeholder:opacity-55 ${className}`}
      value={value}
      autoFocus
    />
  )
}

export default Input