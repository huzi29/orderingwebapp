                 
--Ordering Backend--
-------------------

----overview of the project----
This is the backend server for the Single-Page Ordering Website project.
It provides APIs for listing, searching, adding, removing items, and a chat-based query system.

----Built with----
--Node.js
--Express.js
--MongoDB (via Mongoose)
--MVC Architecture
--Vercel (Backend deployed separately)


----Setup Instructions----

Clone the Repository

git clone https://github.com/your-username/ordering-backend.git

cd ordering-backend

Install Dependencies
npm install

Create Environment Variables

Create a .env file in the root:

add this file to your project directory
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/orderingwebapp?retryWrites=true&w=majority
PORT=5000

Start the Server

npm run dev

Server will start at http://localhost:5000

run this command in your terminal to load items data into database from data.json file
node scripts/seedData.js

----API Endpoints----
Get--> http://localhost:5000/api/items
Get--> http://localhost:5000/api/items/all
Post--> http://localhost:5000/api/items/query

Name: Huzaifa Shaikh
Role: Full Stack Developer
Contact Information:7710939276
Email: huzaifashaikh2729@gmail.com
GitHub: [https://github.com/huzi29](https://github.com/huzi29/)
LinkedIn: [linkedin.com/in/huzaifa-shaikh](https://www.linkedin.com/in/huzaifa-shaikh-6a013a243/)
Website: [www.thehuzaifa.vercel.app](https://thehuzaifa.vercel.app/)
