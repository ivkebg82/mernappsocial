import UserModel from "../Models/UserModel.js"
const registerController = async (req, res) => {
    if (req.query.confirmPassword !== req.query.password) {
        const error = 'You must enter same values twice!'

        res.send(error)

    }
    const user = await new UserModel({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        userName: req.query.userName,
        password: req.query.password,
        confirmPassword: req.query.confirmPassword
    })
    try {
        await user.save()
        res.send({
            user
        })


    } catch (e) {
        res.send(e)
    }
}

const loginController = async (req, res) => {

    res.send('hello login')
}
export {
    registerController,
    loginController
}