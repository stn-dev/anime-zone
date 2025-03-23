import { SelectProps } from "../services/Type"

function Select(props: SelectProps) {
  const { name, className = '', options, onChange } = props
  return (
    <select
      name={name}
      className={`w-full outline-none text-contrasted bg-blue p-3 rounded-lg text-lg appearance-none ${className}`}
      onChange={onChange}
    >
      {
        options.map((option, id) => (
          <option
            key={id}
            value={option.value}
            className="hover:bg-contrasted hover:text-dark"
          >
            {option.label}
          </option>
        ))
      }
    </select>
  )
}

export default Select