const Lectures = require("../models/lectures");

module.exports.getAllLectures = async (req, res) => {
    try {
         await Lectures.find().then(lectures =>{
           res.status(200).send(lectures);
         }).catch(err=>{
            res.json({ error: err });
         });
      
    } catch (err) {
        res.json({ error: err });
    }
}