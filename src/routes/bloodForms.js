const express = require('express');
const router = express.Router();
const BloodController = require('../controllers/bloodFormsController');

router.get('/DonationFroms', BloodController.getAllDonationDetails);
router.post('/DonationFroms', BloodController.addBloodDonationFrom)
// router.delete('/tasks/:id', taskController.deleteTaskById)
// router.put('/tasks/:id', taskController.AlterTask)
// router.get('/tasks/:id', taskController.findByIdTask)

module.exports = router;
