const validateURL = (req, res, next) => {
    console.log("We should validate each transaction")

    next();
};

module.exports = { validateURL }