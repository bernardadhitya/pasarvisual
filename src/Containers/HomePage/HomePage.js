import React, { useEffect, useRef, useState } from 'react';
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
import { getAllDMPost } from '../../../firebase';
import { TouchableOpacity } from 'react-native';


const HomePage = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [trigger, setTrigger] = useState(0);
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const viewProfile = () => {
    sheetRef.current.snapTo(2);
    navigation.navigate('OtherProfileScreen');
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAllPosts = await getAllDMPost();
      console.log(fetchedAllPosts);
      setPosts(fetchedAllPosts);
    }
    fetchData();
  }, [trigger]);

  const renderHomePosts = () => {
    return posts.map(post => {
      const {dataImage, dataPost} = post;
      const {title, topics, like, desc} = dataPost;
      return (
        <HomeCard
          role='creative'
          image={dataImage}
          handleClick={() => {
            setSelectedPost({image: dataImage, ...dataPost});
            sheetRef.current.snapTo(1)
          }}
          title={title}
          description={desc}
        />
      )
    })
  }

  const renderContent = () => {
    if (!selectedPost) return;
    console.log('selected post --->', selectedPost);
    const {title, desc, topics, image} = selectedPost;
    return (
      <View
        style={{
          backgroundColor: DarkColors["sub-primary"],
          padding: 16,
          height: 700
        }}
      >
        <CreativePostDetail
          role='creative'
          handleClick={viewProfile}
          title={title}
          description={desc}
          topics={topics}
          image={image}
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
          <TouchableOpacity
            onPress={() => setTrigger(trigger + 1)}
          >
            <Text
              style={{
                color: DarkColors["text-primary"],
                fontFamily: 'Bold',
                fontSize: 42
              }}
            >
              Beranda
            </Text>
          </TouchableOpacity>
          { renderHomePosts() }
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