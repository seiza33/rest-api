import express from "express";

import { azuriranjeProizvoda, brisanjeProizvoda, noviProizvod, samoJedanProizvod, sviProizvodi } from "../controlers/sminka.js";


const router = express.Router();




// GET metod za sve proizvode
router.get('/', sviProizvodi);

//POST metod za kreiranje novog proizvoda
router.post('/', noviProizvod );

// GET metod za jedan proizvod
router.get('/:id', samoJedanProizvod);

// DELETE metod
router.delete('/:id', brisanjeProizvoda);

// PATCH metod
router.patch('/:id', azuriranjeProizvoda)








export default router;