import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import { DarkColors } from '../../Constants/Colors';
import { TouchableOpacity } from 'react-native';
import ShowcasePanel from '../ShowcasePanel/ShowcasePanel';
import { useNavigation } from '@react-navigation/native';
import { getDmPostByUserId } from '../../../firebase';

const ProfilePanel = (props) => {
  const navigation = useNavigation();
  const { handleClick, isSelf, user } = props;
  const { userId, name } = user;
  let [fontsLoaded] = useFonts(Fonts);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await getDmPostByUserId(userId);
      console.log('fetched posts ===>', fetchedPosts);
      setPosts(fetchedPosts);
    }
    fetchData();
  }, []);

  const renderOthersOption = () => {
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 12
            }}
          >
            <Text style={{
              color: DarkColors.primary,
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingTop: 8
            }}>Ikuti</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 10}}></View>
        <View style={styles.column}>
          <TouchableOpacity 
            style={{
              backgroundColor: DarkColors.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 12
            }}
          >
            <Text style={{
              color: DarkColors.primary,
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingTop: 8
            }}>Pesan</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 10}}></View>
        <View style={styles.column}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ViewServicesScreen')}
            style={{
              backgroundColor: DarkColors.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 12
            }}
          >
            <Text style={{
              color: DarkColors.primary,
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingTop: 8
            }}>Layanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderSelfOptions = () => {
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity 
          onPress={() => navigation.navigate('EditServicesScreen')}
            style={{
              backgroundColor: DarkColors.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 12
            }}
          >
            <Text style={{
              color: DarkColors.primary,
              fontFamily: 'Bold',
              fontSize: 16,
              paddingHorizontal: 8,
            paddingTop: 8, 
            }}>Edit Layanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderOptions = () => {
    return isSelf ? renderSelfOptions() : renderOthersOption()
  }

  return fontsLoaded ? (
    <ScrollView>
      <View style={styles.row, {
        marginTop: 15,
        alignItems: 'center'
      }}>
        <View style={{
          borderRadius: 50,
          height: 100,
          width: 100,
          backgroundColor: DarkColors.red
        }}></View>
      </View>
      <View style={styles.row, {
        marginTop: 15,
        alignItems: 'center'
      }}>
        <Text style={{
          color: DarkColors["text-primary"],
          fontFamily: 'Bold',
          fontSize: 21
        }}>
          { name }
        </Text>
      </View>
      { renderOptions() }
      <View style={{ height: 10 }}></View>
      {posts ? <ShowcasePanel posts={posts} handleClick={handleClick}/> : null}
      <View style={{height: 100}}></View>
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

export default ProfilePanel