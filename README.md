Savify - Your AI-Powered Financial Companion

Simplify Your Finances, Savify Your Future.
Savify is a smart, gamified savings platform designed for young adults and students. It automates savings, tracks expenses, and makes financial management engaging and effortless.

🔗 Live Demo: savify.ca
📂 GitHub Repository: Savify GitHub


📌 Key Features
✅ Goal-Oriented Savings - Set financial goals and track progress
✅ Automated Savings - Round-up purchases & schedule transfers
✅ Expense Tracking - AI-powered spending insights
✅ Gamification & Rewards - Earn points, compete in challenges
✅ Savify Split - Effortlessly split & track shared expenses
✅ Security & Authentication - Secure login via JWT
✅ Mobile-First UI - Optimized for all devices


🛠 Tech Stack
Category	            Technology
Frontend	        HTML, CSS, JavaScript
Backend	          Node.js, Express.js, MongoDB
Hosting	          Vercel (Auto-Deploy from GitHub)
Database	        MongoDB Atlas (Planned)
Authentication	  JWT (JSON Web Tokens)
Security	        bcrypt for password hashing
API	              REST API using Express
Deployment	      GitHub + Vercel CI/CD

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/thejayanshbagga/savify.git
cd savify

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
Create a .env file in the backend directory and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4️⃣ Run the Server
npm start
Backend should now be running on http://localhost:5000 🚀

🔗 API Endpoints
Method	    Endpoint	            Description
POST	   /api/auth/signup	     Register new user
POST	   /api/auth/login	        User login
GET	     /api/users	            Fetch all users
POST	   /api/email/subscribe	 Email subscription


🌎 Deployment with Vercel
1️⃣ Push Changes to GitHub
git add .
git commit -m "Updated features"
git push origin main

2️⃣ Auto-Deploy with Vercel
Every push to GitHub automatically triggers deployment to savify.ca.
Check status in Vercel Dashboard.

3️⃣ Custom Domain Setup
Savify uses Vercel's DNS for domain management:

Type	    Name	    Value
A	         @	    76.76.21.21
CNAME	    www	  cname.vercel-dns.com
Status: Check DNS Propagation

📬 Contact & Support
📧 Email: business@savify.com
🔗 LinkedIn: https://www.linkedin.com/company/106143653/admin/dashboard/
🔗 Instagram: @savify.official

🙌 Contributions & Issues? Feel free to open a GitHub issue or submit a pull request.

Update: code revamp of the official website by Vaishnavi Gudimella and (name of the other coder).
