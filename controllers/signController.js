const User = require("../models/users");
const { hashPassword, comparePassword } = require("../middleware/bcrypt");

module.exports.sign_in = async (req, res) => {
  try {
    const { mail, password } = req.body;
    await User.findOne({ mail: mail}).then(async (user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        let compare = await comparePassword(password, user.password);
        if (compare) {
          res.status(200).send(user);
        } else {
          res.status(400).json({ error: "Wrong password" });
        }
      }
    });

    res.json(User);
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.sign_up = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.surname ||
      !req.body.mail ||
      !req.body.password 
    )
      res.status(404).send({ error: "Missing parameters" });

    const { name, surname, mail, password, userType, studentId } = req.body;
    User.findOne({
      mail: mail,
    }).then(async (user) => {
      if (user) {
        res.status(400).json({ error: "User already exists" });
      } else {
        let enc_password = await hashPassword(password);

        const user = new User({
          name:name,
          surname:surname,
          mail:mail,
          password: enc_password,
          userType: userType,
          studentId: studentId,
        });
        await user.save();
        res.json(user);
      }
    });
  } catch {
    res.json({ error: "error" });
  }
};
