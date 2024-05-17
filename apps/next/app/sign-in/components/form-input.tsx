import { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { Input, type InputProps, Label, Text, XStack, YStack } from 'tamagui'

type Props = InputProps & { title: string; error?: string }

const FormInput = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <YStack mb="$4" gap="$2">
      {props.error ? <Text color="red">{props.error}</Text> : null}
      <XStack gap="$4" alignItems="center">
        <Label>{props.title}</Label>
        <Input ref={ref} {...props} />
      </XStack>
    </YStack>
  )
})

export default FormInput
