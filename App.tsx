import { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

const App: React.FC = () => {
    const [sender, setSender] = useState('');
    const [validSender, setValidSender] = useState(false);
    const textInputRef = useRef<TextInput>(null);

    const handleInput = (text: string) => {
        setSender(text);
    };

    const handleSubmit = () => {
        textInputRef.current?.focus();

        if (sender.length == 0) return;

        setValidSender(true);
    };
    return (
        <ImageBackground
            source={require('./assets/whatsapp.png')}
            style={styles.container}
        >
            <View style={styles.topBar}>
                <Text style={{ color: '#fff', fontSize: 20 }}>🫵🏻🦄</Text>
            </View>
            {!validSender && (
                <View style={{ ...styles.main, justifyContent: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 40, alignSelf: 'flex-start' }}>
                            Enter Your Name
                        </Text>
                    </View>
                    <View style={styles.enterUser}>
                        <TextInput
                            ref={textInputRef}
                            style={styles.textInput}
                            onChangeText={handleInput}
                            value={sender}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text>
                                <Icon name="ios-enter" size={20} color="#fff" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {validSender && (
                <View style={styles.main}>
                    <MessageList sender={sender} />
                    <MessageForm sender={sender} />
                </View>
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    topBar: {
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: '#4CA587',
        position: 'absolute'
    },
    main: {
        width: '100%',
        height: '100%',
        paddingTop: 100,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    enterUser: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        width: '80%',
        borderRadius: 100,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    button: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'gray',
        borderRadius: 100,
        textAlign: 'center',
        backgroundColor: '#4CA587',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
});

export default App;
