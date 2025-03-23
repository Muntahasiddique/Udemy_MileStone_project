function addOrder(req, res) {
    const order = req.body;
    orders.push(order);
    res.json(order);
}
module.exports = {
    addOrder
}