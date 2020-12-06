import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { DarkColors } from '../../Constants/Colors';
import { TouchableOpacity } from 'react-native';
import ButtonReject from '../../Assets/buttons/ButtonReject';
import ButtonAccept from '../../Assets/buttons/ButtonAccept';
import { getUserById } from '../../../firebase';

const OffersCard = (props) => {
  const { bidPrice, message, receiverId, senderId, senderName, status } = props;
  const [sender, setSender] = useState({});
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{paddingLeft: 6, paddingRight: 0, paddingTop: 15}}>
      <View style={styles.row}>
        <View styles={styles.column}>
          <View style={{
            backgroundColor: DarkColors.red,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 15,
            height: 40,
            width: 40
          }}>
            <Text style={{color: DarkColors["text-primary"]}}>
              {senderName.charAt(0)}
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
                { senderName }
              </Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}>
              <View style={{
                paddingHorizontal: 8,
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
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: DarkColors["text-secondary"],
                  fontFamily: 'Regular',
                  fontSize: 14
                }}
              >
                { message }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: DarkColors["text-secondary"],
                  fontFamily: 'Regular',
                  fontSize: 14
                }}
              >
                { 'Budget', bidPrice }
              </Text>
            </View>
          </View>
          <View style={{height: 15}}></View>
          <View style={styles.row}>
            <TouchableOpacity>
              <ButtonAccept/>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity>
              <ButtonReject/>
            </TouchableOpacity>
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

export default OffersCard