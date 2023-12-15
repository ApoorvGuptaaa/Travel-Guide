import React, { useLayoutEffect,useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  const [page,setpage]=useState(true);
  const onBookHandler=()=>{
    setpage(false);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" ,marginTop:30}}>
  { page &&   <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 10 }}>
       
        <View style={{ backgroundColor: "#fff", elevation: 5, borderRadius: 12, marginBottom: 16, overflow: "hidden" }}>
          <Image
            source={{
              uri: data?.photo?.images?.medium?.url
                ? data?.photo?.images?.medium?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            style={{ width: "100%", height: 350, borderRadius: 12 }}
          />

          <View style={{ position: "absolute", flexDirection: "row", top: 16, justifyContent: "space-between", paddingHorizontal: 16, width: "100%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Discover")} style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", elevation: 3 }}>
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: "#06B2BE", elevation: 3 }}>
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={{ position: "absolute", flexDirection: "row", bottom: 16, justifyContent: "space-between", paddingHorizontal: 16, width: "100%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>{data?.price_level}</Text>
              <Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff", marginLeft: 4 }}>{data?.price}</Text>
            </View>

            <View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, backgroundColor: "#009688", elevation: 3 }}>
              <Text style={{ color: "#fff" }}>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{ color: "#1E4072", fontSize: 28, fontWeight: "bold" }}>{data?.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
            <FontAwesome name="map-marker" size={20} color="#6D7E92" />
            <Text style={{ color: "#6D7E92", fontSize: 16, fontWeight: "bold", marginLeft: 4 }}>{data?.location_string}</Text>
          </View>
        </View>

        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          {data?.rating && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#F07777", alignItems: "center", justifyContent: "center", elevation: 3 }}>
                <FontAwesome name="star" size={20} color="#D58574" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: "#515151", fontSize: 16 }}>{data?.rating}</Text>
                <Text style={{ color: "#515151", fontSize: 12 }}>Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#F07777", alignItems: "center", justifyContent: "center", elevation: 3 }}>
                <MaterialIcons name="attach-money" size={20} color="black" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: "#515151", fontSize: 16 }}>{data?.price_level}</Text>
                <Text style={{ color: "#515151", fontSize: 12 }}>Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#F07777", alignItems: "center", justifyContent: "center", elevation: 3 }}>
                <FontAwesome5 name="map-signs" size={20} color="black" />
              </View>
              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: "#515151", fontSize: 16, textTransform: "capitalize" }}>{data?.bearing}</Text>
                <Text style={{ color: "#515151", fontSize: 12 }}>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <View style={{ marginTop: 12, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1E4072" }}>
              Description
            </Text>
            <Text style={{ marginTop: 4, fontSize: 16, color: "#515151" }}>
              {data?.description}
            </Text>
          </View>
        )}

        {data?.cuisine && (
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", marginTop: 12 }}>
            {data?.cuisine.map((n, index) => (
              <TouchableOpacity
                key={index}
                style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, backgroundColor: "#009688", elevation: 3, marginBottom: 8 }}
              >
                <Text style={{ color: "#fff" }}>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        { data?.price_level && <View style={{
          padding: 10,
          width:400,  
          height:50,
          backgroundColor: 'orange',
          borderRadius: 5,
          marginTop: 16, // Add marginTop to ensure it's not hidden
          alignItems: "center",
          justifyContent:"center", // Align to the center
        }}
        onPress={onBookHandler}>
          <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize:20,
          }}>Book Now</Text>
          </View>}


      </ScrollView>}
      {!page && <View>
      <Text  style={{
                      fontSize: 20,
                      color: "#428288",
                      fontWeight: "bold",
                    }}>Please Wait...</Text></View>}
    </SafeAreaView>

  );
};

export default ItemScreen;
