import ProductoDetailUx from "./ProductoDetailUx";
import {  useProductoByIdQuery } from "@store/Services/Productos";
import { useNavigate, useParams } from "react-router-dom";

const ProductoDetail = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const {data:form, isLoading, error } = useProductoByIdQuery(id as string);
  return (
    <ProductoDetailUx
      form={form}
      onReturnClick={() => {Navigate("/productos")}}
      isLoading={isLoading}
      error={error}
    />
  );
};
export default ProductoDetail;
