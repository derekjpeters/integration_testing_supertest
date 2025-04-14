const request = require("supertest");
const server = require("./server");
//for the GET request
describe("server.js", () => {
	describe("index route", () => {
		it("should return an OK status code from the index route", async () => {
			const expectedStatusCode = 200;
			const response = await request(server).get("/");
			expect(response.status).toEqual(expectedStatusCode);
		});

		it("should return a JSON object from the index route", async () => {
			const expectedBody = { api: "running" };
			const response = await request(server).get("/");
			expect(response.body).toEqual(expectedBody);
		});

		it("should return a JSON object from the route", async () => {
			const response = await request(server).get("/");
			expect(response.type).toEqual("application/json");
		});
	});

	describe("GET /users", () => {
		it("should return a list of users", async () => {
			const response = await request(server).get("/users");
			expect(response.status).toBe(200);
			expect(Array.isArray(response.body)).toBe(true);
			expect(response.body).toHaveLength(2);
		});
		it("should include a user with the name Sam", async () => {
			const response = await request(server).get("/users");
			expect(response.body).toEqual(
				expect.arrayContaining([expect.objectContaining({ name: "Sam" })])
			);
		});
	});

	describe("create route", () => {
		it("should return created status code from the created route of 201", async () => {
			const expectedStatusCode = 201;
			const response = await request(server)
				.post("/create")
				.send({ name: "Derek" });
			expect(response.status).toEqual(expectedStatusCode);
		});
	});
});
