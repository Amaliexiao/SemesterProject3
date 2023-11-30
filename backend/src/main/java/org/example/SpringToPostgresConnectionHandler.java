//package org.example;
//
//import org.json.simple.JSONObject;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.RowCallbackHandler;
//import org.springframework.web.bind.annotation.*;
//
//import java.security.Timestamp;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//
//@RestController
//@CrossOrigin
//@RequestMapping("/database")
//public class SpringToPostgresConnectionHandler implements CommandLineRunner {
//    @Autowired
//    private JdbcTemplate jdbcTemplate;
//
//    public SpringToPostgresConnectionHandler(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
//    public SpringToPostgresConnectionHandler(){}
//
////    @Override
////    public JSONObject getBeer(int id) {
////        JSONObject object = new JSONObject();
////        object.put("id", id);
////        String stmt = "SELECT * FROM beers WHERE id ="+id;
////        jdbcTemplate.query(stmt, new RowCallbackHandler() {
////            @Override
////            public void processRow(ResultSet rs) throws SQLException {
////                object.put("name", rs.getString("name"));
////            }
////        });
////        return object;
////    }
//
//    @Override
//    public JSONObject getUser(int id) {
//        JSONObject object = new JSONObject();
//        object.put("id", id);
//        String stmt = "SELECT * FROM users WHERE id ="+id;
//        jdbcTemplate.query(stmt, new RowCallbackHandler() {
//            @Override
//            public void processRow(ResultSet rs) throws SQLException {
//                object.put("username", rs.getString("username"));
//                object.put("password", rs.getString("hashedpassword"));
//            }
//        });
//        return object;
//    }
//
//    @Override
//    public JSONObject getSpeed(int id) {
//        JSONObject object = new JSONObject();
//        object.put("id", id);
//        String stmt = "SELECT * FROM speeds WHERE id ="+id;
//        jdbcTemplate.query(stmt, new RowCallbackHandler() {
//            @Override
//            public void processRow(ResultSet rs) throws SQLException {
//                object.put("name", rs.getString("name"));
//                object.put("speed", rs.getString("speed"));
//            }
//        });
//        return object;
//    }
//
//    @Override
//    public JSONObject getBatchReport(int id) {
//        JSONObject object = new JSONObject();
//        object.put("id", id);
//        String stmt = "SELECT * FROM batches WHERE id ="+id;
//        jdbcTemplate.query(stmt, new RowCallbackHandler() {
//            @Override
//            public void processRow(ResultSet rs) throws SQLException {
//                object.put("user id", rs.getString(2));
//                object.put("beer id", rs.getString(3));
//                object.put("speed id", rs.getString(4));
//                object.put("size", rs.getString(5));
//                object.put("start time", rs.getString(6));
//                object.put("stop time", rs.getString(7));
//                object.put("held-state duration", rs.getString(8));
//                object.put("successful beers", rs.getString(9));
//                object.put("failed beers", rs.getString(10));
//                object.put("lowest temperature", rs.getString(11));
//                object.put("mean temperature", rs.getString(12));
//                object.put("highest temperature", rs.getString(13));
//                object.put("lowest humidity", rs.getString(14));
//                object.put("mean humidity", rs.getString(15));
//                object.put("highest humidity", rs.getString(16));
//                object.put("lowest vibration", rs.getString(17));
//                object.put("mean vibration", rs.getString(18));
//                object.put("highest vibration", rs.getString(19));
//            }
//        });
//        return object;
//    }
//
//    @Override
//    public boolean createBatchReport(int user_id, int beer_id, int size, int speed_id, Timestamp stop_time, Timestamp start_time, double held_state_duration, int successful_beer, int failed_beer, float lowest_temp, float mean_temp, float highest_temp, float lowest_humidity, float mean_humidity, float highest_humidity, float lowest_vib, float mean_vib, float highest_vib) {
//        String sqlStatement = "INSERT INTO batches (userid,beerid,speedid,size,starttime,stoptime,heldstateduration,successfulbeers,failedbeers,lowerstemp,meantemp,highesttemp,lowershum,meanhum,highesthum,lowersvib,meanvib,highestvib)" +
//                "VALUES('"+user_id+"','"+beer_id+"','"+speed_id+"','"+size+"','"+start_time+"','"+stop_time+"','"+held_state_duration+"','"+successful_beer+"','"+failed_beer+"','"+lowest_temp+"','"+mean_temp+"','"+highest_temp+"','"+lowest_humidity+"','"+mean_humidity+"','"+highest_humidity+"','"+lowest_vib+"','"+mean_vib+"','"+highest_vib+"')";
//        jdbcTemplate.update(sqlStatement);
//        return true;
//    }
//
//    @Override
//    public boolean createUser(String email, String name, String password) {
//        String sqlStatement = "INSERT INTO users (email,username,password) VALUES ('"+email+"','"+name+"','"+password+"')";
//        jdbcTemplate.update(sqlStatement);
//        return true;
//    }
//
////    @CrossOrigin
////    @PostMapping("/addBatch")
////    @Override
////    public boolean addQueuedBatch(@RequestParam(name="userID") int userID, @RequestParam(name = "size") int size, @RequestParam(name = "beerType") int beerType, @RequestParam(name = "speed") int speed) {
////        String sqlStatement = "INSERT INTO queuedbatches(userid,size, beertype, speed) VALUES('"+userID+"','"+size+"','"+beerType+"','"+speed+"')";
////        jdbcTemplate.update(sqlStatement);
////        return true;
////    }
//
//    @Override
//    public void run(String... args) throws Exception {
//
//    }
//}