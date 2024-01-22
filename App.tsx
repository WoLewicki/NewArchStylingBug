import * as React from 'react';
import {Button, View} from 'react-native';

export default function App() {
  const [test, setTest] = React.useState(false);

  return (
    <View style={{paddingTop: 100}}>
      <View collapsable={test}>
        <Button title="Click me" onPress={() => setTest(!test)} />
        <View style={{position: 'absolute', zIndex: -1}} />
      </View>
    </View>
  );
}
