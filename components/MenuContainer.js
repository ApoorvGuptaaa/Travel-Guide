  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { View, Text, TouchableOpacity, Image } from "react-native";
  import ItemScreen from "../screens/ItemScreen";

  const MenuContainer = ({ title, imageSrc, type, setType, navigate }) => {
    const navigation = useNavigation(); // Add this line to get the navigation object

    const handlePress = () => {
      try {
        setType(title.toLowerCase());
        navigation.navigate(navigate);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View>
          <View
            style={{
              width: 100,
              height: 100,
              padding: 10,
              borderRadius: 50,
              backgroundColor: type === title.toLowerCase() ? "#E0E0E0" : "transparent",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Image source={imageSrc} style={{ width: "100%", height: "100%", borderRadius: 50 }} />
          </View>
          <Text style={{ color: "#00BCC9", fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 8 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  export default MenuContainer;
