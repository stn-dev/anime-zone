
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties
  tag?: 'div' | 'section' | 'nav' | 'header'
}

function Container(props: ContainerProps) {
  const { children, className = '', tag = 'div', style } = props
  const Tag = tag
  return (
    <Tag className={`w-full max-w-[1440px] px-5 mx-auto lg:px-6 xl:px-8 ${className}`} style={style} >
      {children}
    </Tag>
  )
}

export default Container