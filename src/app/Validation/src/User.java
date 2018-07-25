import java.sql.*;
import java.util.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;
import java.io.*;

public class User {

	String userName;
	String passWord;
	/*	
	public User(String UN, String PW)
	{
		userName = UN;
		passWord = PW;
	}
	
	public void compare()
	{
		if(userName == "laura@gmail.com" && passWord == "betty")
		{
			System.out.println("Confirmed");
		}
		
		else
		{
			System.out.println("Login Failed");
		}
	}
	*/
	public static void main(String args[])
	{
				
		try {
		//FileReader fr = new FileReader("Test.txt");
		//BufferedReader br = new BufferedReader(fr);
		Scanner br = new Scanner(new File("Test.txt"));
		String fileInfo;
		
		while(br.hasNext())
		{
			fileInfo = br.nextLine();
			System.out.println(fileInfo);
				
		}
		br.close();
		}
		
		catch(FileNotFoundException e) {
			e.printStackTrace();
		}
		
		//User xyz = new User("laura@gmail.com", "betty");
		  
		//xyz.compare();
		/*
		try {
            Properties props = new Properties();
            props.put( "User", "ubdb" );
            props.put( "Password", "123456" );
            Connection connection = DriverManager.getConnection("jdbc:sybase:Tds:10.171.1.252:2638/ubdatabase", props);
            String queryString = "SELECT * FROM logins";
            PreparedStatement pstatement = connection.prepareStatement(queryString);
            ResultSet rs = pstatement.executeQuery();
           
            int numResults = 0;
            while(rs.next()) {
               numResults += 1;
               //System.out.println("" +  rs.getInt("timestamp")+", "+rs.getInt("percent")+", "+ rs.getInt("absolute"));
            }
            
            rs.close();
            pstatement.close();
            connection.cl{ose();
            //resultMsg="The amenities have been found!";
		}
		
		catch (Exception e) {
            System.out.println("Connection failure");
            e.printStackTrace(System.out);
            //resultMsg="Error occurred while reading database.";
         }
		*/
      
	}

	
}
