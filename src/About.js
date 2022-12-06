import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  const pargraf =
    "I am M.Saqib Khan Freshly Graduated From KUST in BSCS. My Specialization is in Mobile application. I am Very Hardworking and I always give my 100 percent in every work ";

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>muhammad Saqib Khan</Text>
        <Text style={styles.subtitle}>I am ReactNative Developer 😃</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.img}
          source={require("../assets/appimage/rrr.jpg")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.abouttxt}>About</Text>
        <Text style={styles.aboutpeagraf}>{pargraf}</Text>
      </View>
      <Text style={styles.bottomtxt}>Follow me on Social Network</Text>
      <View style={styles.menubottom}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/saqibkhanu/")
          }
        >
          <Image
            style={styles.menuicon}
            resizeMode="contain"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/profile.php?id=100011469635967"
            )
          }
        >
          <Image
            style={styles.menuicon}
            resizeMode="contain"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/muhammad-saqib-khan-9329a8228"
            )
          }
        >
          <Image
            style={styles.menuicon}
            resizeMode="contain"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    display: "flex",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#7d7d7d",
    textAlign: "left",
    fontSize: 15,
  },
  imgcontainer: {
    marginVertical: 50,
    alignSelf: "center",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  body: {
    backgroundColor: "lightblue",
    marginTop: 20,
  },
  abouttxt: {
    alignSelf: "center",
    textTransform: "uppercase",
    color: "#eee",
    fontSize: 20,
  },
  aboutpeagraf: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: "#7d7d7d",
  },
  bottomtxt: {
    marginTop: 100,
    textTransform: "uppercase",
    alignSelf: "center",
    fontSize: 20,
    color: "grey",
    fontWeight: "bold",
  },
  menubottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  menuicon: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
