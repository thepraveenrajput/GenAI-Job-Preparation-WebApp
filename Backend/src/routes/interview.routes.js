const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const interviewController = require("../controllers/interview.controller");
const upload = require("../middlewares/file.middleware");

const interviewRouter = express.Router();

/*
 *  @route POST /api/interview/
 *  @description Generate new interview report based on the user  resume, self description and job description
 *  @access  Private
 */

interviewRouter.post(
  "/",
  authMiddleware.authUser,
  upload.single("resume"),
  interviewController.generateInterviewReportController,
);

/*
  *  @route GET /api/interview/report/:interviewId
  *  @description Get interview report by interviewId.
  * @access  Private
*/
interviewRouter.get(
  "/report/:interviewId",
  authMiddleware.authUser,
  interviewController.getInterviewReportByIdController,
);


/* 
* @Route GET /api/interview/
* @description Get all interview reports of the logged in user.
* @access Private
*/

interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController);

/*
* @Route GET /api/interview/resume/pdf
* @description Generate resume PDF based on user self description, resume and job description.
* @access Private
*/

interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, upload.single("resume"), interviewController.generateResumePdfController);

module.exports = interviewRouter;
