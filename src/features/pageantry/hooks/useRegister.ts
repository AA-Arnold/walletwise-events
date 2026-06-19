import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { register } from "../api";
import { UserType } from "../types";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers";

export const useRegister = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserType>({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    state: "",
    occupation: "",
    height: "",
    languages: [],
    address: "",
    sponsor: "",
    certificate: "",
    participatedBefore: "",
    nameOfContest: "",
    wonBefore: "",
    titleWon: "",
  });
  const [confrim, setConfirm] = useState(false);

  const resetForm = () => {
    setUserInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      state: "",
      occupation: "",
      height: "",
      languages: [],
      address: "",
      sponsor: "",
      certificate: "",
      participatedBefore: "",
      nameOfContest: "",
      wonBefore: "",
      titleWon: "",
    });

    setConfirm(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (languages: string[]) => {
    setUserInfo((prev) => ({
      ...prev,
      languages,
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      resetForm();
      toast.success(
        "Application reserved. Proceed to payment to confirm your application.",
      );
      router.push(data?.authorization_url);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error getting application", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    const {
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      state,
      occupation,
      height,
      languages,
      address,
      sponsor,
      certificate,
      participatedBefore,
      nameOfContest,
      wonBefore,
      titleWon,
    } = userInfo;
    if (!fullName) {
      return toast.error("Full name is required");
    } else if (!email) {
      return toast.error("Email is required");
    } else if (!phoneNumber) {
      return toast.error("Phone number is required");
    } else if (!dateOfBirth) {
      return toast.error("Date of birth is required");
    } else if (!state) {
      return toast.error("State is required");
    } else if (!occupation) {
      return toast.error("Occupation is required");
    } else if (!height) {
      return toast.error("Height is required");
    } else if (languages.length < 1) {
      return toast.error("Language is required");
    } else if (!address) {
      return toast.error("Address is required");
    } else if (!sponsor) {
      return toast.error("Do you have a sponsor? select one of the options");
    } else if (!certificate) {
      return toast.error("Which certificate have you obtained?");
    } else if (!participatedBefore) {
      return toast.error(
        "Have you participated in any beauty peagent before? Select one option?",
      );
    } else if (participatedBefore === "Yes" && !nameOfContest) {
      return toast.error(
        "Please enter the beauty peagent you participated in.",
      );
    } else if (!wonBefore) {
      return toast.error("Have you won any peagent before? Select one option?");
    } else if (wonBefore === "Yes" && !titleWon) {
      return toast.error("Please enter the title won.");
    } else if (!confrim) {
      return toast.error(
        "Please confirm all informations entered are correct.",
      );
    }
    mutate({
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      state,
      occupation,
      height,
      languages,
      address,
      sponsor,
      certificate,
      participatedBefore,
      nameOfContest,
      wonBefore,
      titleWon,
      confrim,
    });
  };

  return {
    handleChange,
    userInfo,
    handleSubmit,
    isPending,
    confrim,
    setConfirm,
    handleLanguageChange,
  };
};
