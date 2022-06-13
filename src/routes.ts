import { Router } from "express";

const router = Router();

router.get('/users', (request, response) => {
    response.status(201).send({
        message: "Lista de usuarios."
    });
});


router.post('/users', (request, response) => {
    response.status(201).send();
});

export { router }