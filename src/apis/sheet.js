import axiosInstance from "@/utils/axiosInstance";

const resouce = "sheet";
const sheetApi = {
  async addContact(data) {
    const res = await axiosInstance({
      url: `${resouce}/`,
      method: "POST",
      data,
    });
    return res.data;
  }
};
export default sheetApi;
