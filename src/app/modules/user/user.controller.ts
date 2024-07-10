import { RequestHandler } from "express";

const getAllUsers: RequestHandler = async (req, res) => {
    
  console.log("get all users");
};

export const userController = {
  getAllUsers,
};
