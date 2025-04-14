
# 🧪 Testing the Back End – Lesson Guide

**Date:** April 14, 2025  
**Lesson Topic:** Integration Testing of Express API using Jest and Supertest

---

## 🎯 Objective

Learn how to write integration tests for a Node.js backend using Supertest and Jest. By the end of this lesson, students will be able to:

- Set up an Express server
- Write and run tests for `GET` and `POST` endpoints
- Validate response status codes, JSON formats, and response data

---

## 📘 Key Definitions

| Term | Definition | Why It Matters |
|------|------------|----------------|
| **Integration Testing** | Testing how multiple parts of an application work together. | Ensures components like routes and middleware behave correctly together. |
| **Supertest** | A tool for sending HTTP requests to test Node.js servers. | Simulates real requests to your API for accurate testing. |
| **`request()`** | Supertest’s method for sending HTTP calls in tests. | Allows `.get()`, `.post()`, etc., against your server. |
| **Status Code** | HTTP response code (e.g., 200, 201, 400). | Helps confirm that your server is returning appropriate feedback. |

---

## ⚙️ Setup Instructions

```bash
npm init -y
npm install express
npm install --save-dev jest supertest
```

In `package.json`, add:

```json
"jest": {
  "testEnvironment": "node"
}
```

---

## 📂 File Structure

```
testing-back-end/
├── server.js
├── server.spec.js
└── package.json
```

---

## 🧪 API Routes and Tests

### `GET /`

```js
// server.js
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});
```

```js
// server.spec.js
it('returns 200 OK and JSON on GET /', async () => {
  const response = await request(server).get('/');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ api: 'running' });
});
```

---

### `POST /create`

```js
// server.js
server.post('/create', (req, res) => {
  res.status(201).json({ message: 'resource created' });
});
```

```js
// server.spec.js
it('returns 201 Created on POST /create', async () => {
  const response = await request(server)
    .post('/create')
    .send({ name: 'test' });
  expect(response.status).toBe(201);
});
```

---

### Bonus Routes

- `GET /users` — Returns an array of users.
- `POST /contact` — Validates presence of email/message and responds accordingly.

---

## ✅ Review Questions

1. What is the purpose of using Supertest in our tests?
2. How do you configure Jest to run in Node environment?
3. Why separate the server definition from the app startup logic?
4. What are three things you usually test in an API endpoint?

---

## 🧠 Final Notes

This lesson shows how integration testing makes sure your back end works as expected from the outside in. These types of tests simulate how a real user or client interacts with your server.

Happy Testing! 🔬
