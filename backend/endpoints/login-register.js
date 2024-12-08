import express from 'express';
import { addUser } from '../database-related/manageUsers.js';
const loginRegisterRouter = express.Router();


loginRegisterRouter.post('/register', async (req,res)=>{

    try {

        const body = req.body
        var dob = body.date_of_birth.split("/");

        if (body.username === "" || body.password === "" || body.name === "" || body.email === "" || body.date_of_birth === "") {
            return res.status(400).json({message: "Input feilds cant be empty."})
        }
        if (dob.length !== 3) {
            return res.status(400).json({ message: "Invalid date format. Use MM/DD/YYYY format." });
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
        if (!emailRegex.test(body.email)) {
            return res.status(400).json({ message: "Invalid email format." });
        }

        var month = parseInt(dob[0]);
        var day = parseInt(dob[1])
        var year = parseInt(dob[2])

        if (month < 1 || month > 12) {
            return res.status(400).json({ message: "Invalid month. Must be [1,12]." });
        }
        if (day < 1 || day > 31 || (month === 2 && day > 29) || (month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
            return res.status(400).json({ message: "Invalid day for the given month." });
        }
        if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
            return res.status(400).json({ message: "Invalid year." });
        } 

        const result = await req.collection.findOne({username: body.username})
        if (result) {
            return res.status(400).json({message: "Username already exists. Choose a different one."})
        }

        const user = {
            "username": req.body.username,
            "password": req.body.password,
            "name": req.body.name,
            "email": req.body.email,
            "date_of_birth": req.body.date_of_birth,
            "followers": 0,
            "last_room_joined": null,
            "account_bio": ""
        }

        addUser(req.collection, user)
        return res.status(200).json({message: "Sucessful"});

    } catch (error) {
        throw new Error("Database: Registeration - " + error)
    }
})

loginRegisterRouter.post("/login", async (req,res)=>{

    const result = await req.collection.findOne({username: req.body.username, password: req.body.password})

    if (!result) {
        return res.status(400).json({message: "Invalid unsername or password. Try again."})
    }

    const {password, ...clientData} = result
    return res.status(200).json(clientData);
})

export default loginRegisterRouter;