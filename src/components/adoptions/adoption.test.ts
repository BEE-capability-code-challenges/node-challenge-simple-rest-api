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
    it('should submit an adoption', () => {
      // Given

      // When

      // Then
    });
  });

  describe('GET /v1/adoptions?email=:string', () => {
    it('should return a list of adoptions filtered by email', () => {
      // Given

      // When

      // Then
    });
  });

  describe('GET /v1/adoptions?status=:string', () => {
    it('should return a list of adoptions filtered by status', () => {
      // Given

      // When

      // Then
    });
  });

  describe('POST /v1/adoptions/:id/resolve', () => {
    it('should resolve an adoption', () => {
      // Given

      // When

      // Then
    });
  });
});
