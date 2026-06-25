import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getEvents = async ({
  currentPage,
  limit,
  search,
  filter,
  tab,
}: fetchDataProps) => {
  try {
    const url = `/events/homepage?page=${currentPage}&limit=${limit}&type=${tab}${
      filter ? `&category=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
