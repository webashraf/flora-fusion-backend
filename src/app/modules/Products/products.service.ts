import { TProducts as TProduct } from "./products.interface";
import { Tree } from "./products.model";

// Retrive all trees
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  // console.log(query);

  let searchTerm = "";
  if (query?.searchItem) {
    searchTerm = query?.searchItem as string;
  }

  const searchQuery = Tree.find({
    $or: ["name"].map((field) => ({
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
    console.log(page);
    skip = (page - 1) * 1;
    console.log(skip);
  }

  // console.log(page, limit, skip);

  const result = await searchQuery
    .find()
    .sort(sortType)
    .populate("category")
    .limit(limit)
    .skip(skip);
  return result;
};

const getSingleTreeFromDB = async (params: string) => {
  return await Tree.findOne({ _id: params }).populate("category");
};

// update stock
const updateTreeIntoDB = async (_id: string) => {
  const result = await Tree.findByIdAndUpdate(
    { _id },
    { stock: 0 },
    { new: true }
  );

  // console.log(result);

  return result;
};

// Create a new product
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Tree.create(payload);

  return result;
};

export const productsService = {
  getAllProductsFromDB,
  updateTreeIntoDB,
  getSingleTreeFromDB,
  createProductIntoDB,
};
