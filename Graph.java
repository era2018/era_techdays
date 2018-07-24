import java.util.ArrayList;

public class Graph {
	
	public Rider[] locations = {new Rider("San Francisco", true), new Rider("Livermore", true), new Rider("Los Banos", true),
			new Rider("Santa Clarita", false), new Rider("Los Angeles", false), new Rider("San Diego", false)};
	public double[][] distances = {{0.0, 44.4, 124.0, 360.0, 394.0, 514.0}, {44.4, 0.0, 79.8, 315.0, 350.0, 470.0},
			{124.0, 79.8, 0.0, 236.0, 270.0, 390.0}, {360.0, 315.0, 236.0, 0.0, 34.2, 155.0}, 
			{394.0, 350.0, 270.0, 34.2, 0.0, 120.0}, {514.0, 470.0, 390.0, 155.0, 120.0, 0.0}
			};
	public static final int MAX_CAPACITY = 8;
	public int riders;
	
	public Graph() //default constructor
	{
		riders = 6;
	}
	
	public class Rider// a wrapper class for locations
	{
		String location;
		String Name;
		boolean isStartLocation;
		public Rider(String location, boolean isStartLocation) {
			this.location = location;
			this.isStartLocation = isStartLocation;
		}
		
		public String getLocation() {
			return location;
		}
		
		public void setName(String name) {
			Name = name;
		}
		
		public String getName() {
			return Name;
		}
		
		public boolean getIsStartLocation()
		{
			return isStartLocation;
		}
	}
	
	public void getRoute()
	{
		boolean[] pickup = new boolean[MAX_CAPACITY];
		for(int i = 0; i < locations.length; ++i)
		{
			if(locations[i].getIsStartLocation())
			{
				pickup[i] = true;
			}
			else
			{
				pickup[i] = false;
			}
		}
	}
	
	public void calculateRoute()
	{
		
	}
	
	
	/*
	public Node hub; // this node connects to all of the other nodes with a 0 distance
	public int numLocations;
	
	
	public Graph() {
		hub = new Node(false, null);
	}
	public void addNode(Node n)
	{
		
	}
	
	public class Node{
		private boolean isStartLocation;
		private String locationName;
		private static final int MAX_CAPACITY = 8;
		public ArrayList<Distance> connectors;
		public Node[] nodes; //this is used for the head node to connect to the other nodes
		public Node(boolean isStartLocation, String locationName)
		{
			this.isStartLocation = isStartLocation;
			this.locationName = locationName;
			nodes = new Node[MAX_CAPACITY];
		}
		
		public boolean isStartLocation() {
			return isStartLocation;
		}
		
		public void addDistance(Node connector, double distance)
		{
			connectors.add(new Distance(connector, distance));
		}
		
		public String getLocationName() {
			return locationName;
		}
		
		public String toString()
		{
			if(isStartLocation)
			{
				return "pickup" + locationName;
			}
			else
			{
				return "dropoff" + locationName;
			}
		}
	}
	
	class Distance{
		private Node connector;
		private double distance;
		public Distance(Node connector, double distance)
		{
			this.connector = connector;
			this.distance = distance;
		}
	}*/
	
	public double getDistance(String locationA, String locationB)
	{
		/*
		String[] locations = {"San Francisco", "Livermore", "Los Banos", "Santa Clarita", 
				"Los Angeles", "San Diego"};
		double[][] distances = {{0.0, 44.4, 124.0, 360.0, 394.0, 514.0}, {44.4, 0.0, 79.8, 315.0, 350.0, 470.0},
		{124.0, 79.8, 0.0, 236.0, 270.0, 390.0}, {360.0, 315.0, 236.0, 0.0, 34.2, 155.0}, 
		{394.0, 350.0, 270.0, 34.2, 0.0, 120.0}, {514.0, 470.0, 390.0, 155.0, 120.0, 0.0}
		};*/
		int i = 0;
		int j = 0;
		for(;i < locations.length; ++i)
		{
			if(locationA.equalsIgnoreCase(locations[i].getLocation()))
			{
				break;
			}
		}
		
		for(;j < locations.length; ++j)
		{
			if(locationB.equalsIgnoreCase(locations[j].location))
			{
				break;
			}
		}
		
		if(i == locations.length || j == locations.length)
		{
			System.out.println("invalid location");
		}
		
		return distances[i][j];
		
		/*
		if(locationA.equalsIgnoreCase("San Francisco"))
		{
			switch(locationB)
			{
			case "San Francisco": return 0.0;
			case "Livermore": return 44.4;
			case "Los Banos": return 124.0;
			case "Santa Clarita": return 360.0;
			case "Los Angeles": return 394.0;
			case "San Diego": return 514.0;
			
			}
		}
		if(locationA.equalsIgnoreCase("Livermore"))
		{
			switch(locationB)
			{
			case "San Francisco": return 44.4;
			case "Livermore": return 0.0;
			case "Los Banos": return 79.8;
			case "Santa Clarita": return 315.0;
			case "Los Angeles": return 350.0;
			case "San Diego": return 470.0;
			
			}
		}
		if(locationA.equalsIgnoreCase("Los Banos"))
		{
			switch(locationB)
			{
			case "San Francisco": return 124.0;
			case "Livermore": return 79.8;
			case "Los Banos": return 0.0;
			case "Santa Clarita": return 236.0;
			case "Los Angeles": return 270.0;
			case "San Diego": return 0.0;
			
			}
		}
		if(locationA.equalsIgnoreCase("Santa Clarita"))
		{
			switch(locationB)
			{
			case "San Francisco": return 360.0;
			case "Livermore": return 315.0;
			case "Los Banos": return 236.0;
			case "Santa Clarita": return 0.0;
			case "Los Angeles": return 0.0;
			case "San Diego": return 0.0;
			
			}
		}
		if(locationA.equalsIgnoreCase("Los Angeles"))
		{
			switch(locationB)
			{
			case "San Francisco": return 394.0;
			case "Livermore": return 350.0;
			case "Los Banos": return 270.0;
			case "Santa Clarita": return 0.0;
			case "Los Angeles": return 0.0;
			case "San Diego": return 0.0;
			
			}
		}
		if(locationA.equalsIgnoreCase("San Diego"))
		{
			switch(locationB)
			{
			case "San Francisco": return 514.0;
			case "Livermore": return 470.0;
			case "Los Banos": return 0.0;
			case "Santa Clarita": return 0.0;
			case "Los Angeles": return 0.0;
			case "San Diego": return 0.0;
			
			}
		}*/
	}
}
