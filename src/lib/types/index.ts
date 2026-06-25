interface ApiErrorData {
  message?: string;
  errors?: { message?: string }[];
}

export interface ApiErrorResponse {
  response?: {
    data?: ApiErrorData;
  };
}

export interface optionsType {
  label: string;
  value: string;
  color?: string;
}

export interface fetchDataProps {
  currentPage: number;
  limit: number;
  status?: string;
  search: string | null;
  filter?: string;
  categoryId?: string;
  countryId?: string;
  dateRange?: string;
  tab?: string;
}

export interface EventTicketType {
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
}

export interface EventSummary {
  capacityFormatted: string;
  formattedDate: string;
  formattedTime: null | string;
  highestTicketPrice: number;
  lowestTicketPrice: number;
  priceRangeFormatted: string;
  totalCapacity: number;
}

export interface EventType {
  eventId: string;
  imageUrl: string;
  description: string;
  date: string;
  category: string;
  address: string;
  title: string;
  id: number;
  time: string | null;
  serviceFee: string;
  refundPolicy: null | string;
  promo: null | string;
  endTime: string | null;
  computed: EventSummary;
  ticketTypes: EventTicketType[];
}
