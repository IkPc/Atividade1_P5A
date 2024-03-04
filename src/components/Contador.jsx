import React, { useState } from 'react';
import { View, Text, Button } from 'react-native-web';

const Contador = () => {
    const [state, setState] = useState(0);

    return (
        <View>
            <Text>Primeira Atividade</Text>
            <Text>Current state: {state}</Text>
            <Button
                onPress={() => setState(state + 1)}
                title="Incrementar"
            />
            <Button
                onPress={() => setState(state - 1)}
                title="Decrementar"
            />
        </View>
    );
}

export default Contador;
