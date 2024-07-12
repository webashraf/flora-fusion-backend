import { Tree } from "./products.model";

const getAllProductsFromDB = async (searchQuery: Record<string, unknown>) => {
  let searchTerm = "";
  if (searchQuery?.searchItem) {
    searchTerm = searchQuery?.searchItem as string;
  }
  console.log(searchQuery, searchTerm);

  const result = await Tree.find({
    $or: ["name"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  }).populate("category");
  return result;
};

const updateTreeIntoDB = async (_id: string) => {
  const result = await Tree.findByIdAndUpdate(
    { _id},
    { stock: 0 },
    { new: true }
  );

  console.log(result);

  return result;
};

export const productsService = {
  getAllProductsFromDB,
  updateTreeIntoDB,
};
