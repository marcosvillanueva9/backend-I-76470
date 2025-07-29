import { Router } from 'express';
import userModel from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
});

// completando el CRUP

router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        const newUser = new userModel({ first_name, last_name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

router.put('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const { first_name, last_name, email } = req.body;
        const user = await userModel.findOne({ _id: uid });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (first_name) user.first_name = first_name;
        if (last_name) user.last_name = last_name;
        if (email) user.email = email;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

router.delete('/:uid', async (req, res) => {
    try {
        const { uid } = req.params;
        const deletedUser = await userModel.deleteOne({ _id: uid });
        if (deletedUser.deletedCount > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

export default router;