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
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const input = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: width * 0.05,
            borderWidth: 2,
            borderColor: 'black'
        }
    });

    const page = StyleSheet.create({
        title: {
            fontSize: 50,
            paddingBottom: height * .05
        },
        container: {
            flex: 1,
            flexDirection: 'column',
            marginTop: height * 0.07,
            marginLeft: width * 0.07,
            marginRight: width * 0.07,
            marginBottom: height * 0.03
        },
        containeri: {
            position: 'relative',
            flexDirection: 'column',
            marginTop: height * 0.01,
            marginLeft: width * 0.2,
            marginRight: width * 0.2,
            marginBottom: height * .01,
            width: width * .3,
            height: height * .3,
            
        }
    });

    const card = StyleSheet.create({
        title: {
            fontSize: 15,
            fontWeight: 'bold',
            paddingBottom: height * .05
        },
        body: {
            fontSize: 10
        },
        container: {
            borderTopWidth: 2,
            padding: 5,
            borderColor: 'black'
        }
    });

    const header = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: height * 0.02
        },
        right: {
            marginLeft: 'auto',
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
            paddingTop: height * 0.02,
            paddingBottom: height * 0.02,
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