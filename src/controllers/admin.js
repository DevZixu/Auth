export function admin(req,res) {
    res.status(200).json({
        "message": "Authorized as admin"
    })
}