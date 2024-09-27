/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontSize} from '../constants/dimensions';
import { fontFamily } from '../constants/fonts';
import { iconSize } from '../constants/dimensions';
import Category from '../component/Category';
const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.headline]}>Find the Suitable Watch Now</Text>
      <View style={[styles.mainInputContainer]}>
        <View style={[styles.inputWrapper]}>
        <Image source={require('../assets/search.png')} style={[styles.logo]}/>
        <TextInput style={[styles.textInput]} 
        placeholder="Search Product"
        placeholderTextColor={colors.placeholdertext}/>
        </View>
        <View style={[styles.categoryContainer]}>
        <Image source={require('../assets/category.png')} style={[styles.logo]}/>
        </View>
      </View>
      <Category/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer:{
    flexDirection:'row',
    alignItems:"center",
    marginVertical:spacing.xl,
   
  },
  inputWrapper:{
    flex:1,
    borderWidth:1,
    flexDirection:'row',
    alignItems:"center",
    borderColor:colors.placeholdertext,
    borderRadius:44,
    paddingHorizontal:spacing.md,
  },
  logo:{
    height:iconSize.md,
    width:iconSize.md,
  },
 textInput: {
flex:1,
paddingHorizontal:spacing.md,
fontSize:fontSize.md,
fontFamily:fontFamily.Medium,
  },
  categoryContainer:{
    paddingHorizontal:spacing.sm,
  },

});
