# URL Shortener Microservice

A simple URL shortener built with Node.js and Express as part of freeCodeCamp's Backend APIs and Relational Database certification. This project allows users to shorten URLs and redirect to the original link using a unique short identifier.

## 🚀 How It Works

### 1️⃣ Shorten a URL
- Send a `POST` request to `/api/shorturl` with a URL in the request body.
- The server validates the URL and assigns it a short numeric identifier.
- If the URL is already stored, it returns the existing short URL.
- Response Example:
  ```json
  { "original_url": "https://freecodecamp.org", "short_url": 1 }
  ```

### 2️⃣ Redirect to Original URL
- Send a `GET` request to `/api/shorturl/:short_url`.
- The server looks up the original URL and redirects the user.
- Example: Visiting `/api/shorturl/1` redirects to `https://freecodecamp.org`.

### 3️⃣ Invalid URL Handling
- If an invalid URL format is provided, the server returns:
  ```json
  { "error": "invalid url" }
  ```

## 📌 Why This Was Built
This project was created as part of freeCodeCamp's Backend APIs and Relational Database certification to practice:
- URL validation
- Using `dns.lookup()` to check valid domain names
- Handling API requests and responses in Express
- Managing data using an in-memory array (could be extended with a database)

## 📚 What I Learned
- How to use `dns.lookup()` to verify URLs.
- Handling JSON and form data in Express.
- Implementing URL redirection using `res.redirect()`.
- Handling errors and invalid input gracefully.
- Basic state management using an array (and the need for persistence in real applications).

## 🛠 Technologies Used
- Node.js
- Express.js
- `dns` module for domain validation
- CORS for cross-origin requests

## 🏁 Getting Started

### 1️⃣ Install dependencies
```sh
npm install
```

### 2️⃣ Run the server
```sh
npm start
```

### 3️⃣ Test the API
Use tools like [Postman](https://www.postman.com/) or `curl` to send requests.

---

Built with ❤️ for learning and improving backend development skills! 🚀
