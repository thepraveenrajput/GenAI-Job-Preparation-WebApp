// // // // const pdfParse = require("pdf-parse");
// // // // const {generateInterviewReport} = require("../services/ai.service");
// // // // const interviewReportModel = require("../models/interviewReport.model");

// // // // async function generateInterviewReportController(req, res) {
// // // //   // const resumeFile = req.file;
// // // //    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
// // // //    const { selfDescription, jobDescription } = req.body;

// // // //    const interviewReportByAi = await generateInterviewReport({
// // // //       resume: resumeContent.text,
// // // //       selfDescription,
// // // //       jobDescription,
// // // //    });

// // // //    // Save the interview report to the database
// // // //    const interviewReport = await interviewReportModel.create({
// // // //       user : req.user.id, // Assuming you have user authentication and the user ID is available in req.user
// // // //       resume : resumeContent.text,
// // // //       jobDescription,
// // // //       selfDescription,
// // // //       ...interviewReportByAi
// // // //    });

// // // //    res.status(201).json({
// // // //       message : "Interview report generated successfully",
// // // //       interviewReport
// // // //    });

// // // // };

// // // // module.exports = {
// // // //    generateInterviewReportController
// // // // }

// // // // const interviewReportModel = require("../models/interviewReport.model");
// // // // const { generateInterviewReport } = require("../services/ai.service");

// // // // async function generateInterviewReportController(req, res) {
// // // //   const { resume, selfDescription, jobDescription } = req.body;

// // // //   const report = await generateInterviewReport({
// // // //     resume,
// // // //     selfDescription,
// // // //     jobDescription,
// // // //   });

// // // //   /* ---------- FIX AI RESPONSE STRUCTURE ---------- */

// // // //   const technicalQuestions = (report.technicalQuestions || []).map((q) =>
// // // //     typeof q === "string"
// // // //       ? {
// // // //           question: q,
// // // //           intention: "Evaluate technical understanding",
// // // //           answer: "Explain the concept clearly with examples and real-world usage",
// // // //         }
// // // //       : q
// // // //   );

// // // //   const behavioralQuestions = (report.behavioralQuestions || []).map((q) =>
// // // //     typeof q === "string"
// // // //       ? {
// // // //           question: q,
// // // //           intention: "Assess communication and teamwork",
// // // //           answer: "Answer using the STAR method",
// // // //         }
// // // //       : q
// // // //   );

// // // //   const skillGaps = (report.skillGaps || []).map((s) =>
// // // //     typeof s === "string"
// // // //       ? {
// // // //           skill: s,
// // // //           severity: "medium",
// // // //         }
// // // //       : s
// // // //   );

// // // //   const preparationPlan = (report.preparationPlan || []).map((p, index) =>
// // // //     typeof p === "string"
// // // //       ? {
// // // //           day: index + 1,
// // // //           focus: p,
// // // //           tasks: [
// // // //             "Study related concepts",
// // // //             "Practice coding problems",
// // // //             "Review documentation",
// // // //           ],
// // // //         }
// // // //       : p
// // // //   );

// // // //   const interviewReport = await interviewReportModel.create({
// // // //     jobDescription,
// // // //     resume,
// // // //     selfDescription,
// // // //     matchScore: report.matchScore,
// // // //     technicalQuestions,
// // // //     behavioralQuestions,
// // // //     skillGaps,
// // // //     preparationPlan,
// // // //     user: req.user._id,
// // // //   });

// // // //   res.status(201).json({
// // // //     message: "Interview report generated successfully",
// // // //     interviewReport,
// // // //   });
// // // // }

// // // // module.exports = { generateInterviewReportController };

// // // const interviewReportModel = require("../models/interviewReport.model");
// // // const { generateInterviewReport } = require("../services/ai.service");

// // // /*
// // //  * @description Controller to generate interview report based on user resume, self description and job description. It also saves the report to the database linked to the user.
// // //  */

// // // async function generateInterviewReportController(req, res) {
// // //   try {
// // //     let resume = req.body.resume;

// // //     if (req.file) {
// // //       resume = req.file.buffer.toString();
// // //     }

// // //     const { selfDescription, jobDescription } = req.body;
// // //     //const { resume, selfDescription, jobDescription } = req.body;

// // //     const report = await generateInterviewReport({
// // //       resume,
// // //       selfDescription,
// // //       jobDescription,
// // //     });

