import exprees from "express"
import { getBook } from "../controller/bookController.js";

const router = exprees.Router()

router.get("/",getBook)

export default router;
