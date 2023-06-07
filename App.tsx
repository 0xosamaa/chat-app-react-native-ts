import { StyleSheet, View } from 'react-native';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    height: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                }}
            >
                <MessageList />
                <MessageForm />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '100%',
    },
});

export default App;
