import axios from "axios";

export const getTicket = async ({
  fullName,
  email,
  phoneNumber,
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
}) => {
  try {
    const payload = { fullName, email, phoneNumber };
    const url = `https://walletwise.ng/api/v1/bred/register`;
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
