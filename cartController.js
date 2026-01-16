const getCart = (req, res) => {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
};

const addCart = (req, res) => {
  const { userId } = req.params;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};

module.exports={
    getCart,
    addCart
}
