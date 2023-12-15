import React, { useState } from "react";
import HotelData from "../components/HotelData";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MenuContainer from "../components/MenuContainer";
import ItemCarDontainer from "../components/ItemCarDontainer";
import { Avatar, NotFound } from "../assets";
import { useNavigation } from "@react-navigation/native";

const Hotels = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState(HotelData);
  
    const handleBookNow = () => {
      // Implement your booking logic here
      alert("Book Now button clicked!"); // Replace with actual booking logic
    };
  
    return (
      <SafeAreaView>
        <ScrollView>
          {isLoading ? (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <>
              {mainData?.length > 0 && (
                <View
                  style={{
                    paddingHorizontal: 4,
                    marginTop: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  {mainData.map((data, i) => (
                    <ItemCarDontainer
                      key={i}
                      imageSrc={data?.photo?.images?.medium?.url ||
                        "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"}
                      title={data?.name}
  
                      
  location={data?.location_string}                  
  data={data}
                    />                  

  
                  )
                 
                  )}
                </View>
              
              
              )}
              {mainData?.length === 0 && (
                <View
                  style={{
                    width: "100%",
                    height: 400,
                    alignItems: "center",
                    justifyContent: "space-y-8",
                  }}
                >
                  <Image
                    source={NotFound}
                    style={{ width: 32, height: 32, resizeMode: "cover" }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#428288",
                      fontWeight: "bold",
                    }}
                  >
                    Oops... No Data Found
                  </Text>
                </View>
              )}
            </>
          )}
        </ScrollView>
      
      </SafeAreaView>
    );
  };
  
  export default Hotels;