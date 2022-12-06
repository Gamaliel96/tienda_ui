import ProductosAdminUx from "./ProductoAdminUx";
import { useAllProductosAdminQuery } from "@store/Services/Productos";
const ProductosAdmin = () => {
  const { data, isLoading, error } = useAllProductosAdminQuery(
    {},
    { refetchOnMountOrArgChange: true, refetchOnFocus: true }
  );
  return <ProductosAdminUx error={error} data={data} isLoading={isLoading} />;
};

export default ProductosAdmin;
