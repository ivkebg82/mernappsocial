const registerController = async (req, res) => {
    res.send('hello register')
}

const loginController = async (req, res) => {
    res.send('hello login')
}
export {
    registerController,
    loginController
}