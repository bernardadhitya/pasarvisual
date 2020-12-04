import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { DarkColors } from '../../Constants/Colors';

const ChatCard = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{paddingHorizontal: 10, paddingTop: 15}}>
      <View style={styles.row}>
        <View styles={styles.column}>
          <View style={{
            backgroundColor: DarkColors.red,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 10,
            height: 40,
            width: 40
          }}>
            <Text>
              Test
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 16
            }}
          >
            Name
          </Text>
          <Text
            style={{
              color: DarkColors["text-secondary"],
              fontFamily: 'Regular',
              fontSize: 14
            }}
          >
            Lorem Ipsum dolor amet
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          borderBottomColor: DarkColors["sub-primary"],
          borderBottomWidth: 1,
        }}
      />
    </View>
  ) : <AppLoading/>;
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default ChatCard