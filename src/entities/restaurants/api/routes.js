export const router = {
  getRestaurants: ({ page, perPage }) =>
    `/api/v1/restaurants/all?page=${page}&perPage=${perPage}`,
}
