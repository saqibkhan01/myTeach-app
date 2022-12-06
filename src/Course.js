import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Course = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Web Development",
      image: {
        uri: "https://tse4.mm.bing.net/th?id=OIP.Lb_Fan-mn1Rwohh1D_vOpQHaE8&pid=Api&P=0",
      },
      discripation:
        "The Complete Word Study Dictionary Scripture Reference Index is the perfect companion for the Complete Word Study Dictionary",
      Course1: "HTML",
      Course2: "CSS",
      Course3: "JavaScript",
      price: "500/-",
    },
    {
      id: "2",
      title: "programming fundamental",
      image: {
        uri: "https://www.businessinsider.in/photo/80595330/what-is-coding-a-brief-guide-to-the-facet-of-computer-programming.jpg?imgsize=208021",
      },
      discripation:
        "The Complete Word Study Dictionary Scripture Reference Index is the perfect companion for the Complete Word Study Dictionary",
      Course1: "java",
      Course2: "C++",
      Course3: "Data Structure",
      price: "600/-",
    },
    {
      id: "3",
      title: "Mobile Application",
      image: {
        uri: "https://tse4.mm.bing.net/th?id=OIP.Lb_Fan-mn1Rwohh1D_vOpQHaE8&pid=Api&P=0",
      },
      discripation:
        "The Complete Word Study Dictionary Scripture Reference Index is the perfect companion for the Complete Word Study Dictionary",
      Course1: "ReactNative",
      Course2: "Flutter",
      Course3: "Dart",
      price: "900/-",
    },
  ]);

  const ViewCard = (item) => (
    <View style={styles.container}>
      <View style={styles.Cardcontainer}>
        <View>
          <Image
            style={styles.Imagestyle}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.titlestyle}>{item.title}</Text>
        <View>
          <Text style={styles.paragrafstyle}>{item.discripation}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => navigation.navigate("CourseDetail", { item })}
          >
            <Text style={styles.btntext}>CourseDetail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(key) => key.id}
      renderItem={({ item }) => ViewCard(item)}
    />
  );
};
const styles = StyleSheet.create({
  Imagestyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  Cardcontainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    elevation: 20,
    marginVertical: 30,
    borderRadius: 5,
    textAlign: "center",
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
  },
  titlestyle: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#344055",
    fontSize: 15,
    paddingBottom: 15,
  },
  paragrafstyle: {
    color: "#7d7d7d",
    textAlign: "left",
  },
  buttonstyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#809fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 70,
    marginVertical: 30,
  },
  btntext: {
    color: "#eee",
  },
});
export default Course;
