import React, { useState } from "react";
import mockData from "../components/mockData";
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

const Discover = () => {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);

  const [mainData, setMainData] = useState(mockData);

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 8 }}>
        <View>
          <Text style={{ fontSize: 40, color: "#0B646B", fontWeight: "bold" }}>Discover</Text>
          <Text style={{ color: "#527283", fontSize: 36 }}>the beauty today</Text>
        </View>
        <View style={{ width: 12, height: 12, backgroundColor: "gray", borderRadius: 6, alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <Image source={Avatar} style={{ width: "100%", height: "100%", borderRadius: 6, resizeMode: "cover" }} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", marginHorizontal: 4, borderRadius: 20, paddingVertical: 1, paddingHorizontal: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, marginTop: 4 }}>
      </View>
      {isLoading ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 8, marginTop: 8 }}>
            <MenuContainer key={"hotels"} title="Hotels" imageSrc={{uri:"https://imgs.search.brave.com/4WfHzp01FUImcRj3KLqE6MCrwk2tv_zaB8UudIgAgnc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NTU1ODc3MzQ5NTUt/MDgxYjIyMDc0ODgy/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGFH/OTBaV3g4Wlc1OE1I/eDhNSHg4ZkRBPQ"}} type={type} setType={setType} navigate="Hotels" />
            <MenuContainer key={"attractions"} title="Attractions" imageSrc={{uri:"https://imgs.search.brave.com/YAGfNkfZntjBGfNWTTb7wY5R39KIO7_izQGZhjk2J3Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIudGhyaWxsb3Bo/aWxpYS5jb20vaW1h/Z2VzL3Bob3Rvcy8w/MDAvMDEzLzU5OC9v/cmlnaW5hbC8xNTcz/NzMwMDc5X2NvdmVy/LmpwZz9ncmF2aXR5/PWNlbnRlciZ3aWR0/aD03NTImaGVpZ2h0/PTQ1MCZjcm9wPWZp/bGwmcXVhbGl0eT1h/dXRvJmZldGNoX2Zv/cm1hdD1hdXRvJmZs/YWdzPXN0cmlwX3By/b2ZpbGUmZm9ybWF0/PWpwZyZzaWduX3Vy/bD10cnVl"}} type={type} setType={setType} navigate="Attractions"/>
            <MenuContainer key={"restaurants"} title="Restaurants" imageSrc={{uri:"https://imgs.search.brave.com/ozIS2h5DoGh-VrCKPwQvXu3Z6mJzn8fh5_FijzBqGc4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM0LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDcwNjQvMzE1L2kv/NjAwL2RlcG9zaXRw/aG90b3NfMzE1Mzg2/NS1zdG9jay1waG90/by10YWJsZS1zZXJ2/ZWQtaW4tdGhlLXJl/c3RhdXJhbnQuanBn"}} type={type} setType={setType} navigate="Restaurants"/>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, marginTop: 8 }}>
              <Text style={{ color: "#2C7379", fontSize: 28, fontWeight: "bold" }}>Top Tips</Text>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", spaceX: 2 }}>
                <Text style={{ color: "#A0C4C7", fontSize: 20, fontWeight: "bold" }}>Explore</Text>
                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 4, marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              {mainData?.length > 0 ? (
                mainData.map((data, i) => (
                  <ItemCarDontainer
                    key={i}
                    imageSrc={data?.photo?.images?.medium?.url || "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"}
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                ))
              ) : (
                <View style={{ width: "100%", height: 400, alignItems: "center", justifyContent: "space-y-8" }}>
                  <Image source={NotFound} style={{ width: 32, height: 32, resizeMode: "cover" }} />
                  <Text style={{ fontSize: 20, color: "#428288", fontWeight: "bold" }}>Oops... No Data Found</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
