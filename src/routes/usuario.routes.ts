import { Router } from 'express';
import { 
    selectUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario
      } from '../controller/usuario.controller'


const router = Router();

router.get('/prueba', selectUsuario );
router.post('/prueba', insertUsuario );
router.put('/prueba/:id', updateUsuario );
router.delete('/prueba/:id',deleteUsuario);
export default router;