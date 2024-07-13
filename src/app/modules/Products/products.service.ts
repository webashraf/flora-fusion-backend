import { Tree } from "./products.model";

// Retrive all trees
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
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

  const result = await searchQuery.find().sort(sortType).populate("category");
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

export const productsService = {
  getAllProductsFromDB,
  updateTreeIntoDB,
  getSingleTreeFromDB,
};
