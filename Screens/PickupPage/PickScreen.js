import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import * as Animatable from "react-native-animatable";
import color from "../../Constants/Colors/color";
import { LinearGradient } from "expo-linear-gradient";
// import { Box } from '../../data/index';
import styles from "./styles";
import { RadioButton, TouchableRipple } from "react-native-paper";
import { firestore } from "firebase";

export default function Pick({ navigation }) {
  const [value, setvalue] = useState("Nearby");
  const [items, setitems] = useState([]);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
      const time = fetchPackages();
      return (() => {
          time;
      })
  }, []);
  const fetchPackages = async () => {
    firestore()
      .collection("Package")
      .get()
      .then((data) => {
        data.docs.forEach((item) => {
          setitems([...items, item.data()]);
          console.log(items);
        });
      });
  };
  return (
    <Animatable.View animation="fadeIn" style={styles.ContainerView}>
      <LinearGradient
        start={(0, 0)}
        end={(1, 1)}
        colors={[color.Orange, color.Pink]}
        style={styles.LinearGradient}
      />
      {/* <View style={styles.CheckBoxcontainer}>
        <RadioButton.Group
          onValueChange={(value) => setvalue(value)}
          value={value}
        >
          <View style={styles.section}>
            <View style={styles.checkbox}>
              <RadioButton value="Nearby" />
              <Text style={styles.box_text}>Nearby </Text>
            </View>
            <View style={styles.checkbox}>
              <RadioButton value="Delivered" />
              <Text style={styles.box_text}>Delivered </Text>
            </View>
            <View style={styles.checkbox}>
              <RadioButton value="InRoute" />
              <Text style={styles.box_text}>InRoute </Text>
            </View>
          </View>
        </RadioButton.Group>
      </View> */}
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          marginTop: 10,
          height: '100%',
          flexDirection: "column",
        }}
        refreshControl={
          <RefreshControl
                refreshing={refreshing}
                onRefresh={() => fetchPackages() }
          />
        }
      >
        {items.map((items) => {
          return (
            <View style={styles.subcontainer}>
              <TouchableOpacity
                rippleColor="rgba(0, 0, 0, .32)"
                style={styles.ClickableContainer}
                onPress={() =>
                  navigation.navigate("Detail", {
                    ItemID: items.uid,
                    itemName: items.PackageName,
                    itemPost: items.PackageDesc,
                    itemTime: items.createddate ,
                    itemWeight: items.weight,
                    itemPick: items.CurrentLocation,
                    itemDrop: items.Dropoff,
                    itemVehicle: items.selectedVehicle,
                  })
                }
              >
                <View style={styles.imageStyle}>
                  <Image
                    style={styles.tinyLogo}
                    source={
                      items.image || require("../../data/images/package.jpg")
                    }
                  />
                </View>

                <View style={styles.Texts}>
                  <Text style={{ fontSize: 20 }}>
                    {items.PackageName || "No Package Name"}
                  </Text>

                  {items.PackageDesc.length > 21 ? (
                    <Text style={{ color: "#000" }}>
                      {" "}
                      {items.PackageDesc.substring(0, 40) + "..."}
                    </Text>
                  ) : (
                    <Text style={{ color: "#000" }}> {items.PackageDesc} </Text>
                  )}
                </View>
                <View style={styles.Time}>
                  <Text
                    style={{ fontSize: 12, textAlign: "center", color: "#000" }}
                  >
                    {items.createddate}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </Animatable.View>
  );
}
