const Email = require("../Models/mail");


exports.emailSender = async (req,res) => {
    try
    {
    
    const {name,email,subject,body} = req.body;

    const mail = await Email.create({
        name,
        email,
        subject,
        body,
    })
    
    res.json({
        sucess:true,
        message:"Sucessfully Send data"
    })
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({
            status : false,
            message:`"Something went wrong" ${error}`
        })
    }
}