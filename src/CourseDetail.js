import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CourseDetail = ({ route, navigation }) => {
  const { image, title, discripation, Course1, Course2, Course3, price } =
    route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.Cardcontainer}>
        <View>
          <Image
            style={styles.Imagestyle}
            source={image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.titlestyle}>{title}</Text>
        <View>
          <Text style={styles.paragrafstyle}>{discripation}</Text>
        </View>
        <View style={styles.Coursestyle}>
          <Text style={styles.titlestyle}>{Course1}</Text>
          <Text style={styles.titlestyle}>{Course2}</Text>
          <Text style={styles.titlestyle}>{Course3}</Text>
        </View>
        <View style={styles.pricestyle}>
          <Text style={styles.pricetxt}>{price}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.backbtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backbtntext}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    marginVertical: 20,
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
  Coursestyle: {
    marginTop: 20,
  },
  pricestyle: {
    backgroundColor: "black",
    paddingVertical: 10,
    marginHorizontal: 60,
  },
  pricetxt: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  backbtn: {
    backgroundColor: "#008080",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backbtntext: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#eee",
  },
});

export default CourseDetail;
