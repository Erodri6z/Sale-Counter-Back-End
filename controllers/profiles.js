import { Profile } from '../models/profile.js'
// import { v2 as cloudinary } from 'cloudinary'

// async function index(req, res) {
//   try {
//     const profiles = await Profile.find({})
//     res.json(profiles)
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err)
//   }
// }

async function getProfile(req, res) {
  try {
    Profile.findById(req.params.id)
    .then(profile => {
      profile.populate("sales")
      .then(propProfile => {
        res.json(propProfile)
      })
    })
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

async function createSaleCounter(req, res) {
  try {
    Profile.findById(req.params.id)
    .then(profile => {
      profile.sales.push(req.body)
      profile.save()
      .then(() => {
        res.json(profile)
      })
    })
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

async function clearCounter(req, res) {
  try{
    Profile.findById(req.params.id)
    .then(profile => {
      profile.sales = []
      profile.save()
      .then(() => {
        res.json(profile)
      })
    })
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}


export { getProfile as show, createSaleCounter as create, clearCounter }
