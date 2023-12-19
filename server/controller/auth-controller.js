const user = require('../model/model')
const bcrypt = require('bcryptjs');

const home = async(req, res) => {
    try{
    res.status(200).send("Done")

    }catch(e){
        console.log(e)
    }

}

const register = async(req, res, next) => {
    try{

        const {username, email, password} = req.body;
        
        const userExists = await user.findOne({email});

        if(userExists){
            return res.status(400).send("email already exists");
        }

        //hash the password
        // const saltRound = 10;
        // const hash_pass = await bcrypt.hash(password, saltRound);

        const userCreation = await user.create({username, email, password})

        res.status(201).json({user: userCreation, token: await userCreation.generateToken(), userId: userCreation._id.toString()})
    }catch(e){
        // console.log(e);
        next(e);
    }
};


const login = async(req, res) => {
    try{
        console.log(req.body);
        const {email, password} = req.body;
        console.log(email);
        console.log(password);

        const emailcheck = await user.findOne({email})
        console.log(emailcheck)

        if(!emailcheck){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const passcheck = await emailcheck.comparePassword(password);
        // const passcheck = await bcrypt.compare(password, emailcheck.password);
        if(passcheck){
        res.status(201).json({messsage: "login success", token: await emailcheck.generateToken(), userId: emailcheck._id.toString()})
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }

    }catch(e){
        res.status(500).send(e);
    }
}

module.exports = {home, register, login} ;