import axios from "axios";

export const register = async ({
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
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  state: string;
  occupation: string;
  height: string;
  languages: string[];
  address: string;
  sponsor: string;
  certificate: string;
  participatedBefore: string;
  nameOfContest: string;
  wonBefore: string;
  titleWon: string;
  confrim: boolean;
}) => {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const payload = {
      fullName,
      email,
      phoneNumber,
      dob: dateOfBirth,
      stateOfOrigin: state,
      occupation,
      height,
      languagesSpoken: languages,
      residentialAddress: address,
      hasSponsor: sponsor,
      certificateObtained: certificate,
      pastPageantExperienc: participatedBefore,
      pastContestName: nameOfContest,
      wonTitleBefore: wonBefore,
      pastTitleWon: titleWon,
      termsAgreed: confrim,
    };
    const url = `https://walletwise.ng/api/v1/pageant/register`;
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
