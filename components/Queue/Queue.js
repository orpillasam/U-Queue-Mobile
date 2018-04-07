import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  List,
  ListItem,
  FlatList
} from 'react-native';

class Queue extends React.Component {

  

  render() {
    return (
      <FlatList
        data={[
          { name: 'James' },
          { name: 'Alexis' },
          { name: 'Jessie' },
          { name: 'Tom' },
          { name: 'Geralt' },
          { name: 'Carey' },
          { name: 'Kim' },
          { name: 'Jessica' }
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    );
  }
}

export default Queue;