// // //     /* ---------- FIX AI RESPONSE STRUCTURE ---------- */

// // //     const technicalQuestions = (report.technicalQuestions || []).map((q) =>
// // //       typeof q === "string"
// // //         ? {
// // //             question: q,
// // //             intention: "Evaluate technical understanding",
// // //             answer: "Explain clearly with examples",
// // //           }
// // //         : q,
// // //     );

// // //     const behavioralQuestions = (report.behavioralQuestions || []).map((q) =>
// // //       typeof q === "string"
// // //         ? {
// // //             question: q,
// // //             intention: "Assess communication and teamwork",
// // //             answer: "Answer using the STAR method",
// // //           }
// // //         : q,
// // //     );

// // //     const skillGaps = (report.skillGaps || []).map((s) =>
// // //       typeof s === "string"
// // //         ? {
// // //             skill: s,
// // //             severity: "medium",
// // //           }
// // //         : s,
// // //     );

// // //     const preparationPlan = (report.preparationPlan || []).map((p, index) =>
// // //       typeof p === "string"
// // //         ? {
// // //             day: index + 1,
// // //             focus: p,
// // //             tasks: [
// // //               "Study related concepts",
// // //               "Practice coding problems",
// // //               "Review documentation",
// // //             ],
// // //           }
// // //         : p,
// // //     );

// // //     const interviewReport = await interviewReportModel.create({
// // //       title: report.title || "Software Developer",
// // //       jobDescription,
// // //       resume,
// // //       selfDescription,
// // //       matchScore: report.matchScore,
// // //       technicalQuestions,
// // //       behavioralQuestions,
// // //       skillGaps,
// // //       preparationPlan,
// // //       user: req.user?._id,
// // //     });

// // //     res.status(201).json({
// // //       message: "Interview report generated successfully",
// // //       interviewReport,
// // //     });
// // //   } catch (error) {
// // //     console.error(error);

// // //     res.status(500).json({
// // //       message: "Failed to generate interview report",
// // //       error: error.message,
// // //     });
// // //   }
// // // }

// // // /*
// // //  * @description Controller to fetch a specific interview report by ID. It checks if the report belongs to the authenticated user before returning it.
// // //  */

// // // async function getInterviewReportByIdController(req, res) {
// // //   const { interviewId } = req.params;
// // //   const interviewReport = await interviewReportModel.findOne({
// // //     _id: interviewId,
// // //     user: req.user?.id,
// // //   });
// // //   if (!interviewReport) {
// // //     return res.status(404).json({
// // //       message: "Interview report not found",
// // //     });
// // //   }
// // //   res.status(200).json({
// // //     message: "Interview report fetched successfully",
// // //     interviewReport,
// // //   });
// // // }

// // // /*
// // //  * @description Controller to fetch all interview reports of the authenticated user.
// // //  */

// // // async function getAllInterviewReportsController(req, res) {
// // //   const interviewReports = await interviewReportModel.find({
// // //     user: req.user?.id}).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v  -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan");

// // //   res.status(200).json({
// // //     message: "Interview reports fetched successfully",
// // //     interviewReports,
// // //   });
// // // }

// // // module.exports = {
// // //   generateInterviewReportController,
// // //   getInterviewReportByIdController,
// // //   getAllInterviewReportsController,
// // // };

// // // const interviewReportModel = require("../models/interviewReport.model");
// // // const { generateInterviewReport } = require("../services/ai.service");
// // // const pdfParse = require("pdf-parse");

// // const interviewReportModel = require("../models/interviewReport.model");
// // const { generateInterviewReport } = require("../services/ai.service");

// // const pdfParseLib = require("pdf-parse");
// // const pdfParse = pdfParseLib.default || pdfParseLib;

// // /*
// //  * @description Generate interview report using AI and save it to database
// //  */

// // async function generateInterviewReportController(req, res) {
// //   try {
// //     let resume = req.body.resume;

// //     // If resume file uploaded
// //     if (req.file) {
// //       const pdfData = await pdfParse(req.file.buffer);
// //       resume = pdfData.text;
// //     }

// //     const { selfDescription, jobDescription } = req.body;

// //     const report = await generateInterviewReport({
// //       resume,
// //       selfDescription,
// //       jobDescription,
// //     });

// //     /* ---------- Normalize AI Response ---------- */

