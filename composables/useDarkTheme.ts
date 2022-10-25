
const useDarkTheme = () =>{
    const darkTheme  = useState<boolean>('enabled', () => true)

    const setDarkTheme = (enabled: boolean) =>{
        darkTheme.value = enabled
    }

    return {
        darkTheme,
        setDarkTheme
    }
}

export default useDarkTheme