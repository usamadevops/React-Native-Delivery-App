import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [isNearby, setNearby] = useState(false);
  const [isNew, setNew] = useState(false)
  const [isDelivered,SetDelivered]=useState(false)
  return (
    <View style={styles.container}>
    
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isNearby}
          onValueChange={setNearby}
          color={isNearby ? '#1ff0EB' : undefined}
        />
        <Text style={styles.paragraph}>Nearby</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isNew}
          onValueChange={setNew}
          color={isNew ? '#1ff0EB' : undefined}
        />
        <Text style={styles.paragraph}>Old</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isDelivered}
          onValueChange={SetDelivered}
          color={isDelivered ? '#1ff0EB' : undefined}
        />
        <Text style={styles.paragraph}>Delivered</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row', height: 70, justifyContent: "center", width: ("100%"), backgroundColor:"#14567a"
                , top: 24
  },
  section: {
      flexDirection: "row", justifyContent: "center", alignItems: "center" 
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});