import { DataTypes, Model } from 'sequelize';
import database from '../../config/database.config';

export type ApplicationStatus = 'Review' | 'Accepted' | 'Rejected';

// Interface
export interface IAdoption {
  id?: number;
  name: string;
  email: string;
  phone: number;
  street: string;
  streetNumber: number;
  city: string;
  state: string;
  zip: number;
  country: string;
  petId: number;
  notes: string;
  status: ApplicationStatus;
}

// Adoption DB model
export class AdoptionRecord extends Model<IAdoption> implements IAdoption {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phone: number;
  declare street: string;
  declare streetNumber: number;
  declare city: string;
  declare state: string;
  declare zip: number;
  declare country: string;
  declare petId: number;
  declare notes: string;
  declare status: ApplicationStatus;
}

AdoptionRecord.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  street: '',
  streetNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Review'
  }
}, {
  sequelize: database,
  modelName: 'Adoption'
});
