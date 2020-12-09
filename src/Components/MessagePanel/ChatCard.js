import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { DarkColors } from '../../Constants/Colors';

const ChatCard = (props) => {
  let [fontsLoaded] = useFonts(Fonts);
  const {name, lastMessage} = props;

  return fontsLoaded ? (
    <View style={{paddingLeft: 6, paddingRight: 0, paddingTop: 15}}>
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
              {name.charAt(0)}
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text
                style={{
                  color: DarkColors["text-primary"],
                  fontFamily: 'Bold',
                  fontSize: 16
                }}
              >
                {name}
              </Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>
              <View style={{
                paddingHorizontal: 8,
                paddingBottom: 4,
                paddingTop: 4,
                borderRadius: 12
              }}>
                <Text
                  style={{
                    color: DarkColors["text-primary"],
                    fontFamily: 'Regular',
                    fontSize: 10
                  }}
                >
                  4.20 AM
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text
                style={{
                  color: DarkColors["text-secondary"],
                  fontFamily: 'Regular',
                  fontSize: 14
                }}
              >
                {lastMessage}
              </Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>
              <View style={{
                paddingHorizontal: 8,
                paddingBottom: 4,
                paddingTop: 4,
                backgroundColor: DarkColors.primary,
                borderRadius: 12,
                marginRight: 8,
                width: 21,
                height: 21
              }}>
                <Text
                  style={{
                    color: DarkColors["white"],
                    fontFamily: 'Bold',
                    fontSize: 10
                  }}
                >
                  1
                </Text>
              </View>
            </View>
          </View>
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