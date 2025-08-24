import { User } from '../models';
import { Store } from '../models';
import { Rating } from '../models';

// User Services
export const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

export const getUserById = async (userId) => {
    return await User.findById(userId);
};

export const updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

export const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

// Store Services
export const createStore = async (storeData) => {
    const store = new Store(storeData);
    return await store.save();
};

export const getStoreById = async (storeId) => {
    return await Store.findById(storeId);
};

export const updateStore = async (storeId, updateData) => {
    return await Store.findByIdAndUpdate(storeId, updateData, { new: true });
};

export const deleteStore = async (storeId) => {
    return await Store.findByIdAndDelete(storeId);
};

// Rating Services
export const submitRating = async (ratingData) => {
    const rating = new Rating(ratingData);
    return await rating.save();
};

export const getRatingsForStore = async (storeId) => {
    return await Rating.find({ storeId });
};

export const updateRating = async (ratingId, updateData) => {
    return await Rating.findByIdAndUpdate(ratingId, updateData, { new: true });
};

export const deleteRating = async (ratingId) => {
    return await Rating.findByIdAndDelete(ratingId);
};