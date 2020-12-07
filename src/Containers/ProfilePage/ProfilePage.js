import React, { useRef, useContext, useState } from 'react';
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
import IconSetting from '../../Assets/icons/IconSetting';
import { AuthContext } from '../../Helper/AuthProvider';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    if (!selectedPost) return;
    const { dataPost, dataImage } = selectedPost;
    const {title, topics, like, desc, userId, userName} = dataPost;
    return (
      <View
        style={{
          backgroundColor: DarkColors["background"],
          padding: 16,
          height: 700
        }}
      >
        <CreativePostDetail
          role='creative'
          title={title}
          description={desc}
          authorId={userId}
          authorName={userName}
          image={dataImage}
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
          snapPoints={[700, 600, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{paddingHorizontal: 20, paddingTop: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileSettingScreen')}>
              <IconSetting/>
            </TouchableOpacity>
          </View>
          <ProfilePanel
            user={user}
            isSelf
            handleClick={(post) => {
              setSelectedPost(post);
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

export default ProfilePage;