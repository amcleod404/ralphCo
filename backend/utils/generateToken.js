import jwt from 'jsonwebtoken'

const generateToken = (res, id) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })

    // Set JWT as HTTP-Only Cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'dev',
        sameSite: 'strict',
        maxAge: 1 * 24 * 60 * 60 * 1000
    })

}

export default generateToken