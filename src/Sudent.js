import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Sudent = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const apidata = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const actualData = await apidata.json();
      setData(actualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const StudentData = (item) => (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.imgstyle}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
      </View>
      <View>
        <View style={styles.biocontainer}>
          <Text style={styles.biotxt}>Bio-Data</Text>
          <Text style={styles.idnumber}>
            {item.id < 10 ? `#0${item.id}` : `${item.id}`}
          </Text>
        </View>
        <View style={styles.namecontainer}>
          <Text style={styles.myname}>name: {item.name}</Text>
          <Text style={styles.myname}>Email: {item.email}</Text>
          <Text style={styles.myname}>Mobile NO: {item.mobile}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.header}>List of Student</Text>
      <FlatList
        keyExtractor={(key) => key.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => StudentData(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 20,
    color: "#7d7d7d",
  },
  imgstyle: {
    width: "100%",
    height: 180,
  },
  imgcontainer: {
    padding: 5,
  },
  container: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    margin: 30,
  },
  biocontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  biotxt: {
    fontSize: 20,
    color: "#fff",
    paddingLeft: 5,
  },
  idnumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
    paddingRight: 5,
  },
  namecontainer: {
    backgroundColor: "#353535",
    padding: 20,
  },
  myname: {
    color: "#fff",
    alignSelf: "flex-start",
    textTransform: "capitalize",
  },
});

export default Sudent;
