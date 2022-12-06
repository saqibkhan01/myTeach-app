import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Manu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.navigate("Course")}>
        <Image
          style={styles.imgheight}
          resizeMode="cover"
          source={{
            uri: "https://tse3.mm.bing.net/th?id=OIP.ug97RY8YgaLgSuzC9dpBNAAAAA&pid=Api&P=0",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Student")}>
        <Image
          style={styles.imgheight}
          resizeMode="cover"
          source={{
            uri: "https://www.iconbunny.com/icons/media/catalog/product/1/5/156.12-male-student-i-icon-iconbunny.jpg",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Image
          style={styles.imgheight}
          resizeMode="cover"
          source={{
            uri: "https://tse4.mm.bing.net/th?id=OIP.WBfbqxYpaGLAw1fokDJLTAAAAA&pid=Api&P=0",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Image
          style={styles.imgheight}
          resizeMode="cover"
          source={{
            uri: "https://openclipart.org/image/2400px/svg_to_png/211693/matt-icons_contact-add.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgheight: {
    height: 40,
    width: 40,
  },
});

export default Manu;
