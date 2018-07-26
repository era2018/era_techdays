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
		
		
      
	}

	
}
