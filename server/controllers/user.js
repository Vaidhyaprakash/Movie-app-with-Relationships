const { User } = require("../models");

exports.showUsers = async function showUsers(req, h) {
  try {
    const users = await User.findAll();
    return h.response(users);
  } catch (err) {
    console.log(err);
  }
};

exports.addUser = async function addUser(req, h) {
  const { email, name, age, password } = req.payload;
  try {
    const user = await User.create({ email, name, age, password });
    return `New User ${name} is created`;
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async function updateUser(req, h) {
  const { name, age, email, password } = req.payload;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user == null) {
      return "No Such user Exists";
    } else {
      await User.update(
        { email, name, age, password },
        {
          where: {
            email,
          },
        }
      );
      return `${name} User's details updated successfully.`;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async function deleteUser(req, h) {
  const { email } = req.payload;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user == null) {
      return "No Such user Exists";
    } else {
      await User.destroy({
        where: {
          email,
        },
      });
      return `User Deleted Successully`;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.user = async function user(req, h) {
  const { email } = req.payload;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
      include: ["BOOKINGS"],
    });
    if (user == null) {
      return "No such user Exists";
    } else {
      return h.response(user);
    }
  } catch (err) {
    console.log(err);
  }
};
