class Graph {
    constructor() {
      this.vertices = {}; // An object to store vertices and their connections
    }
  
    // Insert a new vertex
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    // Delete a vertex and its incident edges
    deleteVertex(vertex) {
      if (this.vertices[vertex]) {
        delete this.vertices[vertex];
        // Remove all edges connected to this vertex in other vertices' lists
        for (const v in this.vertices) {
          this.vertices[v] = this.vertices[v].filter((edge) => edge !== vertex);
        }
      }
    }
  
    // Insert an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (this.vertices[vertex1] && this.vertices[vertex2]) {
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1); // For undirected graph, add both ways
      }
    }
  
    // Delete an edge between two vertices
    deleteEdge(vertex1, vertex2) {
      if (this.vertices[vertex1] && this.vertices[vertex2]) {
        this.vertices[vertex1] = this.vertices[vertex1].filter((v) => v !== vertex2);
        this.vertices[vertex2] = this.vertices[vertex2].filter((v) => v !== vertex1);
      }
    }
  }
  
  // Create a graph
  const myGraph = new Graph();
  
  // Add vertices
  myGraph.addVertex("A");
  myGraph.addVertex("B");
  myGraph.addVertex("C");
  
  // Add edges
  myGraph.addEdge("A", "B");
  myGraph.addEdge("B", "C");
  
  // Delete a vertex and its edges
  myGraph.deleteVertex("B");
  
  console.log(myGraph.vertices); // Output: { 'A': [], 'C': [] }
  