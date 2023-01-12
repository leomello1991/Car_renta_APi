import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationsController } from '../modules/cars/usecase/createSpecification/CreateSpecificationsController';

const specificationsRoutes = Router();

const createCategoryController = new CreateSpecificationsController();
specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createCategoryController.handle);

export { specificationsRoutes };
