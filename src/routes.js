import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SkillController from './app/controllers/SkillController';
import UserSkillController from './app/controllers/UserSkillController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/skills', SkillController.store);
routes.post('/usersSkills', UserSkillController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users/:id', UserController.index);
routes.get('/skills', SkillController.index);
routes.put('/skills', SkillController.update);
routes.delete('/skills', SkillController.delete);
routes.get('/usersSkills', UserSkillController.index);

export default routes;