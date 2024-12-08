**Flight Booking Application**  
This project is a multi-component application designed for managing flights, bookings, customers, and payments. It consists of several microservices and a frontend React app.

**Features**  
\- Flight Management (REST API with Spring and H2) - Booking System (REST API with C\# and MongoDB) - Customer and Payment Management (GraphQL with Spring and MySQL) - Frontend built with React

**Prerequisites**  
1\. Java 17 (for Spring microservices)   
2\.  npm (for React app)  
 3. Docker (for Neo4j container)  
 4. MongoDB Server (you will need to create your own)  
 5. MySQL Server (you will need to create your own)   
6\. C\# Development Environment (e.g., Visual Studio or .NET SDK)  
 7. Git (to clone the repository)  
Note: You will need to create and configure your own MongoDB and MySQL servers for data storage. Provide the necessary credentials in the respective microservices’ configuration files.  
Getting Started

1\. **Clone the Repository :** git clone https://github.com/your-repo/flight-booking-app.git     
 cd flight-booking-app     
2\. Environment Setup - Ensure Docker is running for containerized services (e.g., Neo4j). - Set up and configure MongoDB and MySQL servers with the necessary schemas/tables.

**Microservices Setup**

**A. Flights Service**  
1\. Navigate to the flights-service directory:   cd flights-service   
2\. Build and run the Spring Boot application:  ./mvnw spring-boot:run   
3\. The API will be available at:    [http://localhost:8080](http://localhost:8080)

**B. Booking Service**  
1\. Set up a MongoDB server: - Create your MongoDB instance and database. - Update the MongoDB connection string in the appsettings.json file of the booking service.   
2\. Navigate to the booking-service directory:  cd booking-service     
 3. Build the project using .NET CLI:    dotnet build    
4\. Run the service: dotnet run   
5\. The API will be available at: [http://localhost:5000](http://localhost:5000)

**C. Payment Service**  
1\. Set up a MySQL server: - Create your MySQL instance and database. - Update the MySQL connection details in the application.properties file of the payment service.   
2\. Navigate to the payment-service directory:  cd payment-service   
 3. Run the Spring Boot application:   ./mvnw spring-boot:run   
 4. The GraphQL API will be available at:    [http://localhost:8081/graphql](http://localhost:8081/graphql)

**Frontend Setup**  
1\. Navigate to the frontend directory:  cd frontend     
2\. Install dependencies:  npm install    
\`3. Start the React development server:  npm start    
4\. The app will be available at:  [http://localhost:3000](http://localhost:3000)

**Notes on Databases**  
MongoDB:  
1\. Create a MongoDB instance and database for the Booking service. 2. Update the connection string in the appsettings.json file with your MongoDB credentials.  
MySQL:  
1\. Create a MySQL instance and database for the Payment service. 2. Update the connection details in the application.properties file with your MySQL credentials.  
Troubleshooting  
1\. Docker Services Not Starting: - Check if Docker is running and restart it if necessary.   
2\. Port Conflicts: - Ensure that the ports (8080, 8081, 5000, 3306, 27017\) are not in use by other processes.   
3\. Database Connectivity: - Verify the environment variables for database credentials in the .env or application.properties files.  
