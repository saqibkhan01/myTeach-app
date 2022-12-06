import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Manu from "./Manu";

const Home = (props) => {
  const discrpation =
    "The Complete Word Study Dictionary Scripture Reference Index is the perfect companion for the Complete Word Study Dictionary";
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.headerimg}
          resizeMode="contain"
          source={require("../assets/appimage/home.jpg")}
        />
        <View style={styles.scontainer}>
          <Text style={{ textAlign: "center", color: "black", fontSize: 20 }}>
            Welcome To
          </Text>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.discrpation}>{discrpation}</Text>
        </View>
      </View>
      <View>
        <View style={styles.line}></View>
        <Manu />
        <View
          style={[
            styles.line,
            {
              marginVertical: 20,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "white",
  },
  img: {
    marginTop: 120,
  },
  headerimg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 30,
  },
  scontainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  title: {
    textTransform: "uppercase",
    color: "#7d7d7d",
    fontSize: 20,
  },
  discrpation: {
    lineHeight: 25,
    paddingVertical: 10,
    textAlign: "left",
    paddingTop: 30,
  },
  line: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
});

export default Home;
