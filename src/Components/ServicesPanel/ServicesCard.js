import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import ShowcaseCard from '../ShowcasePanel/ShowcaseCard';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import ButtonEdit from '../../Assets/buttons/ButtonEdit';
import ButtonDelete from '../../Assets/buttons/ButtonDelete';
import { TouchableOpacity } from 'react-native';

const ServicesCard = (props) => {
  const { edit, handleClick } = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{marginTop: 15}}>
      <ScrollView horizontal>
        <View style={{marginRight: 20}}>
          <ShowcaseCard/>
        </View>
        <View style={{marginRight: 20}}>
          <ShowcaseCard/>
        </View>
        <View style={{marginRight: 20}}>
          <ShowcaseCard/>
        </View>
        <View style={{marginRight: 20}}>
          <ShowcaseCard/>
        </View>
      </ScrollView>
      <View style={{
        marginTop: 15
      }}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={{
              fontFamily: 'Regular',
              fontSize: 18,
              color: DarkColors["text-secondary"]
            }}>
              Foto Produk
            </Text>
            <Text style={{
              fontFamily: 'Regular',
              fontSize: 18,
              color: DarkColors["text-primary"],
              marginTop: 10
            }}>
              $100-$200
            </Text>
          </View>
          {edit ? <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
            <TouchableOpacity
              onPress={() => handleClick()}
            >
              <ButtonEdit/>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity>
              <ButtonDelete/>
            </TouchableOpacity>
          </View> : null}
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{
          fontFamily: 'Regular',
          fontSize: 16,
          color: DarkColors["text-secondary"]
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
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

export default ServicesCard