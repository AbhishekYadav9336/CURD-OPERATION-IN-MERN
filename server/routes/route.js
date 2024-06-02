import express from 'express';
import { addUser } from '../controller/user-controller.js';
import { getUsers } from '../controller/user-controller.js';
import { getUser } from '../controller/user-controller.js';
import { editUser } from '../controller/user-controller.js';
import { deleteUser } from '../controller/user-controller.js';
// we use express.Router for the routing
const router= express.Router();
// bcz in api.js we use axios.post api so here also we use
router.post('/add',addUser);
    // Optionally, you can send a response back to the client
    // res.send("Received POST request to /add");
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);
export default router;
