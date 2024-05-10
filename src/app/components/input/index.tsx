import { TextInput, TextInputProps } from "react-native"

import { styled } from "./styles"

export function Input({ style, ...rest }: TextInputProps) {
  return <TextInput style={[styled.input, style]} {...rest} />
}
