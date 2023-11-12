package org.example;

import org.json.simple.JSONObject;

import java.security.Timestamp;
import java.sql.*;

public class PersistanceHandler implements IDatabaseHandler {
    private static PersistanceHandler instance;
    private String url = "localhost";
    private int port = 5432;
    private String databaseName = "beerData";
    private String username = "";
    private String password = "";
    private String schema = "beermachine";
    private Connection connection = null;

    private PersistanceHandler() {
        initializePostgresqlDatabase();
    }

    public static PersistanceHandler getInstance() {
        if (instance == null) {
            instance = new PersistanceHandler();
        }
        return instance;
    }

    private void initializePostgresqlDatabase() {
        try {
            DriverManager.registerDriver(new org.postgresql.Driver());
            connection = DriverManager.getConnection("jdbc:postgresql://" + url + ":" + port + "/" + databaseName + "?currentSchema=" + schema, username, password);
        } catch (SQLException | IllegalArgumentException ex) {
            ex.printStackTrace(System.err);
        } finally {
            if (connection == null) System.exit(-1);
        }
    }

    @Override
    public JSONObject getBeer(int id) {
        try {
            PreparedStatement stmt = connection.prepareStatement("SELECT * FROM beers WHERE id = ?");
            stmt.setInt(1, id);
            ResultSet sqlReturnValues = stmt.executeQuery();
            if (!sqlReturnValues.next()) {
                return null;
            }
            System.out.println(sqlReturnValues.getString("name"));
            JSONObject object = new JSONObject();
            object.put("id", id);
            object.put("name", sqlReturnValues.getString("name"));
            return object;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public JSONObject getUser(int id) {
        try {
            PreparedStatement stmt = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
            stmt.setInt(1, id);
            ResultSet sqlReturnValues = stmt.executeQuery();
            if (!sqlReturnValues.next()) {
                return null;
            }
            JSONObject object = new JSONObject();
            object.put("id", id);
            object.put("username", sqlReturnValues.getString("username"));
            object.put("password", sqlReturnValues.getString("hashedpassword"));
            return object;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public JSONObject getSpeed(int id) {
        try {
            PreparedStatement stmt = connection.prepareStatement("SELECT * FROM speeds WHERE id = ?");
            stmt.setInt(1, id);
            ResultSet sqlReturnValues = stmt.executeQuery();
            if (!sqlReturnValues.next()) {
                return null;
            }
            JSONObject object = new JSONObject();
            object.put("id", id);
            object.put("name", sqlReturnValues.getString("name"));
            object.put("speed", sqlReturnValues.getString("speed"));
            return object;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public JSONObject getBatchReport(int id) {
        try {
            PreparedStatement stmt = connection.prepareStatement("SELECT * FROM batches WHERE id = ?");
            stmt.setInt(1, id);
            ResultSet sqlReturnValues = stmt.executeQuery();
            if (!sqlReturnValues.next()) {
                return null;
            }
            JSONObject object = new JSONObject();
            object.put("id", id);
            object.put("user id", sqlReturnValues.getString(2));
            object.put("beer id", sqlReturnValues.getString(3));
            object.put("speed id", sqlReturnValues.getString(4));
            object.put("size", sqlReturnValues.getString(5));
            object.put("start time", sqlReturnValues.getString(6));
            object.put("stop time", sqlReturnValues.getString(7));
            object.put("held-state duration", sqlReturnValues.getString(8));
            object.put("successful beers", sqlReturnValues.getString(9));
            object.put("failed beers", sqlReturnValues.getString(10));
            object.put("lowest temperature", sqlReturnValues.getString(11));
            object.put("mean temperature", sqlReturnValues.getString(12));
            object.put("highest temperature", sqlReturnValues.getString(13));
            object.put("lowest humidity", sqlReturnValues.getString(14));
            object.put("mean humidity", sqlReturnValues.getString(15));
            object.put("highest humidity", sqlReturnValues.getString(16));
            object.put("lowest vibration", sqlReturnValues.getString(17));
            object.put("mean vibration", sqlReturnValues.getString(18));
            object.put("highest vibration", sqlReturnValues.getString(19));
            return object;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean createBatchReport(int user_id, int beer_id, int size, int speed_id, Timestamp stop_time, Timestamp start_time, double held_state_duration, int successful_beer, int failed_beer, float lowest_temp, float mean_temp, float highest_temp, float lowest_humidity, float mean_humidity, float highest_humidity, float lowest_vib, float mean_vib, float highest_vib) {
        try {
            PreparedStatement stmt = connection.prepareStatement(
                    "INSERT INTO batches(" +
                            "userid,beerid,speedid,size,starttime,stoptime,heldstateduration,successfulbeers,failedbeers," +
                            "lowersttemp,meantemp,highesttemp,lowershum,meanhum,highesthum,lowersvib,meanvib,highestvib) " +
                            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
            stmt.setString(1, String.valueOf(user_id));
            stmt.setString(2, String.valueOf(beer_id));
            stmt.setString(3, String.valueOf(speed_id));
            stmt.setString(4, String.valueOf(size));
            stmt.setString(5, String.valueOf(start_time));
            stmt.setString(6, String.valueOf(stop_time));
            stmt.setString(7, String.valueOf(held_state_duration));
            stmt.setString(8, String.valueOf(successful_beer));
            stmt.setString(9, String.valueOf(failed_beer));
            stmt.setString(10, String.valueOf(lowest_temp));
            stmt.setString(11, String.valueOf(mean_temp));
            stmt.setString(12, String.valueOf(highest_temp));
            stmt.setString(13, String.valueOf(lowest_humidity));
            stmt.setString(14, String.valueOf(mean_humidity));
            stmt.setString(15, String.valueOf(highest_humidity));
            stmt.setString(16, String.valueOf(lowest_vib));
            stmt.setString(17, String.valueOf(mean_vib));
            stmt.setString(18, String.valueOf(highest_vib));
            stmt.execute();
            return true;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean createUser(String name, String password) {
        try {
            PreparedStatement stmt = connection.prepareStatement(
                    "INSERT INTO users(username,hashedpassword) VALUES (?,?)");
            stmt.setString(1, name);
            stmt.setString(2, password);
            stmt.execute();
            return true;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
