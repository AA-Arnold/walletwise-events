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

export const getEventInfo = async ({ eventId }: { eventId: string }) => {
  try {
    const url = `/events/${eventId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const purchaseTicket = async ({
  fullName,
  email,
  phoneNumber,
  quantity,
  ticketType,
  eventId,
}: {
  eventId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  quantity: number;
  ticketType: string;
}) => {
  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  try {
    const payload = {
      fullName,
      email,
      phoneNumber,
      quantity,
      ticketType,
      eventId,
      redirectUrl: `${frontendUrl}/events/payment-success`,
    };
    const url = `/events/book/unified`;
    const { data } = await axiosInstance.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