// //     const technicalQuestions = (report.technicalQuestions || []).map((q) =>
// //       typeof q === "string"
// //         ? {
// //             question: q,
// //             intention: "Evaluate technical understanding",
// //             answer: "Explain clearly with examples",
// //           }
// //         : q,
// //     );

// //     const behavioralQuestions = (report.behavioralQuestions || []).map((q) =>
// //       typeof q === "string"
// //         ? {
// //             question: q,
// //             intention: "Assess communication and teamwork",
// //             answer: "Answer using the STAR method",
// //           }
// //         : q,
// //     );

// //     const skillGaps = (report.skillGaps || []).map((s) =>
// //       typeof s === "string"
// //         ? {
// //             skill: s,
// //             severity: "medium",
// //           }
// //         : s,
// //     );

// //     const preparationPlan = (report.preparationPlan || []).map((p, index) =>
// //       typeof p === "string"
// //         ? {
// //             day: index + 1,
// //             focus: p,
// //             tasks: [
// //               "Study related concepts",
// //               "Practice coding problems",
// //               "Review documentation",
// //             ],
// //           }
// //         : p,
// //     );

// //     /* ---------- Save Report ---------- */

// //     const interviewReport = await interviewReportModel.create({
// //       title:
// //         report.title || jobDescription?.split("\n")[0] || "Software Developer",
// //       jobDescription,
// //       resume,
// //       selfDescription,
// //       matchScore: report.matchScore,
// //       technicalQuestions,
// //       behavioralQuestions,
// //       skillGaps,
// //       preparationPlan,
// //       user: req.user?._id,
// //     });

// //     res.status(201).json({
// //       message: "Interview report generated successfully",
// //       interviewReport,
// //     });
// //   } catch (error) {
// //     console.error(error);

// //     res.status(500).json({
// //       message: "Failed to generate interview report",
// //       error: error.message,
// //     });
// //   }
// // }

// // /*
// //  * @description Get single interview report by ID
// //  */

// // async function getInterviewReportByIdController(req, res) {
// //   const { interviewId } = req.params;

// //   const interviewReport = await interviewReportModel.findOne({
// //     _id: interviewId,
// //     user: req.user?._id,
// //   });

// //   if (!interviewReport) {
// //     return res.status(404).json({
// //       message: "Interview report not found",
// //     });
// //   }

// //   res.status(200).json({
// //     message: "Interview report fetched successfully",
// //     interviewReport,
// //   });
// // }

// // /*
// //  * @description Get all interview reports of logged in user
// //  */

// // async function getAllInterviewReportsController(req, res) {
// //   const interviewReports = await interviewReportModel
// //     .find({ user: req.user?._id })
// //     .sort({ createdAt: -1 })
// //     .select(
// //       "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
// //     );

// //   res.status(200).json({
// //     message: "Interview reports fetched successfully",
// //     interviewReports,
// //   });
// // }

// // module.exports = {
// //   generateInterviewReportController,
// //   getInterviewReportByIdController,
// //   getAllInterviewReportsController,
// // };

// // const pdfParse = require("pdf-parse");
// // const {
// //   generateInterviewReport,
// //   generateResumePdf,
// // } = require("../services/ai.service");
// // const interviewReportModel = require("../models/interviewReport.model");

// // /*
// //  * @description Controller to generate interview report based on user self description, resume and job description.
// //  */
// // async function generateInterviewReportController(req, res) {
// //   const resumeContent = await new pdfParse.PDFParse(
// //     Uint8Array.from(req.file.buffer),
// //   ).getText();
// //   const { selfDescription, jobDescription } = req.body;

// //   const interViewReportByAi = await generateInterviewReport({
// //     resume: resumeContent.text,
// //     selfDescription,
// //     jobDescription,
// //   });

// //   const interviewReport = await interviewReportModel.create({
// //     user: req.user.id,
// //     resume: resumeContent.text,
// //     selfDescription,
// //     jobDescription,
// //     ...interViewReportByAi,
// //   });

// //   res.status(201).json({
// //     message: "Interview report generated successfully.",
// //     interviewReport,
// //   });
// // }

// // /*
// //  * @description Controller to get interview report by interviewId.
// //  */
// // async function getInterviewReportByIdController(req, res) {
// //   const { interviewId } = req.params;

