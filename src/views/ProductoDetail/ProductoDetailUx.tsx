import Page from "@components/Page";
import { DateField, Field } from "@components/InputField";
import ActionField from "@components/ActionField";
import { Button } from "@components/Buttons";
import { INewProducto } from "@store/Services/Productos";

export interface IProductoDetailUx {
  isLoading: boolean;
  error: any;
  form: INewProducto;
  onReturnClick: () => void;
}

const ProductoDetailUx = ({
  form,
  isLoading,
  error,
  onReturnClick,
}: IProductoDetailUx) => {
  return (
    <Page pageTitle="Nuevo Producto">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error al cargar CashFlow</div>}
      {form && (
        <section>
          <img src={form.imagen} />
          <Field
            name="nombre"
            labelText="Nombre"
            value={form.nombre}
            readOnly
          />
          <Field
            name="description"
            labelText="Descripción"
            value={form.descripcion}
            readOnly
          />
          <Field
            name="precio"
            labelText="Precio"
            value={String(form.precio)}
            type="number"
            readOnly
          />
          <Field
            name="stock"
            labelText="Cantidad disponible"
            value={String(form.stock)}
            type="number"
            readOnly
          />
          <DateField labelText="Fecha" name="date" value={String(form.date)} />
          <ActionField>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onReturnClick();
              }}
            >
              Atrás
            </Button>
          </ActionField>
        </section>
      )}
    </Page>
  );
};

export default ProductoDetailUx;
