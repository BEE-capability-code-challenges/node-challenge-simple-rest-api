import request from "supertest";
import app from "../../app";
import testDatabase from "../../config/test.database.config";
import { AdoptionRecord, ApplicationStatus, IAdoption } from "./adoption.model";

beforeAll(async () => {
  await testDatabase.sync({ force: true }); // Reset the database before each test run
  const seed: IAdoption[] = [
    {
      id: 1,
      name: 'a-name',
      email: 'a@mail.com',
      phone: '0123456789',
      street: 'a-street',
      streetNumber: 0,
      city: "a-city", 
      state: "a-state",
      streetZipCode: '123',
      country: 'a-country',
      petId: 1,
      notes: 'a-notes',
      status: ApplicationStatus.Review
    },
  ];
  await AdoptionRecord.bulkCreate(seed);
});

afterAll(async () => {
  await testDatabase.close(); // Close the database connection after all tests
});

describe('Adoption API', () => {
  describe('POST /v1/adoptions', () => {
    it('should submit an adoption', async () => {
      // Given
      const adoption: IAdoption = {};
      
      // When
      const response = await request(app).post("/v1/adoptions").send(adoption)

      // Then
      expect(response.status).toBe(200);
      expect(response.body.data).toBe({...adoption});
    });
  });

  describe('GET /v1/adoptions?email=:string', () => {
    it('should return a list of adoptions filtered by email', async () => {
      // Given
      const email: string = 'a-email';
      // When
      const response = await request(app).get(`/v1/adoptions?email=${email}`);

      // Then
      expect(response.status).toBe(200);
      expect(response.body.data.id).toBe(1);
    });
  });

  describe('GET /v1/adoptions?status=:string', () => {
    it('should return a list of adoptions filtered by status',  async () => {
      // Given
      const status: ApplicationStatus = ApplicationStatus.Accepted;
      // When
      const response = await request(app).get(`/v1/adoptions?email=${status}`);

      // Then
      expect(response.status).toBe(200);
      expect(response.body.data.id).toBe(2);
    });
  });

  describe('POST /v1/adoptions/:id/resolve', () => {
    it('should resolve an adoption',  async () => {
      // Given

      // When

      // Then
    });
  });
});
