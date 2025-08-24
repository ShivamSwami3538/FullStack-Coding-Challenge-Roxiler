import { Router } from 'express';
import { 
  registerUser, 
  loginUser, 
  getStores, 
  submitRating, 
  updatePassword, 
  getUserRatings 
} from '../controllers';

const router = Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update-password', updatePassword);

// Store routes
router.get('/stores', getStores);
router.post('/stores/:storeId/rate', submitRating);
router.get('/users/:userId/ratings', getUserRatings);

export default router;