// //   const interviewReport = await interviewReportModel.findOne({
// //     _id: interviewId,
// //     user: req.user.id,
// //   });

// //   if (!interviewReport) {
// //     return res.status(404).json({
// //       message: "Interview report not found.",
// //     });
// //   }

// //   res.status(200).json({
// //     message: "Interview report fetched successfully.",
// //     interviewReport,
// //   });
// // }

// // /*
// //  * @description Controller to get all interview reports of logged in user.
// //  */
// // async function getAllInterviewReportsController(req, res) {
// //   const interviewReports = await interviewReportModel
// //     .find({ user: req.user.id })
// //     .sort({ createdAt: -1 })
// //     .select(
// //       "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
// //     );

// //   res.status(200).json({
// //     message: "Interview reports fetched successfully.",
// //     interviewReports,
// //   });
// // }

// // /*
// //  * @description Controller to generate resume PDF based on user self description, resume and job description.
// //  */
// // async function generateResumePdfController(req, res) {
// //   const { interviewReportId } = req.params;

// //   const interviewReport =
// //     await interviewReportModel.findById(interviewReportId);

// //   if (!interviewReport) {
// //     return res.status(404).json({
// //       message: "Interview report not found.",
// //     });
// //   }

// //   const { resume, jobDescription, selfDescription } = interviewReport;

// //   const pdfBuffer = await generateResumePdf({
// //     resume,
// //     jobDescription,
// //     selfDescription,
// //   });

// //   res.set({
// //     "Content-Type": "application/pdf",
// //     "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
// //   });

// //   res.send(pdfBuffer);
// // }

// // module.exports = {
// //   generateInterviewReportController,
// //   getInterviewReportByIdController,
// //   getAllInterviewReportsController,
// //   generateResumePdfController,
// // };

// // const pdfParse = require("pdf-parse");
// // const {
// //   generateInterviewReport,
// //   generateResumePdf,
// // } = require("../services/ai.service");
// // const interviewReportModel = require("../models/interviewReport.model");

// // /**
// //  * @description Controller to generate interview report based on user self description, resume and job description.
// //  */
// // async function generateInterviewReportController(req, res) {
// //   try {
// //     // Parse resume PDF
// //     const pdfData = await pdfParse(req.file.buffer);
// //     const resumeContent = pdfData.text;

// //     const { selfDescription, jobDescription } = req.body;

// //     // Generate AI report
// //     const aiReport = await generateInterviewReport({
// //       resume: resumeContent,
// //       selfDescription,
// //       jobDescription,
// //     });

// //     console.log("AI RESPONSE:", JSON.stringify(aiReport, null, 2));

// //     // 🛡 Safety check (important for LLM responses)
// //     aiReport.technicalQuestions = Array.isArray(aiReport.technicalQuestions)
// //       ? aiReport.technicalQuestions
// //       : [];

// //     aiReport.behavioralQuestions = Array.isArray(aiReport.behavioralQuestions)
// //       ? aiReport.behavioralQuestions
// //       : [];

// //     aiReport.skillGaps = Array.isArray(aiReport.skillGaps)
// //       ? aiReport.skillGaps
// //       : [];

// //     aiReport.preparationPlan = Array.isArray(aiReport.preparationPlan)
// //       ? aiReport.preparationPlan
// //       : [];

// //     // Save to database
// //     const interviewReport = await interviewReportModel.create({
// //       user: req.user.id,
// //       resume: resumeContent,
// //       selfDescription,
// //       jobDescription,
// //       ...aiReport,
// //     });

// //     res.status(201).json({
// //       message: "Interview report generated successfully.",
// //       interviewReport,
// //     });
// //   } catch (error) {
// //     console.error(error);

// //     res.status(500).json({
// //       message: "Failed to generate interview report",
// //       error: error.message,
// //     });
// //   }
// // }

// // /**
// //  * @description Controller to get interview report by interviewId.
// //  */
// // async function getInterviewReportByIdController(req, res) {
// //   try {
// //     const { interviewId } = req.params;

// //     const interviewReport = await interviewReportModel.findOne({
// //       _id: interviewId,
// //       user: req.user.id,
// //     });

// //     if (!interviewReport) {
// //       return res.status(404).json({
// //         message: "Interview report not found.",
// //       });
// //     }

// //     res.status(200).json({
// //       message: "Interview report fetched successfully.",
// //       interviewReport,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       message: error.message,
// //     });
// //   }
// // }

