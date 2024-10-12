const User = require('../models/userModel');

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.createUser = async (userData) => {
    return await User.create(userData);
};
