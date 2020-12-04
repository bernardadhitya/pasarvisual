import React, { useRef } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import HomeCard from '../../Components/HomePanel/HomeCard';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import CreativePostDetail from '../../Components/PostPanel/CreativePostDetail';
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const viewProfile = () => {
    sheetRef.current.snapTo(2);
    navigation.navigate('OtherProfileScreen');
  }

  const renderContent = () => {
    return (
      <View
        style={{
          backgroundColor: DarkColors["sub-primary"],
          padding: 16,
          height: 700
        }}
      >
        <CreativePostDetail role='creative' handleClick={viewProfile}/>
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
          snapPoints={[700, 600, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <Text
            style={{
              color: DarkColors["text-primary"],
              fontFamily: 'Bold',
              fontSize: 42
            }}
          >
            Feeds
          </Text>
          <HomeCard
            role='creative'
            image='Sample image'
            handleClick={() => sheetRef.current.snapTo(1)}
            title='Weekly progress'
            description='Weekly progress on dieting'
          />
          <HomeCard
            role='business'
            handleClick={() => sheetRef.current.snapTo(1)}
            title='We are looking for talents'
            description='We’re interested in your ideas and would be glad to build something bigger out of it. Share your ideas about features/design and we’ll bring them on to our full case of this product design.'
          />
          <HomeCard
            role='creative'
            image='Sample image'
            handleClick={() => sheetRef.current.snapTo(1)}
            title='Weekly progress'
            description='Weekly progress on dieting'
          />
          <HomeCard
            role='business'
            handleClick={() => sheetRef.current.snapTo(1)}
            title='We are looking for talents'
            description='We’re interested in your ideas and would be glad to build something bigger out of it. Share your ideas about features/design and we’ll bring them on to our full case of this product design.'
          />
          <HomeCard
            role='business'
            handleClick={() => sheetRef.current.snapTo(1)}
            title='We are looking for talents'
            description='We’re interested in your ideas and would be glad to build something bigger out of it. Share your ideas about features/design and we’ll bring them on to our full case of this product design.'
          />
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

export default HomePage;