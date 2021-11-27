const newOrder = async (req, res) => {
    res.send('new')
}

const getOrder = async (req, res) => {
    res.send(req.body)
}

const getAllOrder = async (req, res) => {
    res.send(req.body)
}

const deleteOrder = async (req, res) => {
    res.send(req.body)
}

module.exports = {
    newOrder, getOrder, getAllOrder, deleteOrder
}