import React, { useEffect, useRef, useState } from 'react';
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
import { getUserById } from '../../../firebase';

const OthersProfilePage = (props) => {
  const { userId, userName } = props.route.params;
  const [selectedPost, setSelectedPost] = useState(null);
  const otherUser = {
    userId, name: userName
  }
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    if (!selectedPost) return;
    const {dataImage, dataPost} = selectedPost;
    const {desc, title, topics, userName, userId} = dataPost;
    //const { role, handleClick, title, description, topics, image, authorName }
    return (
      <View
        style={{
          backgroundColor: DarkColors["background"],
          padding: 16,
          height: 500
        }}
      >
        <CreativePostDetail
          role='creative'
          title={title}
          description={desc}
          topics={topics}
          image={dataImage}
          authorName={userName}
        />
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
          snapPoints={[500, 400, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <ButtonBack/>
          </TouchableOpacity>
          <ProfilePanel
            user={otherUser}
            handleClick={(post) => {
              setSelectedPost(post)
              sheetRef.current.snapTo(1)
            }}
          />
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


export default OthersProfilePage;