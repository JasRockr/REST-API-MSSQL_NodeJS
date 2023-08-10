import { Router } from "express";
import {
  getAllAsesores,
  getAsesorById,
  getTotalAsesores,
  addNewAsesor,
  deleteAsesorById,
  updateAsesorById,
} from "../controllers/asesores.controller";

const router = Router();

router.get("/asesores", getAllAsesores);

router.post("/asesores", addNewAsesor);

router.get("/asesores/count", getTotalAsesores);

router.get("/asesores/:id", getAsesorById);

router.delete("/asesores/:id", deleteAsesorById);

router.put("/asesores/:id", updateAsesorById);

export default router;
