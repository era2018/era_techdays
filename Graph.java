import java.util.ArrayList;

public class Graph {
	
	public Node head;
	
	public Graph() {
		head = new Node(false);
	}
	public void addNode(Node n)
	{
		head.nodes.add(n);
	}
	
	public class Node{
		private boolean isStartLocation;
		public ArrayList<Distance> connectors;
		public ArrayList<Node> nodes; //this is used for the head node to connect to the other nodes
		public Node(boolean isStartLocation)
		{
			this.isStartLocation = isStartLocation;
		}
		
		public boolean isStartLocation() {
			return isStartLocation;
		}
		
		public void addDistance(Node connector, double distance)
		{
			connectors.add(new Distance(connector, distance));
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
	}
}