// // /**
// //  * @description Controller to get all interview reports of logged in user.
// //  */
// // async function getAllInterviewReportsController(req, res) {
// //   try {
// //     const interviewReports = await interviewReportModel
// //       .find({
// //         user: req.user.id,
// //       })
// //       .sort({ createdAt: -1 })
// //       .select(
// //         "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
// //       );

// //     res.status(200).json({
// //       message: "Interview reports fetched successfully.",
// //       interviewReports,
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       message: error.message,
// //     });
// //   }
// // }

// // /**
// //  * @description Controller to generate resume PDF
// //  */
// // async function generateResumePdfController(req, res) {
// //   try {
// //     const { interviewReportId } = req.params;

// //     const interviewReport =
// //       await interviewReportModel.findById(interviewReportId);

// //     if (!interviewReport) {
// //       return res.status(404).json({
// //         message: "Interview report not found.",
// //       });
// //     }

// //     const { resume, jobDescription, selfDescription } = interviewReport;

// //     const pdfBuffer = await generateResumePdf({
// //       resume,
// //       jobDescription,
// //       selfDescription,
// //     });

// //     res.set({
// //       "Content-Type": "application/pdf",
// //       "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
// //     });

// //     res.send(pdfBuffer);
// //   } catch (error) {
// //     res.status(500).json({
// //       message: error.message,
// //     });
// //   }
// // }

// // module.exports = {
// //   generateInterviewReportController,
// //   getInterviewReportByIdController,
// //   getAllInterviewReportsController,
// //   generateResumePdfController,
// // };

// const {
//   generateInterviewReport,
//   generateResumePdf,
// } = require("../services/ai.service");
// const interviewReportModel = require("../models/interviewReport.model");

// /**
//  * @description Controller to generate interview report based on user self description, resume and job description.
//  */
// async function generateInterviewReportController(req, res) {
//   try {
//     // ✅ Check if resume file exists
//     if (!req.file) {
//       return res.status(400).json({
//         message: "Resume file is required",
//       });
//     }

//     // ✅ Parse resume PDF
//     const pdfParse = (await import("pdf-parse")).default;
//     const pdfData = await pdfParse(req.file.buffer);
//     const resumeContent = pdfData.text;

//     const { selfDescription, jobDescription } = req.body;

//     // ✅ Generate AI report
//     const aiReport = await generateInterviewReport({
//       resume: resumeContent,
//       selfDescription,
//       jobDescription,
//     });

//     console.log("AI RESPONSE:", JSON.stringify(aiReport, null, 2));

//     // 🛡 Protect database from bad AI responses and transform strings to objects
//     const transformToArrayOfObjects = (data, defaultObject) => {
//       if (Array.isArray(data)) {
//         return data.map((item) =>
//           typeof item === "string"
//             ? { ...defaultObject, [Object.keys(defaultObject)[0]]: item }
//             : item,
//         );
//       } else if (typeof data === "string") {
//         return [{ ...defaultObject, [Object.keys(defaultObject)[0]]: data }];
//       } else {
//         return [];
//       }
//     };

//     aiReport.technicalQuestions = transformToArrayOfObjects(
//       aiReport.technicalQuestions,
//       {
//         question: "",
//         intention: "Evaluate technical understanding",
//         answer: "Explain clearly with examples",
//       },
//     );

//     aiReport.behavioralQuestions = transformToArrayOfObjects(
//       aiReport.behavioralQuestions,
//       {
//         question: "",
//         intention: "Assess communication and teamwork",
//         answer: "Answer using the STAR method",
//       },
//     );

//     aiReport.skillGaps = transformToArrayOfObjects(aiReport.skillGaps, {
//       skill: "",
//       severity: "medium",
//     });

//     aiReport.preparationPlan = transformToArrayOfObjects(
//       aiReport.preparationPlan,
//       {
//         day: 1,
//         focus: "",
//         tasks: [
//           "Study related concepts",
//           "Practice coding problems",
//           "Review documentation",
//         ],
//       },
//     );

//     // ✅ Save report
//     const interviewReport = await interviewReportModel.create({
//       user: req.user.id,
//       resume: resumeContent,
//       selfDescription,
//       jobDescription,
//       ...aiReport,
//     });

