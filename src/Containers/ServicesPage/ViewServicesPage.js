import React, { useRef } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import ProfilePanel from '../../Components/ProfilePanel/ProfilePanel';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import CreativePostDetail from '../../Components/PostPanel/CreativePostDetail';
import { DarkColors } from '../../Constants/Colors';
import ButtonBack from '../../Assets/buttons/ButtonBack';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ServicesCard from '../../Components/ServicesPanel/ServicesCard';
import { Input } from '@ui-kitten/components';

const ViewServicesPage = (props) => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    return (
      <View
        style={{
          backgroundColor: DarkColors["sub-primary"],
          padding: 16,
          height: 600
        }}
      >
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 36
            }}
          >
            Make Offer
          </Text>
          <Text style={{
            marginTop: 15,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Message
          </Text>
          <Input
            multiline={true}
            textStyle={{ minHeight: 100 }}
            style={{
              backgroundColor: DarkColors["sub-tertiary"],
              borderColor: DarkColors["sub-tertiary"]
            }}
            placeholder="Insert description here..."
          />
          <Text style={{
            marginTop: 30,
            marginBottom: 8,
            fontFamily: 'Regular',
            fontSize: 18,
            color: DarkColors["text-secondary"]
          }}>
            Budget
          </Text>
          <Input style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"]
          }}
            placeholder="Insert budget here..."
          />
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              borderRadius: 12
            }}
            onPress={() => sheetRef.current.snapTo(2)}
          >
            <Text style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 16,
              padding: 8
            }}>
              Post Offer
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  };

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })

    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: DarkColors.background
        }}
      >
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          callbackNode={fall}
          snapPoints={[600, 500, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{paddingHorizontal: 30, paddingTop: 50}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <ButtonBack/>
          </TouchableOpacity>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42,
              marginTop: 50
            }}
          >
            Services
          </Text>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              borderRadius: 12
            }}
            onPress={() => sheetRef.current.snapTo(1)}
          >
            <Text style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 16,
              padding: 8
            }}>
              Make Offer
            </Text>
          </TouchableOpacity>
          <View style={{height: 100}}></View>
        </ScrollView>
        {renderShadow()}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  layout: {
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  }
});

export default ViewServicesPage;