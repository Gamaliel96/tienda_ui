import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";




export interface IProducto {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  stock: number;
  date: Date;
  _id: string;
  userId:string;
}

export interface INewProducto {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  stock: number;
  date: Date;
}

export interface IGetAllProductosResponse {
  total: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: IProducto[];
}

export const cashFlowApi = createApi({
  reducerPath: "productosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/productos`,
    prepareHeaders: (headers, {getState}) => {
      headers.set("apikey", process.env.REACT_APP_API_KEY as string);
      const token = (getState() as RootState).sec.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
  }),
  tagTypes: ["Productos"],
  endpoints: (builder) => ({
    allProductos: builder.query({
      query: ({page = 1, items = 10}) => ({
        url: `?page=${page}&items=${items}`,
      }),
      providesTags: ["Productos"]
    }),
    productoById: builder.query({
      query: (id: string) => `byindex/${id}`,
      providesTags: ["Productos"]
    }),
    allProductosAdmin: builder.query({
      query: ()=>"/all",
      providesTags: ["Productos"]
    }),
    newProducto: builder.mutation({
      query: (body:INewProducto)=>{
        return {
          url: "new",
          method: "POST",
          body
        }
      },
      invalidatesTags: ["Productos"]
    })
  })
});

export const { useAllProductosQuery, useProductoByIdQuery, useAllProductosAdminQuery , useNewProductoMutation } = cashFlowApi;
