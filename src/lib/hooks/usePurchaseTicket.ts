import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { ApiErrorResponse } from "../types";
import { purchaseTicket } from "../api";
import { promiseErrorFunction } from "../helpers";

type SelectedTicket = {
  ticketType: string;
  quantity: number;
  price: number;
  discountPrice?: number;
};

export const usePurchaseTicket = (eventId: string) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(
    null,
  );

  const resetForm = () => {
    setUserInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
    });

    setSelectedTicket(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const increase = (
    ticketType: string,
    price: number,
    discountPrice?: number,
  ) => {
    setSelectedTicket((prev) => {
      if (!prev || prev.ticketType !== ticketType) {
        return {
          ticketType,
          quantity: 1,
          price,
          discountPrice,
        };
      }

      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  };

  const decrease = (ticketType: string) => {
    setSelectedTicket((prev) => {
      if (!prev || prev.ticketType !== ticketType) {
        return prev;
      }

      if (prev.quantity <= 1) {
        return null;
      }

      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  };

  const getQuantity = (ticketType: string) => {
    if (!selectedTicket) return 0;

    return selectedTicket.ticketType === ticketType
      ? selectedTicket.quantity
      : 0;
  };

  const totalAmount = selectedTicket
    ? (selectedTicket.discountPrice ?? selectedTicket.price) *
      selectedTicket.quantity
    : 0;

  const { mutate, isPending } = useMutation({
    mutationFn: purchaseTicket,
    onSuccess: (data) => {
      resetForm();

      toast.success(
        "Ticket reserved. Proceed to payment to confirm your booking.",
      );

      router.push(data.authorization_url);
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, email, phoneNumber } = userInfo;

    if (!fullName) {
      return toast.error("Full name is required");
    }

    if (!email) {
      return toast.error("Email is required");
    }

    if (!phoneNumber) {
      return toast.error("Phone number is required");
    }

    if (!selectedTicket) {
      return toast.error("Please select a ticket");
    }

    mutate({
      fullName,
      email,
      phoneNumber,
      ticketType: selectedTicket.ticketType,
      quantity: selectedTicket.quantity,
      eventId,
    });
  };

  return {
    handleChange,
    userInfo,
    handleSubmit,
    isPending,

    increase,
    decrease,
    getQuantity,

    selectedTicket,
    totalAmount,
  };
};
