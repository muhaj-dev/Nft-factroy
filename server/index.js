const express = require('express');
const cors =  require('cors'); 
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

async function createPackage(
    _title, _description, _whitepaper, _goal,
    _discordlink, _projectwebsite, _discordId,
    _emailAddress, _members, _twitter, _image,
    _mintDate, _mintPrice, _mintSupply, _marketing,
    _presale, _moreInfo
    ) {
   
    const uri = process.env.uri;   
    const client = new MongoClient(uri);
    await client.connect();
    const dbName = "nftFactory";
    const collectionName = "NFTs";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const package = {
        title: _title,
        description: _description,
        whitepaper: _whitepaper,
        goal: _goal,
        discordlink: _discordlink,
        projectWebsite: _projectwebsite,
        discordID: _discordId,
        emailAddress: _emailAddress,
        members: _members,
        twitter: _twitter,
        linkedin: _linkedin,
        image: _image,
        mintDate: _mintDate,
        mintPrice: _mintPrice,
        mintSupply: _mintSupply,
        marketing: _marketing,
        presale: _presale,
        moreInfo: _moreInfo,
    };
    try {
        const insertManyResult = await collection.insertOne(package);
        console.log(`${package.id} successfully inserted.\n`);
        await client.close();
        return true;
      } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
      }
     
  // Make sure to call close() on your client to perform cleanup operations
    await client.close(); 
}   

app.post("/create", (req, res) => {
    async function _createPackage() {
        const {
            title, description, whitepaper, goal, discordlink, projectWebsite,
            discordID, emailAddress, members, twitter, linkedin, image,
            mintDate, mintPrice, mintSupply, marketing, presale, moreInfo
        } = req.body;
        const success = await createPackage(
            title, description, whitepaper, goal, discordlink, projectWebsite,
            discordID, emailAddress, members, twitter, linkedin, image,
            mintDate, mintPrice,mintSupply, marketing, presale, moreInfo
        )
        if (success) {
            res.send(success)
        }else{
          res.status(400).send("unable to save to database");
          }
    }_createPackage()
})





const port = 8000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}!.`)
})