import { StyleSheet, Platform, ViewStyle, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        padding: 10,
        paddingBottom: 20,
        alignItems: 'flex-start',
        minHeight: '100%',
    },
    addCardFooterButton: {
        position: 'absolute', // Fija el botón al pie de la columna.
        bottom: 12,
        left: 12,
        right: 12,
        flexDirection: 'row',
        borderRadius: 999,
        paddingHorizontal: 4,
        paddingVertical: 2,
        backgroundColor: '#404040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#22272b',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
    },
    cardDragging: {
        opacity: 0.9,
        backgroundColor: '#4D4D4D',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#B6C2CF',
    },
    cardDescription: {
        color: '#B3B3B3',
        fontSize: 12,
    },
});
