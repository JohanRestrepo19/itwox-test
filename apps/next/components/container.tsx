'use client'
import { View, type ViewProps } from 'tamagui'

type Props = ViewProps & { children: React.ReactNode }

export function Container({ children, style, ...props }: Props) {
  return (
    <View
      justifyContent="center"
      alignItems="center"
      style={[
        {
          marginLeft: '4rem',
          marginRight: '4rem',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}
