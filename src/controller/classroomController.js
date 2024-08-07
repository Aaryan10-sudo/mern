import { Classroom } from "../schema/model.js";

export const classroomController = async (req, res, next) => {
  try {
    let result = await Classroom.create(req.body);
    res.json({
      success: true,
      message: "Employee added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findAllClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.find({});
    res.json({
      success: true,
      message: "Employee read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const findSpecificClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findById(req.param.id);
    res.json({
      success: true,
      message: "Specific Classroom read successful",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "Update successfull",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClassroomController = async () => {
  try {
    let result = await Classroom.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      messsage: error.message,
    });
  }
};
