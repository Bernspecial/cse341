
const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');


// Get all contacts
const getAllData = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Get a single contact by ID
const getSingleData = async (req, res) => {
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
    // const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: new ObjectId(contactId) }); // Use ObjectId here
    // result.toArray().then((lists) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.status(200).json(lists[0]);
    // });

};

// const getSingleData = async (req, res) => { const contactId = req.params.id; console.log('Received ID:', contactId); if (!ObjectId.isValid(contactId)) { return res.status(400).send('Invalid ID format'); } const objectId = new ObjectId(contactId); try { const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: objectId }); if (!result) { return res.status(404).send('Contact not found'); } res.setHeader('Content-Type', 'application/json'); res.status(200).json(result); } catch (error) { res.status(500).send('An error occurred while fetching the contact'); } };

module.exports = { getAllData, getSingleData };