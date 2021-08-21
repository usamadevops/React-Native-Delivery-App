import React from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import {View,StyleSheet,ActivityIndicator} from 'react-native'
export default function ChatMessages() {

  function scrollToBottomComponent() {
      return (
        <View style={styles.bottomComponentContainer}>
          <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
        </View>
      );
    }
    function renderLoading() {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#6646ee' />
        </View>
      );
    }
  function renderSend(props) {
      return (
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <IconButton icon='send-circle' size={32} color='#6646ee' />
          </View>
        </Send>
      );
    }
  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderLoading={renderLoading}
    />
  );
}
const styles = StyleSheet.create({
      sendingContainer: {
            justifyContent: 'center',
            alignItems: 'center'
          },
      bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    });