//     res.status(201).json({
//       message: "Interview report generated successfully",
//       interviewReport,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to generate interview report",
//       error: error.message,
//     });
//   }
// }

// /**
//  * @description Controller to get interview report by interviewId.
//  */
// async function getInterviewReportByIdController(req, res) {
//   try {
//     const { interviewId } = req.params;

//     const interviewReport = await interviewReportModel.findOne({
//       _id: interviewId,
//       user: req.user.id,
//     });

//     if (!interviewReport) {
//       return res.status(404).json({
//         message: "Interview report not found.",
//       });
//     }

//     res.status(200).json({
//       message: "Interview report fetched successfully.",
//       interviewReport,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// /**
//  * @description Controller to get all interview reports of logged in user.
//  */
// async function getAllInterviewReportsController(req, res) {
//   try {
//     const interviewReports = await interviewReportModel
//       .find({
//         user: req.user.id,
//       })
//       .sort({ createdAt: -1 })
//       .select(
//         "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
//       );

//     res.status(200).json({
//       message: "Interview reports fetched successfully.",
//       interviewReports,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// /**
//  * @description Controller to generate resume PDF
//  */
// async function generateResumePdfController(req, res) {
//   try {
//     const { interviewReportId } = req.params;

//     const interviewReport =
//       await interviewReportModel.findById(interviewReportId);

//     if (!interviewReport) {
//       return res.status(404).json({
//         message: "Interview report not found.",
//       });
//     }

//     const { resume, jobDescription, selfDescription } = interviewReport;

//     const pdfBuffer = await generateResumePdf({
//       resume,
//       jobDescription,
//       selfDescription,
//     });

//     res.set({
//       "Content-Type": "application/pdf",
//       "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
//     });

//     res.send(pdfBuffer);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// module.exports = {
//   generateInterviewReportController,
//   getInterviewReportByIdController,
//   getAllInterviewReportsController,
//   generateResumePdfController,
// };

// const pdfParse = require("pdf-parse");
// const {
//   generateInterviewReport,
//   generateResumePdf,
// } = require("../services/ai.service");

// const interviewReportModel = require("../models/interviewReport.model");

// /*
//  * @description Controller to generate interview report based on user self description, resume and job description.
//  */
// async function generateInterviewReportController(req, res) {
//   try {
//     // Check if resume file exists
//     if (!req.file) {
//       return res.status(400).json({
//         message: "Resume file is required",
//       });
//     }

//     // Parse resume PDF
//     const pdfData = await pdfParse(req.file.buffer);
//     const resumeContent = pdfData.text;

//     const { selfDescription, jobDescription } = req.body;

//     // Generate AI report
//     const aiReport = await generateInterviewReport({
//       resume: resumeContent,
//       selfDescription,
//       jobDescription,
//     });

//     console.log("AI RESPONSE:", JSON.stringify(aiReport, null, 2));

//     // Protect database from bad AI responses
//     const transformToArrayOfObjects = (data, defaultObject) => {
//       if (Array.isArray(data)) {
//         return data.map((item) =>
//           typeof item === "string"
//             ? { ...defaultObject, [Object.keys(defaultObject)[0]]: item }
//             : item,
//         );
//       } else if (typeof data === "string") {
//         return [{ ...defaultObject, [Object.keys(defaultObject)[0]]: data }];
//       } else {
//         return [];
//       }
//     };

//     aiReport.technicalQuestions = transformToArrayOfObjects(
//       aiReport.technicalQuestions,
//       {
//         question: "",
//         intention: "Evaluate technical understanding",
//         answer: "Explain clearly with examples",
//       },
//     );

//     aiReport.behavioralQuestions = transformToArrayOfObjects(
//       aiReport.behavioralQuestions,
//       {
//         question: "",
//         intention: "Assess communication and teamwork",
//         answer: "Answer using the STAR method",
//       },
//     );

//     aiReport.skillGaps = transformToArrayOfObjects(aiReport.skillGaps, {
//       skill: "",
//       severity: "medium",
//     });

//     // aiReport.preparationPlan = transformToArrayOfObjects(
//     //   aiReport.preparationPlan,
//     //   {
//     //     day: 1,
//     //     focus: "",
//     //     tasks: [
//     //       "Study related concepts",
//     //       "Practice coding problems",
//     //       "Review documentation",
//     //     ],
//     //   },
//     // );

