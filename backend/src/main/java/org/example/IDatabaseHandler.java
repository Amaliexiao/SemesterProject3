package org.example;

import org.json.simple.JSONObject;
import java.security.Timestamp;

public interface IDatabaseHandler {
    public JSONObject getBeer(int id);
    public JSONObject getUser(int id);
    public JSONObject getSpeed(int id);
    public JSONObject getBatchReport(int id);
    public boolean createBatchReport(
            int user_id, int beer_id, int size, int speed_id, Timestamp stop_time, Timestamp start_time,
            double held_state_duration, int successful_beer, int failed_beer, float lowest_temp, float mean_temp,
            float highest_temp, float lowest_humidity, float mean_humidity, float highest_humidity, float lowest_vib,
            float mean_vib, float highest_vib);
    public boolean createUser(String email,     String name, String password);
//    public boolean addQueuedBatch(int userID, int size, int beerType, int speed);
}
