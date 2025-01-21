import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_HOSTING_KEY
    }`,
    formData
  );
  return data.data.display_url;
};

export const saveUser = async (user) => {
  const axiosPublic = useAxiosPublic();
  const data = await axiosPublic.post(`/users`, {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
    coin: user?.coin,
  });
};