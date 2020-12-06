import React, { useContext } from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { DarkColors } from '../../Constants/Colors';
import ButtonLogout from '../../Assets/buttons/ButtonLogout';
import { AuthContext } from '../../Helper/AuthProvider';

const ProfileSettingPage = () => {
  const { user: { name, email }, logout } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

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
        <ScrollView style={{paddingTop: 50}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OtherProfileScreen')}
            style={{marginBottom: 15}}
          >
            <View style={styles.row}>
              <View styles={styles.column}>
                <View style={{
                  backgroundColor: DarkColors.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 20,
                  marginRight: 10,
                  height: 40,
                  width: 40
                }}>
                  <Text>
                    Test
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
                  { name }
                </Text>
                <Text
                  style={{
                    color: DarkColors["text-secondary"],
                    fontFamily: 'Regular',
                    fontSize: 14
                  }}
                >
                  { email }
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 15,
                borderBottomColor: DarkColors["sub-primary"],
                borderBottomWidth: 1,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => logout()}
            style={{
              marginTop: 20,
              backgroundColor: DarkColors['sub-primary'],
              padding: 20,
              flexDirection: 'row'
            }}
          >
            <ButtonLogout/>
            <View style={{width: 15}}></View>
            <Text style={{
              fontSize: 16,
              fontFamily: 'Regular',
              color: DarkColors["text-primary"]
            }}>Keluar</Text>
          </TouchableOpacity>
        </ScrollView>
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

export default ProfileSettingPage;