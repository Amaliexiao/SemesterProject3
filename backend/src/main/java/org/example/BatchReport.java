package org.example;

import APIServer.Entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/reports")
public class BatchReport {
    private BatchRepo batchRepo;
    private BeerRepository beerRepository;
    private UserRepo userRepo;
    private TemperatureRepo tempRepo;
    private HumidityRepo humRepo;
    private VibrationRepo vibRepo;
    private CompletedBatchRepo completedBatchRepo;


    @Autowired
    public BatchReport(BeerRepository beerRepository, BatchRepo queuedBatchRepo, UserRepo userRepo, CompletedBatchRepo completedBatchRepo, TemperatureRepo tempRepo, HumidityRepo humRepo, VibrationRepo vibRepo) {
        this.userRepo = userRepo;
        this.batchRepo = queuedBatchRepo;
        this.beerRepository = beerRepository;
        this.tempRepo = tempRepo;
        this.humRepo = humRepo;
        this.vibRepo = vibRepo;
        this.completedBatchRepo = completedBatchRepo;
    }

    public float[] calculate(List<Float> arr) {
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

    @CrossOrigin
    @PostMapping("/createBatchReport")
    public void createBatchReport(@RequestParam(name = "batchId") long batchId) {
        File file = new File("batchreport" + batchId +".csv");
        boolean exists = file.exists();
        try {
            PrintWriter pw = new PrintWriter(new FileOutputStream(file, true));
            if (!exists) {
                pw.println("batchId, beerType, speed, start, stop, acceptable products, defect products, lowest temp, highest temp, mean temp, lowest hum, highest hum, mean hum, lowest vib, highest vib, mean vib");
                pw.flush();
            }

            List<Temperature> tempTemps =  tempRepo.findAllById(Collections.singleton(batchId));
            List<Float> temperatures = new ArrayList<>();
            for (int i = 0; i < tempTemps.size(); i++) {
                temperatures.add(tempTemps.get(i).getTemp());
            }

            List<Humidity> tempHums =  humRepo.findAllById(Collections.singleton(batchId));
            List<Float> humidities = new ArrayList<>();
            for (int i = 0; i < tempHums.size(); i++) {
                humidities.add(tempHums.get(i).getHum());
            }

            List<Vibration> tempVibs =  vibRepo.findAllById(Collections.singleton(batchId));
            List<Float> vibrations = new ArrayList<>();
            for (int i = 0; i < tempVibs.size(); i++) {
                vibrations.add(tempVibs.get(i).getVib());
            }

            CompletedBatches batch = completedBatchRepo.getReferenceById(batchId);


            float[] calculatedTemperatures = calculate(temperatures);
            float[] calculatedHumidities = calculate(humidities);
            float[] calculatedVibrations = calculate(vibrations);

            Beers beer = batch.getBeerId();
            String beerType = beer.getName();
            int speed = batch.getSpeed();
            Date startTime = batch.getStartTime();
            Date stopTime = batch.getStopTime();
            int acceptableBeers = batch.getSuccessfulBeers();
            int defectProducts = batch.getSize() - acceptableBeers;
            float highestTemperature = calculatedTemperatures[0];
            float lowestTemperature = calculatedTemperatures[1];
            float meanTemperature = calculatedTemperatures[2];
            float highestHumidity = calculatedHumidities[0];
            float lowestHumidity = calculatedHumidities[1];
            float meanHumidity = calculatedHumidities[2];
            float highestVibration = calculatedVibrations[0];
            float lowestVibration = calculatedVibrations[1];
            float meanVibration = calculatedVibrations[2];

            pw.println(batchId + ", " + beerType +", " + speed + ", " +startTime + ", " + stopTime + ", " + acceptableBeers + ", " + defectProducts + ", " + lowestTemperature + ", " + highestTemperature + ", " + meanTemperature + ", " + lowestHumidity + ", " + highestHumidity + ", " + meanHumidity + ", " + lowestVibration + ", " + highestVibration + ", " +  meanVibration);
            pw.flush();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
