# 📧 Email Sender API (Node.js + Express)

A simple **Email Sender REST API** built using:

- Node.js  
- Express.js  
- Nodemailer  
- dotenv  

This API allows sending emails using **Gmail App Password** securely.

---

## 🚀 Features

- Send email via **Nodemailer**
- Secure credentials with **.env**
- Simple email sending endpoint
- Beginner-friendly clean backend structure

---

## 📁 Project Structure

email-sender/
│
├── index.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── node_modules/


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rayhanislamrabby/email-sender.git
cd email-sender
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
EMAIL=yourgmail@gmail.com
EMAIL_SENDER_PASS=your_gmail_app_password
PORT=5000
⚠️ Use Gmail App Password, not your normal Gmail password.

4️⃣ Run the server
nodemon index.js
Server will run at:

http://localhost:5000
📮 API Endpoint
Send Email
GET /send-email
