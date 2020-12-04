import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';

const CreativePostDetail = (props) => {
  let [fontsLoaded] = useFonts(Fonts);
  const { role, handleClick } = props;

  const renderButton = () => {
    return (
    <TouchableOpacity 
      onPress={() => handleClick()}
      style={{
        backgroundColor: DarkColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 12
      }}
    >
      <Text style={{
        color: DarkColors["text-primary"],
        fontFamily: 'Bold',
        fontSize: 16,
        padding: 8
      }}>
        { role === 'creative' ? 'See Profile' : 'Message'}
      </Text>
    </TouchableOpacity>
    )
  }

  return fontsLoaded ? (
    <ScrollView style={{
      paddingHorizontal: 10
    }}>
      <Text style={{
        paddingTop: 15,
        fontFamily: 'Bold',
        fontSize: 36,
        color: DarkColors["text-primary"]
      }}>
        Test
      </Text>
      <View style={{
        height: 200,
        backgroundColor: DarkColors["secondary"],
        marginTop: 15,
        borderRadius: 25
      }}>
      </View>
      <Text style={{
        marginTop: 15,
        fontFamily: 'Regular',
        fontSize: 14,
        color: DarkColors["text-secondary"]
      }}>
        Description
      </Text>
      <Text style={{
        marginTop: 15,
        fontFamily: 'Regular',
        fontSize: 14,
        color: DarkColors["text-primary"],
        marginBottom: 15
      }}>
        We’re interested in your ideas and would be glad to build something bigger out of it. Share your ideas about features/design and we’ll bring them on to our full case of this product design.
      </Text>
      <TouchableOpacity style={{marginBottom: 15}}>
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
              20 April at 4:20 PM
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      { renderButton() }
    </ScrollView>
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

export default CreativePostDetail