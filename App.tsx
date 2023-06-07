import {  StyleSheet, View } from 'react-native';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <MessageList />
            <MessageForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
