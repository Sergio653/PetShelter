const Pet = require('../models/Pet')

module.exports = {
    index: (req,res) => {
        Pet.find({})
            .then(( pets) => res.json({message:"All Pets", pets : pets}))
            .catch(err => res.json(err))
    },
    show: (req,res) => {
        Pet.findOne({_id: req.params.id})
            .then((pet) => res.json({message: "Found Pet", pet : pet}))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        console.log("***************Server************")
        console.log(req.body)
        Pet.create(req.body)
            .then((pet )=>res.json({message: "Created Pet", pet : pet}))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        console.log(req.body,req.params.id)
        Pet.findOne({_id:req.params.id})
            .then(pet => {
                pet.name = req.body.name;
                pet.type = req.body.type;
                pet.desc = req.body.desc;
                pet.one = req.body.one;
                pet.two = req.body.two;
                pet.three = req.body.three;
                pet.likes = req.body.likes;
                return pet.save()
            } )
            .then( pet =>  res.json( pet ))
            .catch(err => res.json(err))
    },
    destroy: (req,res) => {
        Pet.remove({_id:req.params.id})
            .then(()=> res.json({message: "Pet Destroyed"}))
            .catch(err => json(err))
    }
}