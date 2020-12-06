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
import { Image } from 'react-native';

const ServicesCard = (props) => {
  const { edit, handleClick, serviceName } = props;
  let [fontsLoaded] = useFonts(Fonts);

  const renderDesignImages = () => {
    return (
      <ScrollView horizontal>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_1.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_2.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_3.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_4.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_5.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/design_6.jpg')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
      </ScrollView>
    )
  }

  const renderPhotoImages = () => {
    return (
      <ScrollView horizontal>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/photo_1.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/photo_2.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/photo_3.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/photo_4.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/photo_5.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
      </ScrollView>
    )
  }

  const renderVideoImages = () => {
    return (
      <ScrollView horizontal>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/video_1.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/video_2.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/video_3.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
        <View style={{marginRight: 20}}>
          <Image
            source={require('../../Assets/images/video_4.png')}
            style={{
              marginTop: 20,
              width: 175,
              height: 220,
              borderRadius: 25,
              backgroundColor: DarkColors["sub-secondary"],
            }}
          />
        </View>
      </ScrollView>
    )
  }

  const renderServiceCardImages = () => {
    const services = {
      video: renderVideoImages(),
      photo: renderPhotoImages(),
      design: renderDesignImages()
    }
    return services[serviceName]
  }

  const serviceTitle = {
    video: 'Video Iklan Produk',
    photo: 'Foto Produk',
    design: 'Desain Iklan'
  }

  const serviceDetail = {
    video: 'Saya membuat video produk untuk kebutuhan anda. Cukup sediakan konsep dan produk anda, dan saya akan buatkan video yang mampu menarik lebih banyak pengguna untuk menggunakan produk kalian',
    photo: 'Saya membuat foto produk untuk kebutuhan anda. Cukup sediakan konsep dan produk anda, dan saya akan buatkan foto yang mampu menarik lebih banyak pengguna untuk menggunakan produk kalian',
    design: 'Saya membuat desain untuk kebutuhan anda. Cukup sediakan konsep dan produk anda, dan saya akan buatkan desain yang mampu menarik lebih banyak pengguna untuk menggunakan produk kalian'
  }

  return fontsLoaded ? (
    <View style={{marginTop: 15}}>
      <ScrollView horizontal>
        {renderServiceCardImages()}
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
              {serviceTitle[serviceName]}
            </Text>
            <Text style={{
              fontFamily: 'Regular',
              fontSize: 18,
              color: DarkColors["text-primary"],
              marginTop: 10
            }}>
              Rp.500.000 - Rp.2.000.000
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
        {serviceDetail[serviceName]}
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