import { Router } from "express";
import { getResponse } from "../services/api.service";

const ApiController: Router = Router();

ApiController.get('/', getResponse);

export default ApiController;