import express from "express";
import { createUser, getUsers, getById, deleteUser, updateUser } from "../controllers/users";

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;