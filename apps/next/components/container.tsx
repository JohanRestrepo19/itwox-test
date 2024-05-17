import { View, useMedia, type ViewProps } from 'tamagui'

type Props = ViewProps & { children: React.ReactNode }

export function Container({ children, style, ...props }: Props) {
  const media = useMedia()
  console.log('media information: ', media)

  const maxWidth = media.md ? '1020px' : media.lg ? '1280px' : media.xl ? '1420px' : '100%'

  return (
    <View
      style={[
        {
          maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}
