import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const submitfun = () => {
    if ((!name, !email, !phone, !about)) {
      Alert.alert("Please fill all the field");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    //<KeyboardAvoidingView behavior="height">
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Level Up Your Knowledge</Text>
          <Text style={styles.subtitle}>
            You Can reach anytime khanu@gmail.com
          </Text>
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.labels}>Enter Your name</Text>
          <TextInput
            style={styles.inputTxt}
            placeholder="Name"
            value={name}
            onChangeText={(username) => setName(username)}
          />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.labels}>Enter Your Email</Text>
          <TextInput
            style={styles.inputTxt}
            placeholder="email@gmail.com"
            value={email}
            onChangeText={(useremail) => setEmail(useremail)}
          />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.labels}>Enter Your Mobile Number</Text>
          <TextInput
            style={styles.inputTxt}
            placeholder="12345678"
            value={phone}
            onChangeText={(usernumber) => setPhone(usernumber)}
          />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.labels}>How can we help you?</Text>
          <TextInput
            style={styles.inputTxt}
            numberOfLines={5}
            multiline={true}
            placeholder="Tell us about your self"
            value={about}
            onChangeText={(userabout) => setAbout(userabout)}
          />
        </View>
        <View style={styles.bottombox}>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "red" : undefined}
          />
          <Text style={{ paddingLeft: 5 }}>
            I have read and agreed term and condation
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => submitfun()}
          style={[
            styles.btn,
            {
              backgroundColor: agree ? "lightblue" : "grey",
            },
          ]}
          disabled={!agree}
        >
          <Text style={styles.btntxt}>Submitted</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  header: {
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    paddingTop: 10,
    marginBottom: 50,
  },
  txtcontainer: {
    paddingVertical: 20,
  },
  inputTxt: {
    borderWidth: 1,
    borderColor: "#7d7d7d",
    paddingVertical: 7,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  labels: {
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: 13,
    paddingLeft: 3,
  },
  bottombox: {
    flexDirection: "row",
  },
  btn: {
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  btntxt: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default Contact;
