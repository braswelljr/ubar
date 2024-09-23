import '~/styles/globals.css'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function Layout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot />
    </ThemeProvider>
  )
}
