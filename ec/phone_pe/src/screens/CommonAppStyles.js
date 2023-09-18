import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const commonAppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    icons: {
        width: scale(22),
        height: scale(22),
        tintColor: 'white'
    },
});

export { commonAppStyles };