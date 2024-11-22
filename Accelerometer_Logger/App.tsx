import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Accelerometer, AccelerometerMeasurement } from "expo-sensors";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

import AudioFiles from "./Audio";
import genders from './genders';

let start = Date.now();



type AccelerometerData = AccelerometerMeasurement & { diff: number };

const size = 3000;
let spot = 0;
let hist: AccelerometerData[] = zero_hist();


function zero_hist() {
    return [...Array<AccelerometerData>(size)].fill({x: 0, y: 0, z: 0, timestamp: 0, diff: 0});
}


type Out_Data = {
  file_name: string;
  gender: string;
  history: AccelerometerData[];
};

export default function App() {
  const [{ x, y, z, timestamp }, setData] = useState<AccelerometerMeasurement>({
    x: 0,
    y: 0,
    z: 0,
    timestamp: 0,
  });
  // const [timediff, setTimediff] = useState<number>(0.0);
  const [sub, setSub] = useState<any>(null);
  // const [hist, setHist] = useState<AccelerometerData[]>([]);

  const updateinterval = 0; // ms

  Accelerometer.setUpdateInterval(updateinterval);

  const onStartButtonPress = async () => {

    for (let i = 1; i <= 60; i++) {
      const gender: string = genders[i.toString().padStart(2, "0") as keyof typeof genders].gender;
      for (let k = 0; k < 10; k++) {
        for (let j = 0; j < 50; j++) {
          const padded_i = i.toString().padStart(2, "0");
          const identifier = `${k}_${padded_i}_${j}`;

          if (AudioFiles[identifier]) {
            const { sound } = await Audio.Sound.createAsync(
              AudioFiles[identifier]
            );

            await new Promise<void>((resolve) => {
              sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded && status.didJustFinish) {
                  hist = hist.filter((value => value.x != 0 && value.y != 0 && value.z != 0));
                  const out: Out_Data = {history: hist, gender: gender, file_name: identifier};
                  console.log(out);
                  onStopButtonPress();
                  resolve();
                }
              });
              setSub(Accelerometer.addListener(setData));

              sound.playAsync();
            });
          } else {
            console.warn(`Audio file not found for identifier: ${identifier}`);
          }
        }
      }
    }
  };

  const onStopButtonPress = () => {
    if (sub) {
      sub.remove();
    }
    spot = 0;
    hist = zero_hist();
  };

  // const onLogButtonPress = () => {
  // console.log(out_data);
  // }

  useEffect(() => {
    const diff = (Date.now() - start) / 1000;
    start = Date.now();
    //hist.push({ x: x, y: y, z: z, timestamp: 0, diff: diff });
    // setTimediff(diff);
    // console.log(diff, timestamp, start);
    // console.log(x, y, z, diff);
    // setHist([...hist, { x, y, z, timestamp, diff } ]);
    hist[spot] = {x: x, y: y, z: z, timestamp: 0, diff: diff};
    spot = (spot + 1) % size;
    // if (spot == 0) {
    //     console.log(hist);
    // }
  }, [x, y, z, setData]);

  return (
    <View style={styles.container}>
      <Button title="Start Collection" onPress={onStartButtonPress} />
      {/*<Text>Timediff: {timediff}s</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>*/}
      {/* <Button title="Stop" onPress={onStopButtonPress} /> */}
      {/* <Button title="Log" onPress={onLogButtonPress} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
