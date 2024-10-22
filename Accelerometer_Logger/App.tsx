import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';
import { useState, useEffect } from 'react';

let start = Date.now()

export default function App() {
    const [{ x, y, z, timestamp }, setData] = useState<AccelerometerMeasurement>({
        x: 0,
        y: 0,
        z: 0,
        timestamp: 0
    });
    const [timediff, setTimediff] = useState<number>(0.0);

    const updateinterval = 1;

    Accelerometer.setUpdateInterval(updateinterval);
    Accelerometer.addListener(setData);

    useEffect(() => {
        const diff = (Date.now() - start) / 1000;
        start = Date.now();
        setTimediff(diff);
        // console.log(diff, timestamp, start);
    }, [x, y, z, setData])

    return (
        <View style={styles.container}>
            <Text>Timediff: {timediff}s</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
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
