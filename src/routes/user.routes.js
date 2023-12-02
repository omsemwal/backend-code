import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.js"


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )


export default router



// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.js";



// const router= Router()

// // router.route("/register").post(
//     // upload.fields([
//     //     {
//     //         name: "avatar",
//     //         maxCount: 1
//     //     }, 
//     //     {
//     //         name: "coverImage",
//     //         maxCount: 1
//     //     }
//     // ]),
// //     registerUser
// //     )


// router.post("/register", upload.fields([
//     {
//         name: "avatar",
//         maxCount: 1
//     }, 
//     {
//         name: "coverImage",
//         maxCount: 1
//     }
// ]), registerUser)

// export default router