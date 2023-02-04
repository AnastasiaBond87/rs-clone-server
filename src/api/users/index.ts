import { app } from '../../app';
import { getUser } from './handlers/getUser';
import { getUsers } from './handlers/getUsers';
import { updateUser } from './handlers/updateUser';
import { hideUser } from './handlers/hideUser';
import { authUser } from './handlers/authUser';
import { addUser } from './handlers/addUser';

app.post('/api/users', addUser);

app.get('/api/users', getUsers);

app.get('/api/users/:id', getUser);

app.patch('/api/users/:id', updateUser);

app.delete('/api/users/:id', hideUser);

app.get('/api/users-auth', authUser);
