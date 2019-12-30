import React from 'react';
import { KeyboardAvoidingView, Text, View, FlatList } from 'react-native';
import { GiftedChat, Message } from 'react-native-gifted-chat';

function Item({ title }) {
  return (
    <View style={{ backgroundColor: 'lightgrey', padding: 5 }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <GiftedChat
        messages={[...Array(3).keys()].map(i => {
          return {
            _id: i,
            text: 'Hello World ' + i,
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'User1',
            },
          };
        })}
        user={{
          _id: 1,
        }}
        renderMessage={(props) => {
          return (
            <View>
              <Message {... props} />
              <FlatList
                style={{ borderWidth: 1, borderColor: "black", height: 200, margin: 30 }}
                nestedScrollEnabled={true}
                data={[...Array(10).keys()].map(i => {
                  return { id: '' + i, title: 'FlatList item ' + i };
                })}
                renderItem={({ item }) => <Item title={item.title} />}
              />
            </View>
          );
        }}
        listViewProps={{
          nestedScrollEnabled: true
        }}
      />
    </KeyboardAvoidingView>
  );
}
