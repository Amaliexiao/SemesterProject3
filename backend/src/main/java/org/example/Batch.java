package org.example;

import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.util.StopWatch;

import java.io.*;
import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class Batch {
    float batchId;
    int userId;
    float beerId;
    int size;
    float speedId;
    Timestamp startTime;
    Timestamp stopTime;
    StopWatch heldStateDuration;
    int acceptableBeers;
    int defectProducts;
    float lowestTemperature;
    float highestTemperature;
    float meanTemperature;
    float lowestHumidity;
    float highestHumidity;
    float meanHumidity;
    float lowestVibration;
    float highestVibration;
    float meanVibration;

    List<Float> allTemperatures;
    List<Float> allHumidities;
    List<Float> allVibrations;

    public Batch(float batchId, float beerId, float speedId, int state, float temperature, float humidity, float vibration) {
        allTemperatures = new ArrayList<>();
        allHumidities = new ArrayList<>();
        allVibrations = new ArrayList<>();
        heldStateDuration = new StopWatch();

        this.batchId = batchId;
        this.beerId = beerId;
        this.speedId = speedId;
        startTime = new Timestamp(System.currentTimeMillis());

        if (state == 2) {
            heldStateDuration.start();
        }

        allTemperatures.add(temperature);
        allHumidities.add(humidity);
        allVibrations.add(vibration);
    }

    public void addData(int state, float temperature, float humidity, float vibration) {
        if (state != 2 && !heldStateDuration.isRunning()) {
            heldStateDuration.start();
        } else if (state == 2 && heldStateDuration.isRunning()) {
            heldStateDuration.stop();
        }

        allTemperatures.add(temperature);
        allHumidities.add(humidity);
        allVibrations.add(vibration);
    }

    public float[] calculate(List arr) {
        float high = (float) arr.get(0);
        float low = (float) arr.get(0);
        float total = (float) arr.get(0);
        float mean;

        for (int i=1; i<arr.size(); i++) {
            float castedNumber = (float) arr.get(i);

            if (castedNumber > high) {
                high = castedNumber;
            } else if (castedNumber < low) {
                low = castedNumber;
            }

            total = total + castedNumber;
        }

        mean = total/arr.size();

        return new float[]{high, low, mean};
    }

    public void close(int acceptableBeers, int defectProducts, int state, float temperature, float humidity, float vibration) {
        if (heldStateDuration.isRunning()) {
            heldStateDuration.stop();
        }
        stopTime = new Timestamp(System.currentTimeMillis());
        addData(state, temperature, humidity, vibration);
        this.acceptableBeers = acceptableBeers;
        this.defectProducts = defectProducts;

        float[] tempValues = calculate(allTemperatures);
        float[] humValues = calculate(allHumidities);
        float[] vibValues = calculate(allVibrations);

        lowestTemperature = tempValues[0];
        highestTemperature = tempValues[1];
        meanTemperature = tempValues[2];
        lowestHumidity = humValues[0];
        highestHumidity = humValues[1];
        meanHumidity = humValues[2];
        lowestVibration = vibValues[0];
        highestVibration = vibValues[1];
        meanVibration = vibValues[2];

        saveData();
    }

    public void saveData() {
        File file = new File("data.csv");
        boolean exists = file.exists();
        try {
            PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));
            if (!exists) {
                pw.println("batchId, beerId, speed, start, stop, held state duration, acceptable products, defect products, lowest temp, highest temp, mean temp, lowest hum, highest hum, mean hum, lowest vib, highest vib, mean vib");
                pw.flush();
            }

            pw.println(batchId + ", " + beerId +", " + "speed" + ", " +startTime + ", " + stopTime + ", " + heldStateDuration.getTotalTimeSeconds() + ", " + acceptableBeers + ", " + defectProducts + ", " + lowestTemperature + ", " + highestTemperature + ", " + meanTemperature + ", " + lowestHumidity + ", " + highestHumidity + ", " + meanHumidity + ", " + lowestVibration + ", " + highestVibration + ", " +  meanVibration);
            pw.flush();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
