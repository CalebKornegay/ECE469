import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Accelerometer, AccelerometerMeasurement } from "expo-sensors";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

let start = Date.now();

type AccelerometerData = AccelerometerMeasurement & { diff: number };

// const size = 1000;
// let spot = 0;
let hist: AccelerometerData[];

type Out_Data = {
  file_name: string;
  gender: string;
  data: AccelerometerData[];
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
    setSub(Accelerometer.addListener(setData));

    for (let i = 0; i <= 60; ++i) {
      for (let j = 0; j < 50; ++j) {
        //const sound: Sound = new Sound(`data/0${i}/${Math.floor(j / 10)}_0${i}_${j % 5}`, Sound.MAIN_BUNDLE);
        const { sound } = await Audio.Sound.createAsync(
          //require(`data/0${i}/${Math.floor(j / 10)}_0${i}_${j % 5}`)
          require(`./data/01/0_01_0.wav`)
        );
        await sound.playAsync();
        // await new Promise<boolean>((resolve, reject) => {
        //     sound.play((success: boolean) => {
        //         const out_data: Out_Data = {file_name: `data/0${i}/${Math.floor(j / 10)}_0${i}_${j % 5}`, gender: 'male', data: hist};
        //         if (success) {
        //             resolve(success);
        //         } else {
        //             reject(success)
        //         }
        //         hist = [];
        //         sound.release();
        //         console.log(out_data);
        //     });
        // });
      }
    }

    onStopButtonPress();
  };

  const onStopButtonPress = () => {
    if (sub) {
      sub.remove();
    }
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
    // hist[spot] = {x: x, y: y, z: z, timestamp: 0, diff: diff};
    // spot = (spot + 1) % size;
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
