import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); //remove ourself for not being in the list

    res.status(200).json(users);
  } catch (error) {
    console.log("Error in get users controller ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
