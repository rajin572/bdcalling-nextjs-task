import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProductDetailSection from "@/components/ProductDetails/ProductDetailSection";
import Products from "@/components/shared/Products";
import { getServerSession } from "next-auth";

const ProductDetailPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <ProductDetailSection />
      <Products>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-700 mb-14 ml-10 md:ml-20">
          Related products
        </h2>
      </Products>
    </div>
  );
};

export default ProductDetailPage;
