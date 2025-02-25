// src/components/adoption/adoption.controller.ts
import { Request, Response } from 'express';
import * as adoptionService from './adoption.service';
import { IAdoption } from './adoption.model';

/**
 * Adds an adoption record to the database
 * 
 * @async
 * @function addAdoption
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 */
export const addAdoption = async (req: Request, res: Response): Promise<void> => {
  try {
    const request: IAdoption = req.body;

    const adoption = await adoptionService.addAdoption(request);
    res.status(200).json(adoption);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

// Add more controller functions as needed
