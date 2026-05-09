// // create doctor

// import doctorModel from "../models/doctorModel.js";
// export const addDoctor = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       degree,
//       fees,
//       about,
//       gender,
//       phone,
//       address,
      
//       speciality,
//       experience,
//       dob,
//     } = req.body;
//     if (
//       !name ||
//       !email ||
//       !degree ||
//       !fees ||
//       !about ||
//       !gender ||
//       !phone ||
//       !address ||
//       !speciality ||
//       !experience ||
//       !dob ||
//       !name
//     ) {
//       return res.status(500).send({
//         success: false,
//         message: "Please provide all fields",
//       });
//     }
//     // const photoBase64 = req.file && req.file.buffer.toString("base64");
//     const image = req.file.path;
//     const doctorData = {
//       name,
//       email,
//       degree,
//       fees,
//       about,
//       gender,
//       phone,
//       address,
//       image: photoBase64,
//       speciality,
//       experience,
//       dob,
//     };
//     const doctor = new doctorModel(doctorData);
//     await doctor.save();

//     res.status(201).send({
//       success: true,
//       message: "Doctor Created",
//       doctor,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in add Doctor Api",
//     });
//   }
// };


export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      speciality,
      experience,
      dob,
    } = req.body;

    const image = req.file.path;

    const doctor = new doctorModel({
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      image,
      speciality,
      experience,
      dob,
    });

    await doctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor Created",
      doctor,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error in add Doctor Api",
    });
  }
};