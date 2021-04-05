import React, {useContext} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const StyleContext = React.createContext();

export const useStyles = ()  => {
    return useContext(StyleContext);
}; 

const StyleProvider = ({children}) => {

    const {width, height} = Dimensions.get('window');

    const button = StyleSheet.create({
        fill: {
            padding: 2,
            borderWidth: 2,
            borderRadius: 7,
            borderColor: 'blue',
            backgroundColor: 'blue'
        },
        text: {
            color: 'white'
        }
    });

    const form = StyleSheet.create({
        container: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const input = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 2,
            borderColor: 'black'
        }
    });

    const page = StyleSheet.create({
        title: {
            fontSize: 50
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            marginTop: height * 0.07,
            marginLeft: width * 0.07,
            marginRight: width * 0.07,
            marginBottom: height * 0.03
        }
    });

    const card = StyleSheet.create({
        title: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        body: {
            fontSize: 10
        },
        border: {
            borderTopWidth: 2,
            padding: 5,
            borderColor: 'black'
        }
    });

    const header = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        },
        right: {
            marginLeft: 'auto'
        },
        left: {
            marginRight: 'auto'
        }
    });

    const footer = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 'auto',
            padding: 10,
            borderTopColor: 'black',
            borderTopWidth: 2
        }
    });
    
    const value = {
        button,
        page,
        input,
        card,
        form,
        header,
        footer
    };

    return (
        <StyleContext.Provider value={value}>
            {children}
        </StyleContext.Provider>
    );
};

export default StyleProvider;