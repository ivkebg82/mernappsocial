import UserModel from "../Models/UserModel.js"
const registerController = async (req, res) => {
    if (req.query.confirmPassword !== req.query.password) {
        const error = 'You must enter same values twice!'
        res.status(500).json({
            message: error
        })
        return ''

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
        res.status(200).json({
            data: user
        })


    } catch (error) {
        res.status(500).json({
            message: "something get wrong"
        })

    }
}

const loginController = async (req, res) => {

    res.send('hello login')
}
export {
    registerController,
    loginController
}