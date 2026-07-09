# Tiny Nginx - Custom Node.js Web Server

A mini web server built from scratch using Node.js core modules.

This project recreates the basic functionality of a web server like Nginx by handling HTTP requests, serving static files, managing routes, detecting MIME types, handling errors, and implementing a custom logging system.

The goal of this project is to understand the fundamentals behind backend frameworks like Express by building core functionality manually.

---

## Features

### HTTP Server

* Built using Node.js `http` module
* Handles incoming HTTP requests
* Sends HTTP responses

### Routing

* Custom route handling
* Supported routes:

  * `/`
  * `/about`
  * `/contact`

### Static File Serving

* Serves HTML, CSS, JavaScript, images, and text files
* Reads files using Node.js `fs` module

### MIME Type Handling

Automatically identifies file types:

* HTML → `text/html`
* CSS → `text/css`
* JavaScript → `text/javascript`
* PNG → `image/png`
* Text → `text/plain`

### Error Handling

Custom error pages:

* `404.html` → Page not found
* `500.html` → Internal server error

### Custom Logger

Built a reusable logging module with:

* INFO logs
* WARN logs
* ERROR logs
* Timestamp support
* File-based logging
* Colored terminal output

Example:

```
[2026-07-11 00:10:21] INFO: Server running on port 3000
[2026-07-11 00:10:25] WARN: 404 - Page Not Found
[2026-07-11 00:10:30] ERROR: Internal Server Error
```

---

## Tech Stack

* Node.js
* JavaScript
* HTTP Module
* File System Module (`fs`)
* Path Module

---

## Project Structure

```
nginX_mini
│
├── server.js              # Main HTTP server
├── logger.js              # Custom logger module
├── README.md
│
├── public/
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── 404.html           # Not found page
│   ├── 500.html           # Server error page
│   └── style.css
│
├── logs/
│   └── app.log            # Generated automatically when server runs and contains generated runtime logs
│
└── .gitignore
```

---

## How to Run

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd nginX_mini
```

Start the server:

```bash
node server.js
```

The server will start at:

```
http://localhost:3000
```

---

## Example Requests

Home page:

```
GET /
```

About page:

```
GET /about
```

Contact page:

```
GET /contact
```

Invalid route:

```
GET /random
```

Returns:

```
404 - Page Not Found
```

---

## Concepts Learned

This project helped understand:

* How HTTP servers work internally
* Request and response objects
* Routing logic
* Static file serving
* MIME types
* Status codes
* File system operations
* Node.js modules
* Logging architecture
* Error handling

---

## Why This Project?

Frameworks like Express simplify backend development, but they hide many concepts.

By building this server from scratch, I learned what happens behind abstractions like:

```javascript
app.get("/", handler)
```

and how web servers process requests internally.

---

## Future Improvements

Possible improvements:

* Add middleware support
* Add POST request handling
* Add JSON body parsing
* Add environment configuration
* Add request logging middleware
* Implement a mini Express-style router
