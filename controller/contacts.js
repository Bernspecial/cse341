
const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');


// Get all contacts
const getAllData = async (req, res) => {
    // swagger.tags = [contacts]
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Get a single contact by ID
const getSingleData = async (req, res) => {
    // swagger.tags = [contacts]
    const contactId = req.params.id; // Get the ID from the route parameters
    try {
        const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: new ObjectId(contactId) }); // Use ObjectId here

        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result); // Return the found contact
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contact', error: error.message });
    }

};

const createUser = async (req, res) => {
// swagger.tags = [contacts]
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);

    if (result.acknowledged) {
        res.status(200).send();
    } else {
        res.status(500).json(result.error || "Some error occured while creating the user.");
    }

};

const updateUser = async (req, res) => {
    // swagger.tags = [contacts]
    const contactId = req.params.id;
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: new ObjectId(contactId) }, contact);
    if (result.modifiedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(result.error || "Some error occured while updating the user.");
    }

};

const deleteUser = async (req, res) => {
    // swagger.tags = [contacts]
    const contactId = req.params.id;

    const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: new ObjectId(contactId) });
    if (result.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(result.error || "Some error occured while deleting the user.");
    }
}


module.exports = { getAllData, getSingleData, createUser, updateUser, deleteUser };