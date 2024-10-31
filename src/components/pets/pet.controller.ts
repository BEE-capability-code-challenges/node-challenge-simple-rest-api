// src/components/pets/pet.controller.ts
import { Request, Response } from 'express';
import * as petService from './pet.service';
import { IPet } from './pet.model';

/**
 * Retrieves a list of pets from the database and sends it in the response.
 *
 * @async
 * @function getPets
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} JSON array of pets
 *
 */
export const getPets = async (req: Request, res: Response): Promise<void> => {
    const pets = await petService.getPets();
    console.log(pets)
    res.status(200).json(pets);
};

/**
 * Adds a new pet to the database and returns the created pet in the response.
 *
 * @async
 * @function getPets
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} JSON object of the created pet
 *
 */
export const addPet = async (req: Request, res: Response) => {
  try {

    // TODO: add validations
    const petInput: IPet= req.body;

    const pet = await petService.addPet(petInput);
    res.status(200).json(pet);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

// Add more controller functions as needed
