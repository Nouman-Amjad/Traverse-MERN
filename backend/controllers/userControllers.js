import User from '../models/User.js'

// Creating new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const saved = await newUser.save()

        res
            .status(200)
            .json({ success: true, message: "User Created", data: saved })
    }
    catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Failed to create. Try Again" });
    }
};


// Update User 

export const updateUser = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedObj = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res
            .status(200)
            .json({
                success: true,
                message: "User Updated Successfully",
                data: updatedObj,
            })

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "User Update Failed :(",
            })
    }
};

// delete User 

export const deleteUser = async (req, res) => {

    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: "User Deleted Successfully",
            })

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "User Delete Failed :(",
            })
    }
};

// getSingle User 

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const obj = await User.findById(id);

        res
            .status(200)
            .json({
                success: true,
                message: "User Found",
                data: obj,
            })

    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: "User not Found :(",
            })
    }
};

// getAll User 

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            message: "Users Found",
            data: users,
        });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "Users not Found :(",
            })
    }
};