import React, { useRef, useState } from 'react';
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
import EditServicePanel from '../../Components/ServicesPanel/EditServicePanel';
import AddServicePanel from '../../Components/ServicesPanel/AddServicePanel';
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Create Class",
    icon: require("../../Assets/icons/IconPlus.png"),
    name: "ButtonCreateClass",
    position: 1
  }
];

const EditServicesPage = (props) => {
  const [mode, setMode] = useState('edit');
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
          height: 700
        }}
      >
        {mode === 'add' ? <AddServicePanel/> : <EditServicePanel/> }
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
          <ServicesCard edit handleClick={() => {
            setMode('edit'); sheetRef.current.snapTo(1)
          }}/>
          <ServicesCard edit handleClick={() => {
            setMode('edit'); sheetRef.current.snapTo(1)
          }}/>
          <ServicesCard edit handleClick={() => {
            setMode('edit'); sheetRef.current.snapTo(1)
          }}/>
          <ServicesCard edit handleClick={() => {
            setMode('edit'); sheetRef.current.snapTo(1)
          }}/>
          <View style={{height: 100}}></View>
        </ScrollView>
        <FloatingAction
          actions={actions}
          onPressItem={() => {
            setMode('add');
            sheetRef.current.snapTo(1);
          }}
          overrideWithAction={true}
          color='#3ED598'
          shadow={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }}
        />
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

export default EditServicesPage;