import { StyleSheet, Platform, ViewStyle } from 'react-native';

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
    column: {
        width: 270,
        backgroundColor: '#101204',
        marginHorizontal: 8,
        borderRadius: 12,
        padding: 12,
        alignSelf: 'flex-start',
    },
    columnHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cardCount: {
        backgroundColor: '#404040',
        color: '#FFFFFF',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        fontSize: 12,
    },
    columnContent: {
        paddingVertical: 10,
        maxHeight: '100%',
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
        color: '#FFFFFF',
    },
    cardDescription: {
        color: '#B3B3B3',
        fontSize: 12,
    },
    addCardButton: {
        flexDirection: 'row',
        borderRadius: 999,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    addCardButtonText: {
        color: 'white',
    },
}); 