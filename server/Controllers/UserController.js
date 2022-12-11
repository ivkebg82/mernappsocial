import UserModel from '../Models/UserModel.js'


const getUsers = async (req, res) => {
    const users = await UserModel.find()

    res.send(users)
}

export {
    getUsers
}