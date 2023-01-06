import axios from "axios";

export const blockContent = async (page_id: string) => {
  const data = await axios
    .get(`http://localhost:4000/api/blocks/${page_id}`)
    .then((res) => res);

  return data;
};
