package org.example;

import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.springframework.util.StopWatch;

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
    Float acceptableBeers;
    Float defectProducts;
    Float lowestTemperature;
    Float higestTemperature;
    Float meanTemperature;
    Float lowestHumidity;
    Float highestHumidity;
    Float meanHumidity;
    Float lowestVibration;
    Float higestHumidity;
    Float meanVibration;

    List<Float> allTemperatures;
    List<Float> allHumidities;
    List<Float> allVibrations;

    public Batch(float batchId, float beerId, float speedId, String state, float temperature, float humidity, float vibration) {
        allTemperatures = new ArrayList<>();
        allHumidities = new ArrayList<>();
        allVibrations = new ArrayList<>();

        this.batchId = batchId;
        this.beerId = beerId;
        this.speedId = speedId;
        startTime = new Timestamp(System.currentTimeMillis());
        stopTime = new Timestamp(System.currentTimeMillis());

        if (state == "") {
            heldStateDuration.start();
        }

        allTemperatures.add(temperature);
        allHumidities.add(humidity);
        allVibrations.add(vibration);
    }
}
