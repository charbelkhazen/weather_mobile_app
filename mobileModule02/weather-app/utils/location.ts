import * as Location from "expo-location";
import { Alert } from "react-native";

export async function getCurrentLocation(setUserLocation, setErrLog, setWaitBool) {
  const perm = await Location.requestForegroundPermissionsAsync();
  if (perm.status !== "granted") {
    Alert.alert("Location Requirement", "Enable location permissions.");
    setErrLog("Permission denied");
    return;
  }

  const gpsEnabled = await Location.hasServicesEnabledAsync();
  if (!gpsEnabled) {
    Alert.alert("Location Requirement", "Enable GPS.");
    setErrLog("GPS disabled");
    return;
  }

  setWaitBool(true);
  const loc = await Location.getCurrentPositionAsync({});
  const geo = await Location.reverseGeocodeAsync(loc.coords);
  const place = geo[0];

  setWaitBool(false);
  setUserLocation(place.city || place.region || place.country);
  setErrLog("");
}
