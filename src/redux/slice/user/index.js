// // user.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const UserCrud = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://omofood.pythonanywhere.com/api/v1/' }),
//   reducerPath: 'userCrud',
//   tagTypes: ['User'],
//   endpoints: (builder) => ({
//     getTable1: builder.query({
//       query: () => 'products/',
//       providesTags: ['User'],
//     }),
//     createTable2: builder.mutation({
//       query: (body) => ({
//         url: 'products/',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     deleteTbale2: builder.mutation({
//       query: (body) => ({
//         url: `products/${body.id}`,
//         method: 'DELETE',
//         body,
//       }),
//       invalidatesTags: ['User']
//     }),
//     add: builder.mutation({
//       query: (body) => ({
//         url: 'products/',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const {
//   useGetTable1Query,
//   useCreateTable2Mutation,
//   useDeleteTbale2Mutation,
//   useAddMutation,
// } = UserCrud;

// export default UserCrud;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserCrud = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://omofood.pythonanywhere.com/api/v1/",
  }),
  reducerPath: "ReatingData",
  tagTypes: ["Reating"],
  endpoints: (builder) => ({
    getTable1: builder.query({
      query: () => "user/detail/12/",
      providesTags: ["Reating"],
    }),
    createTable2: builder.mutation({
      query: (body) => ({
        url: "users/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
    deleteTbale2: builder.mutation({
      query: (body) => ({
        url: `custom-users/${body.id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
    get: builder.query({
      query: (url) => url, // Replace with your specific endpoint URL
      providesTags: ["Reating"],
    }),
    add: builder.mutation({
      query: (body) => ({
        url: "custom-users/", // Replace with your specific endpoint URL
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reating"],
    }),
  }),
});

export const {
  useGetTable1Query,
  useCreateTable2Mutation,
  useDeleteTbale2Mutation,
  useGetQuery,
  useAddMutation,
} = UserCrud;
