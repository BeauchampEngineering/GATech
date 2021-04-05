import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

const StyleContext = React.createContext();

export const useStyles = ()  => {
    return useContext(StyleContext);
}


const StyleProvider = ({children}) => {

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
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const input = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10
        },
        border: {
            flexDirection: 'row',
            width: 200,
            borderBottomWidth: 2,
            borderColor: 'black'
        },
        box: {
            flex: 1
        }
    });

    const page = StyleSheet.create({
        title: {
            fontSize: 50
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginLeft: 25,
            marginRight: 25
        }
    });

    const pane = StyleSheet.create({
        vertical: {
            flex: 1
        }
    })

    const card = StyleSheet.create({
        title: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        body: {
            fontSize: 10
        },
        container: {
            paddingTop: 10
        },
        border: {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: 'black'
        }
    });

    const bar = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            paddingTop: 10,
            borderTopColor: 'black',
            borderTopWidth: 2
        }
    });
    
    const value = {
        button,
        page,
        input,
        pane,
        card,
        bar,
        form
    };

    return (
        <StyleContext.Provider value={value}>
            {children}
        </StyleContext.Provider>
    );
};

export default StyleProvider;