//     aiReport.preparationPlan = (aiReport.preparationPlan || []).map(
//       (item, index) => {
//         if (typeof item === "string") {
//           return {
//             day: index + 1,
//             focus: item,
//             tasks: [
//               "Study related concepts",
//               "Practice coding problems",
//               "Review documentation",
//             ],
//           };
//         }

//         return {
//           day: item.day || index + 1,
//           focus: item.focus || "General preparation",
//           tasks: item.tasks || [
//             "Study related concepts",
//             "Practice coding problems",
//             "Review documentation",
//           ],
//         };
//       },
//     );

//     // Save report
//     const interviewReport = await interviewReportModel.create({
//       user: req.user.id,
//       resume: resumeContent,
//       selfDescription,
//       jobDescription,
//       ...aiReport,
//     });

//     res.status(201).json({
//       message: "Interview report generated successfully",
//       interviewReport,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to generate interview report",
//       error: error.message,
//     });
//   }
// }

// /*
//  * @description Controller to get interview report by interviewId.
//  */
// async function getInterviewReportByIdController(req, res) {
//   try {
//     const { interviewId } = req.params;

//     const interviewReport = await interviewReportModel.findOne({
//       _id: interviewId,
//       user: req.user.id,
//     });

//     if (!interviewReport) {
//       return res.status(404).json({
//         message: "Interview report not found.",
//       });
//     }

//     res.status(200).json({
//       message: "Interview report fetched successfully.",
//       interviewReport,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// /**
//  * @description Controller to get all interview reports of logged in user.
//  */
// async function getAllInterviewReportsController(req, res) {
//   try {
//     const interviewReports = await interviewReportModel
//       .find({
//         user: req.user.id,
//       })
//       .sort({ createdAt: -1 })
//       .select(
//         "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
//       );

//     res.status(200).json({
//       message: "Interview reports fetched successfully.",
//       interviewReports,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// /**
//  * @description Controller to generate resume PDF
//  */
// async function generateResumePdfController(req, res) {
//   try {
//     const { interviewReportId } = req.params;

//     const interviewReport =
//       await interviewReportModel.findById(interviewReportId);

//     if (!interviewReport) {
//       return res.status(404).json({
//         message: "Interview report not found.",
//       });
//     }

//     const { resume, jobDescription, selfDescription } = interviewReport;

//     const pdfBuffer = await generateResumePdf({
//       resume,
//       jobDescription,
//       selfDescription,
//     });

//     res.set({
//       "Content-Type": "application/pdf",
//       "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
//     });

//     res.send(pdfBuffer);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// module.exports = {
//   generateInterviewReportController,
//   getInterviewReportByIdController,
//   getAllInterviewReportsController,
//   generateResumePdfController,
// };

const pdfParse = require("pdf-parse");
const {
  generateInterviewReport,
  generateResumePdf,
} = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

/*
 * @description Controller to generate interview report based on user self description, resume and job description.
 */
async function generateInterviewReportController(req, res) {
  // const resumeContent = await new pdfParse.PDFParse(
  //   Uint8Array.from(req.file.buffer),
  // ).getText();
  const pdfParse = require("pdf-parse");

  const data = await pdfParse(req.file.buffer);
  const resumeContent = data.text;

  const { selfDescription, jobDescription } = req.body;

  const interViewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
  });

  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
    ...interViewReportByAi,
  });

  res.status(201).json({
    message: "Interview report generated successfully.",
    interviewReport,
  });
}

/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;

  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });

  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview report not found.",
    });
  }

  res.status(200).json({
    message: "Interview report fetched successfully.",
    interviewReport,
  });
}

/**
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res) {
  const interviewReports = await interviewReportModel
    .find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
    );

  res.status(200).json({
    message: "Interview reports fetched successfully.",
    interviewReports,
  });
}

/*
 * @description Controller to generate resume PDF based on user self description, resume and job description.
 */
async function generateResumePdfController(req, res) {
  const { interviewReportId } = req.params;

  const interviewReport =
    await interviewReportModel.findById(interviewReportId);

  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview report not found.",
    });
  }

  const { resume, jobDescription, selfDescription } = interviewReport;

  const pdfBuffer = await generateResumePdf({
    resume,
    jobDescription,
    selfDescription,
  });

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`,
  });

  res.send(pdfBuffer);
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
  generateResumePdfController,
};