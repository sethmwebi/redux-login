import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnsusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
