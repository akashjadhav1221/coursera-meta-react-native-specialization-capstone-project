import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, SectionList } from 'react-native'
import React from 'react';
import colors from '../constants/colors';
import masterData from '../assets/data/master-data.json';
import { Link, useNavigation } from 'expo-router';

const FoodItems = () => {
  const navigation = useNavigation();

  const DATA = masterData.categories.map((category, index) => {
    return {
      title: category.name,
      data: category.dishes,
      index
    }
  });

  return (
    <SectionList 
    style={styles.scrollContainer} 
    sections={DATA} 
    keyExtractor={(item, index) => `${item.id + index}`} 
    renderSectionHeader={({ section: {title, index} }) => <Text style={styles.sectionHeaderStyle}>{title}</Text>}
    renderItem={({item, index}) => (
          <Link href={{
            pathname: '/(modal)/details',
            params: { id: item.id, dishName: item.name, description: item.description, photo: item.photo, price: item.price, reference_name: item.reference_name }
          }} asChild>
          <TouchableOpacity style={styles.viewContainer} key={index}>
          <View style={styles.foodCard}>
          <Text style={styles.foodTitle}>{item.name}</Text>
          <Text style={styles.foodDescription} numberOfLines={2}>{item.description}</Text>
          <Text style={styles.foodPrice}>$ {item.price}</Text>
         </View>
         <View style={styles.imgContainer}>
          <Image source={{ uri: item.photo }} 
          style={styles.foodImg}/>
         </View>
         </TouchableOpacity>
         </Link>
    )} />


    // <ScrollView style={styles.scrollContainer}>
    //   { 
    //   masterData.categories.map((category, i) => (
    //     category.dishes.map((dish, index) => (

    //       <Link href={{
    //         pathname: '/(modal)/details',
    //         params: { id: dish.id, dishName: dish.name, description: dish.description, photo: dish.photo, price: dish.price }
    //       }} asChild>
    //       <TouchableOpacity style={styles.viewContainer} key={index}>
    //       <View style={styles.foodCard}>
    //       <Text style={styles.foodTitle}>{dish.name}</Text>
    //       <Text style={styles.foodDescription} numberOfLines={2}>{dish.description}</Text>
    //       <Text style={styles.foodPrice}>$ {dish.price}</Text>
    //      </View>
    //      <View style={styles.imgContainer}>
    //       <Image source={{ uri: dish.photo }} 
    //       style={styles.foodImg}/>
    //      </View>
    //      </TouchableOpacity>
    //      </Link>
    //     ))
    //   ))
    // }
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  sectionHeaderStyle: {
    fontSize: 18,
    color: colors.primary,
    marginTop: -10,
    padding: 5,
    backgroundColor: 'white'
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 170,
    width: '100%',
    backgroundColor: colors.secondaryCream,
    padding: 5,
    borderRadius: 5,
    marginBottom: 5
  },
  imgContainer: {
    padding: 5,
    flex: 1,
    alignItems: 'flex-end',
  },
  foodCard: {
    padding: 5,
    maxWidth: '50%',
    flex: 1
  },
  foodImg: {
    height: 150,
    width: 150,
    resizeMode: 'cover'
  },
  foodTitle: {
    color: colors.secondaryOrange,
    fontSize: 24,
    fontWeight: 'bold'
  },
  foodDescription: {
    fontSize: 15,
    marginTop: 10
  },
  foodPrice: {
    fontSize: 15,
    marginTop: 10,
    color: colors.primary,
    fontWeight: 'bold'
  }
})

export default FoodItems;