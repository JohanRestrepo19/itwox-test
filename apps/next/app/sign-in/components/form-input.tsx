import { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { Input, type InputProps, Label, XStack } from 'tamagui'

type Props = InputProps & { title: string }

const FormInput = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <XStack gap="$4" alignItems="center" mb="$4">
      <Label>{props.title}</Label>
      <Input ref={ref} {...props} />
    </XStack>
  )
})

export default FormInput
