import mongoose from 'mongoose'

const Schema = mongoose.Schema

const salesSchema = new Schema({
  insuranceCount: {
    type: Number
  },
  appleCareCount: {
    type: Number
  },
  prePaidPhones: {
    type: Number
  },
  accesoriesCount: {
    type: Number
  },
  accesoriesDollarAmount:{
    type: Number
  },
  generalElectronicsCount: {
    type: Number
  },
  generalElectronicsDollarAmount: {
    type: Number
  }
})

const profileSchema = new Schema({
  userName: {type: String},
  fullName: {type: String},
  sales: [salesSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
