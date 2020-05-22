import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "ios-cloud-outline",
    gradient: ["#304352", "#d7d2cc"],
    title: "Haze",
    subtitle: "Watch out traffic accident",
  },
  Thunderstorm: {
    iconName: "ios-thunderstorm",
    gradient: ["#5c258d", "#4389a2"],
    title: "Thunderstorm",
    subtitle: "Stay in Home",
  },
  Drizzle: {
    iconName: "md-rainy",
    gradient: ["#134e5e", "#71b280"],
    title: "Drizzle",
    subtitle: "Don't forget to taking Umbrella",
  },
  Rain: {
    iconName: "ios-rainy",
    gradient: ["#485563", "#29323c"],
    title: "Rainy",
    subtitle: "Don't forget to taking your Umbrella",
  },
  Snow: {
    iconName: "md-snow",
    gradient: ["#7474bf", "#348ac7"],
    title: "Snow",
    subtitle: "I wish a White Christmas",
  },
  Atmosphere: {
    iconName: "ios-partly-sunny",
    gradient: ["#485563", "#29323c"],
    title: "Sunny",
    subtitle: "Go outside",
  },
  Clear: {
    iconName: "md-sunny",
    gradient: ["#ff4e50", "#f9d423"],
    title: "Sunny",
    subtitle: "go and play outside",
  },
  Clouds: {
    iconName: "ios-cloudy",
    gradient: ["#085078", "#85d8ce"],
    title: "Clouds",
    subtitle: "Not Bad But Not Good",
  },
  Mist: {
    iconName: "ios-partly-sunny",
    gradient: ["#000000", "#e74c3c"],
    title: "Foggy",
    subtitle: "Watch out for you to drive",
  },
  Dust: {
    iconName: "ios-partly-sunny",
    gradient: ["#000000", "#e74c3c"],
    title: "Dust",
    subtitle: "Dont't forget to taking your mask",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <Text>
          <Ionicons
            size={96}
            name={weatherOptions[condition].iconName}
            color="white"
          />
        </Text>

        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
