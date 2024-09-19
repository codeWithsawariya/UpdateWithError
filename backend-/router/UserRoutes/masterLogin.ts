import { Router } from 'express';
import  {demo, signIn} from '../../controller/auth.controller'

const router = Router();
function abc(){
    console.log("abc working");
    
}

router.post('/login',abc,signIn);
router.post('/abc',demo);

export default router;
