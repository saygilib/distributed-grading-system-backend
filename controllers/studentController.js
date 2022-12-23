const User = require("../models/users");

//ödevinin çözümünü yükler
module.exports.uploadAnswerSheet = async (req, res) => {};
//diğer yüklenen çözümleri değerlendirir
module.exports.reviewAnswerSheet = async (req, res) => {};
//yüklediği ödevleri görüntüler
module.exports.getUploads = async (req, res) => {};
//değerlendirmesi için atanan ödevleri görüntüler
module.exports.getAssignments = async (req, res) => {};
//yaptığı değerlendirmeleri görüntüler
module.exports.getReviews = async (req, res) => {};
//ona atanan ödevleri görüntüler
module.exports.getMyAssignments = async (req, res) => {};

module.exports.getAllUsers = async (req,res) =>{
    const users = await User.find();
    res.json(users);
}
