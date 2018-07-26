import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class SpoofLaneDeparture {
    public static void main(String[] args) {
        try {
        	Connection connection = DriverManager.getConnection("jdbc:sybase:Tds:10.171.1.252:2638/ubdataba", "ubdb", "123456");
        	String testInsert = "INSERT INTO eventLog (eventID, carID, logTime) VALUES (1, '243c201f7957', ADDTIME(HOUR, 4, NOW()))";
        	PreparedStatement ps = connection.prepareStatement(testInsert);
        	ps.execute();
        	testInsert = "INSERT INTO eventLog (eventID, carID, logTime) VALUES (1, 'Spoof', ADDTIME(HOUR, 4, NOW()))";
        	ps = connection.prepareStatement(testInsert);
        	ps.execute();
            connection.close();
        }	
        catch (Exception e) {
           e.printStackTrace(System.out);
        }
    }
}
