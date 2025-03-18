interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'div' | 'section' | 'nav' | 'header'
}

function Container(props: ContainerProps) {
  const { children, className = '', tag = 'div' } = props
  const Tag = tag
  return (
    <Tag className={`w-full max-w-[1440px] px-5 mx-auto lg:px-6 xl:px-8 ${className}`} >
      {children}
    </Tag>
  )
}

export default Container