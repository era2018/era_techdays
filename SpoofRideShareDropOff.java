import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class SpoofRideShareDropOff {
    public static void main(String[] args) {
        try {
        	Connection connection = DriverManager.getConnection("jdbc:sybase:Tds:10.171.1.252:2638/ubdataba", "ubdb", "123456");
        	String testInsert = "INSERT INTO eventLog (eventID, carID, logTime) VALUES (5, '243c201f7957', NOW())";
        	PreparedStatement ps = connection.prepareStatement(testInsert);
        	ps.execute();
        	testInsert = "INSERT INTO eventLog (eventID, carID, logTime) VALUES (5, 'Spoof', NOW())";
        	ps = connection.prepareStatement(testInsert);
        	ps.execute();
            connection.close();
        }	
        catch (Exception e) {
           e.printStackTrace(System.out);
        }
    }
}
