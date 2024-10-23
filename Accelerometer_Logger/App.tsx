import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import { useState, useEffect } from 'react';

let start = Date.now()

type AccelerometerData = AccelerometerMeasurement & {diff: number};

export default function App() {
    const [{ x, y, z, timestamp }, setData] = useState<AccelerometerMeasurement>({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    });
    const [timediff, setTimediff] = useState<number>(0.0);
    const [sub, setSub] = useState<any>(null);
    const [hist, setHist] = useState<AccelerometerData[]>([]);

    const updateinterval = 0; // ms

    Accelerometer.setUpdateInterval(updateinterval);

    const onStartButtonPress = () => {
        setSub(Accelerometer.addListener(setData));
    }

    const onStopButtonPress = () => {
        if (sub) {
            sub.remove();
        }
    }

    const onLogButtonPress = () => {
        console.log(hist);
    }

    useEffect(() => {
        const diff = (Date.now() - start) / 1000;
        start = Date.now();
        setTimediff(diff);
        // console.log(diff, timestamp, start);
        // console.log(x, y, z, diff);
        setHist([...hist, { x, y, z, timestamp, diff } ]);
    }, [x, y, z, setData])

    return (
        <View style={styles.container}>
            <Button title="Start" onPress={onStartButtonPress} />
            {/*<Text>Timediff: {timediff}s</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>*/}
            <Button title="Stop" onPress={onStopButtonPress} />
            <Button title="Log" onPress={onLogButtonPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
