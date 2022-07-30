const { Router } = require('express');
const router = Router();
const {
    createCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
} = require('../public/controllers/customer-controller')

router.post("/customers", createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customers:id", getCustomer);
router.put("/customers:id", updateCustomer);
router.delete("/customers:id", deleteCustomer)

module.exports = router