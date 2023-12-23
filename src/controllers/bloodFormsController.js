const BloodDonation = require("../models/BloodDonationInfo");

getAllDonationDetails = async (req, res) => {
  try {
    const getDB = await BloodDonation.find();
    res.json(getDB);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

addBloodDonationFrom = async (req, res) => {
  try {
    const addBD = new BloodDonation(req.body);
    addBD.save().then((result) => {
      console.log(`POST_Blood Donors Info ${addBD.name} added id ${addBD.id}`);
      res.status(201).json({ message: "----- addBD Created ------" });
    });
  } catch (erro) {
    res.status(500).json({ error: "XXXX Error ADDED addBD XXXXX" });
  }
};

// deleteTaskById = async (req, res) => {
//   const taskId = req.params.id;

//   try {
//     const deletedTask = await Task.findByIdAndDelete(taskId);
//     if (!deletedTask) {
//       return res.status(404).json({ error: 'Task not found' });
//     }
//     res.json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting task' });
//   }
// };

// AlterTask = async (req, res) => {
//   const id = req.params.id
//   const taskReWrite = req.body;

//   try {
//     const changeTask = await Task.findByIdAndUpdate(id, taskReWrite);
//     if (!changeTask) {
//       return res.status(404).json({ error: 'Task not Changed' });
//     }
//     res.json({ message: 'Task changed as you mentioned' });

//   } catch (error) {
//     res.status(500).json({ error: 'Error Re-Write task' });
//   }
// }

// findByIdTask = async (req, res) => {
//   const id = req.params.id
//   const findId = req.body;

//   try {
//     const TaskValue = await Task.findById(id, findId);
//     if (!TaskValue) {
//       return res.status(404).json({ error: "Task not found please check ID" })
//     }
//     res.json(TaskValue)

//   } catch (error) {
//     res.status(500).json({ error: 'Error on connection' })

 //  }
//}

module.exports = { getAllDonationDetails, addBloodDonationFrom };
