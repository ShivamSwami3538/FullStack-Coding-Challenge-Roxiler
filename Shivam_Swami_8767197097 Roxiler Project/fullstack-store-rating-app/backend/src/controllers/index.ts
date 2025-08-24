import { Request, Response } from 'express';
import UserService from '../services/userService';
import StoreService from '../services/storeService';
import RatingService from '../services/ratingService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const token = await UserService.loginUser(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getStores = async (req: Request, res: Response) => {
  try {
    const stores = await StoreService.getAllStores();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const submitRating = async (req: Request, res: Response) => {
  try {
    const rating = await RatingService.submitRating(req.body);
    res.status(201).json(rating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRating = async (req: Request, res: Response) => {
  try {
    const updatedRating = await RatingService.updateRating(req.params.id, req.body);
    res.status(200).json(updatedRating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};