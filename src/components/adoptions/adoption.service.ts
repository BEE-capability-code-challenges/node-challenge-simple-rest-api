import { AdoptionRecord } from "./adoption.model";

/**
 * Adds an adoption record to the database
 * 
 * @async
 * @function addAdoption
 * @param {Object} adoptionData 
 * @returns {Promise<AdoptionRecord>} 
 */
export const addAdoption = async (adoptionData: any): Promise<AdoptionRecord> => {
    const adoption = await AdoptionRecord.create(adoptionData);

    return adoption;
}

// Add more service functions as needed