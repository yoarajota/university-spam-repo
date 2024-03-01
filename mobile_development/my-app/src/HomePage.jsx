import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Context from './ContextProvider';
function HomePage() {
    const user = useContext(Context)
    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    );
}
export default HomePage;
