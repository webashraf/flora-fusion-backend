import { TProducts as TProduct } from "./products.interface";
import { Tree } from "./products.model";

// Retrive all trees
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  if (query?.searchItem) {
    searchTerm = query?.searchItem as string;
  }

  let category = {};
  if (query?.categoryId) {
    category = { category: query?.categoryId as string };
  }

  const searchQuery = Tree.find({
    $or: ["name", "description"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  let sortType: { price: any } = { price: -1 };

  if (query?.price == "1") {
    sortType.price = 1;
  }

  let limit = 0;
  let page = 0;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query?.limit);
  }
  if (query?.page) {
    page = Number(query?.page);
    skip = (page - 1) * 1;
  }

  const result = await searchQuery
    .find(category)
    .sort(sortType)
    .populate("category")
    .limit(limit)
    .skip(skip);
  return result;
};

// Retrive a single product
const getSingleTreeFromDB = async (params: string) => {
  return await Tree.findOne({ _id: params }).populate("category");
};

// update stock
const updateTreeIntoDB = async (_id: string, payload: TProduct) => {
  // console.log(payload);
  const result = await Tree.findByIdAndUpdate({ _id }, payload, { new: true });

  return result;
};

// Create a new product
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Tree.create(payload);

  return result;
};

// Delete a product from the DB
const deleteTreeFromDB = async (params: string) => {
  const result = await Tree.findByIdAndUpdate(
    params,
    { isAvailable: false },
    { new: true }
  );
  return result;
};

export const productsService = {
  getAllProductsFromDB,
  updateTreeIntoDB,
  getSingleTreeFromDB,
  createProductIntoDB,
  deleteTreeFromDB,
};
