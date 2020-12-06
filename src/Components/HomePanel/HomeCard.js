import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { DarkColors } from '../../Constants/Colors';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import IconHeart from '../../Assets/icons/IconHeart';
import { useNavigation } from '@react-navigation/native';

const HomeCard = (props) => {
  const { role, image, handleClick, title, description, authorId, authorName } = props;
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View
      style={{
        marginTop: 14,
        backgroundColor: DarkColors["sub-primary"],
        padding: 20,
        borderRadius: 24
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('OtherProfileScreen', {
          userId: authorId,
          userName: authorName
        })}
        style={{marginBottom: 15}}
      >
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
                {authorName ? authorName.charAt(0) : ''}
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
              {authorName}
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
      { image ?
        <TouchableOpacity
          onPress={() => handleClick()}
          style={{
            marginBottom: 15
          }}
        >
          <Image source={{ uri: image }} style={{height: 200}}/>
        </TouchableOpacity>
        : null
      }
      <View style={styles.row}>
        <View style={styles.column}>
          {role === 'creative' ? <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Semibold',
              fontSize: 18
            }}
          >
            { title }
          </Text> : null}
        </View>
        <View style={styles.column, {alignSelf: 'flex-end'}}>
          <View style={styles.row}>
            { role === 'creative' ?
              <>
                <IconHeart/>
                <View style={{width: 5}}></View>
                <Text
                  style={{
                    color: DarkColors["text-secondary"],
                    fontFamily: 'Regular',
                    fontSize: 18
                  }}
                >
                  40 likes
                </Text>
              </> : null
            }
          </View>
        </View>
      </View>
      <Text
        style={{
          color: DarkColors["text-secondary"],
          fontFamily: 'Regular',
          fontSize: 16
        }}
      >
        { description }
      </Text>
      { role === 'business' ?
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
          }}>More Details</Text>
        </TouchableOpacity>
        : null
      }
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

export default HomeCard