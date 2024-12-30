import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import TabBar from "../components/TabBar";

const items = [
  { id: "1", title: "Benefits of drinking water",
    description: "Drinking water has numerous benefits. Water is crucial for many bodily functions, such as lubricating the joints, delivering oxygen throughout the body, preventing kidney damage, and more." },
  
  { id: "2", title: "Drinking Liquids with Meals?",
    description: "Some claim that drinking beverages with meals is bad for your digestion. Naturally, you may wonder if a simple glass of water with your meal could have negative effects — or if that’s just another myth." },

  { id: "3", title: "How Liquid Are You?",
    description: "In 1964 I got my first job as a pharmacist and, soon after, secured a residential accommodation in Surulere area of Lagos Mainland. I lived there for a year before moving out. One thing that makes me to remember that period was my neighbour, a young economics graduate, Jim Olisakwe, from the University College Ibadan (now University of Ibadan).  As a company pharmacist, I started well with a good salary and 404 Peugeot car. On the other hand, Jim was living from hand to mouth but he was always cheerful and pleasant, and fond of telling stories. However, usually towards the end of the month his mood changed. On many occasions, he would come to me and ask,” Pharmacist, how liquid are you? I just need a few shillings to keep me going till next week.”  He asked how liquid I was virtually every month. Of course, I obliged him, as he never failed to return the loan as soon as he got his salary." },
    
  { id: "4", title: "Most popular beverages?",
    description: "There are many different types of beverages around the world. Every culture and region across the globe has its unique approach. Nevertheless, there are 10 specific graph types that statistically stand out as the most widely used worldwide. Let’s delve into the Top 10 most popular drink in the world in the following article." },
 
  { id: "5", title: "100 Amazing Water Facts",
    description: "Water is the most important resource in the world. Here are 100 amazing facts about water that you may not know." },

  { id: "6", title: "Most and least vicious liquids?", 
    description: "‘Most viscous’ would be somewhat up to debate, as there are various materials that exhibit slow pastic deformation (flow) without really being considered ‘liquids’ in the usual sense.s" },
];

const backgroundColors = [
  '#FBC2EB',
  '#B5FFFC',
  '#FF9A8B',
  '#A6C1EE',
  '#A18CD1',
  '#FFDEE9',
];

const screenHeight = Dimensions.get("window").height;
const tabBarHeight = 60; // Adjust this value based on your TabBar height

export default function Article() {
  const renderItem = ({ item, index }: { item: { id: string; title: string; description: string }, index: number }) => {
    return (
      <View
        style={[styles.itemContainer, { backgroundColor: backgroundColors[index % backgroundColors.length] }]} // Apply background color based on index
      >
        <View style={styles.textContainer}>
          <Text
            style={styles.itemTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
          <Text style={styles.itemDescription} numberOfLines={3} ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
      <>
        <View style={[styles.container, { height: screenHeight - tabBarHeight }]}>
          <Text style={styles.header}>Article</Text>
          <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={1}
              contentContainerStyle={[styles.list, { paddingBottom: tabBarHeight }]} // Add paddingBottom here
          />
        </View>
        <TabBar />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
  },
  header: {
    fontSize: 30,
    fontFamily: "Cera_Black",
    textAlign: "left",
    marginLeft: 28,
    marginTop: 10,
  },
  list: {
    paddingHorizontal: "5%",
  },
  itemContainer: {
    flexDirection: "row",
    flex: 1,
    marginVertical: "5%",
    borderRadius: 18,
    overflow: "hidden",
  },
  itemImage: {
    width: 130,
    height: 130,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  itemTitle: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 2,
    paddingHorizontal: 5,
    fontFamily: "Cera_Bold",
  },
  itemDescription: {
    fontSize: 13,
    paddingHorizontal: 5,
    fontFamily: "Cera_Light",
  },
});