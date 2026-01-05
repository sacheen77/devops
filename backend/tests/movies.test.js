const request = require("supertest");
const app = require("../server");

describe("Movie API Tests", () => {
  
  test("GET /movies should return all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET /movies/1 should return a movie", async () => {
    const res = await request(app).get("/movies/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title");
  });

  test("GET /movies/999 should return 404", async () => {
    const res = await request(app).get("/movies/999");
    expect(res.statusCode).toBe(404);
  });

});
