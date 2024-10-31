
import {PetRecord} from './pet.model';

//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

/**
 * Adds a new pet record to the database.
 *
 * @async
 * @function addPet
 * @param {Object} petData - The data for the new pet, including properties like name, species, breed, etc.
 * @returns {Promise<PetRecord>} The created pet record.
 */
export const addPet = async (petData: any): Promise<PetRecord> => {
    const pet = await PetRecord.create(petData);
    return pet;
};

/**
 * Retrieves pet records from the database, optionally filtered by specific criteria.
 *
 * @async
 * @function getPets
 * @param {Object} [filters={}] - An optional object containing filter criteria for querying pets.
 * @returns {Promise<PetRecord[]>} Filtered pet results
 */
export const getPets = async (filters: object = {}): Promise<PetRecord[]> => {
    // TODO: allow filters
    const pets = await PetRecord.findAll(filters);
    return pets;
};


// Add more service for CRUD functions as needed