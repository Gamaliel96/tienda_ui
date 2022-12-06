import Page from "@components/Page";
import { IProducto } from "@store/Services/Productos";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import { formatCurrency } from "@helpers/NumberFormat";

import "./ProductoAdmin.css";
interface IProductoAdminUxProps {
  error?: any;
  data?: any;
  isLoading?: boolean;
}
const ProductoAdminCard = (item: IProducto) => {
  return (
    <Card key={item._id}>
      <img src={item.imagen}/>
      <h2>{item.nombre}</h2>
      <div>{item.descripcion}</div>
      <p>{formatCurrency(item.precio)}</p>
      <span>{new Date(item.date).toLocaleDateString()}</span>
      <p>usuario:{item.userId ? <div>{item.userId}</div> : null}</p>
    </Card>
  );
};
const ProductoUx = ({ error, data, isLoading }: IProductoAdminUxProps) => {
  return (
    <Page pageTitle="Producto">
      <section className="ProductoHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar Productos</ErrorField>}
        {data && data.map((o: IProducto) => ProductoAdminCard(o))}
      </section>
    </Page>
  );
};

export default ProductoUx;
