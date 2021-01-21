import { Router } from 'express';
import searchController from './search/searchController';
import detailsController from './details/detailsController';

const router = Router();

router.get('/', searchController);
router.get('/:id', detailsController);

export default router;
