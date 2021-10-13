import * as React from 'react'
import RawButton, { ButtonProps as RawButtonProps } from '@mui/material/Button'

export type ButtonProps = Pick<RawButtonProps, "size" | "variant" | "color" | "onClick" | "onMouseMove">

const Button: React.FC<ButtonProps> = ({ children, ...props }: RawButtonProps) => {
  return <RawButton {...props}>{children}</RawButton>
}

export default Button
