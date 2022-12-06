import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Course from "./src/Course";
import Contact from "./src/Contact";
import About from "./src/About";
import Sudent from "./src/Sudent";
import CourseDetail from "./src/CourseDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} title="Khanu Teach" />}
          </Stack.Screen>
          <Stack.Screen
            name="Course"
            component={Course}
            options={{ headerTitleAlign: "center", headerTitle: "Courses" }}
          />
          <Stack.Screen
            name="Student"
            component={Sudent}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen name="CourseDetail" component={CourseDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
