// src/components/adoption/adoption.routes.ts
import express from 'express';
import * as adoptionController from './adoption.controller';

const adoptionRoutes = express.Router();


adoptionRoutes.post('/', adoptionController.addPet);

// Add more routes as needed
export default adoptionRoutes;
