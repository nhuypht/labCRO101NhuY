import axios from "axios";
const apiUrl = "git remote add origin";

const getList = async () => {
  try {
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
      const data = JSON.parse(JSON.stringify(response.data));
      console.log(data);
      console.log("getList thành công!");
      return data;
    } else {
      console.error("Xảy ra lỗi getList");
    }
    console.log(data.json);
  } catch (error) {
    console.error("Đã xảy ra lỗi fhgfh:", error);
  }
};

const deleteUser = async (userId) => {
  try {
    // Gửi yêu cầu DELETE đến một URL hoặc API cụ thể
    const response = await axios.delete(`${apiUrl}/${userId}`);
    // Kiểm tra phản hồi từ máy chủ
    if (response.status === 200) {
      console.log("Người dùng đã được xoá thành công!");
    } else {
      console.error("Xảy ra lỗi khi xoá người dùng.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
};
const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await axios.put(`${apiUrl}/${userId}`, updatedUserData);

    // Kiểm tra phản hồi từ máy chủ
    if (response.status === 200) {
      console.log("Người dùng đã được update thành công!");
    } else {
      console.error("Xảy ra lỗi khi update người dùng.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
};
const addUser = async (newUser) => {
  try {
    // Gửi yêu cầu POST đến một URL hoặc API cụ thể với dữ liệu của người dùng mới
    const response = await axios.post(apiUrl, newUser);

    // Kiểm tra phản hồi từ máy chủ
    if (response.status === 201) {
      console.log("Người dùng đã được thêm thành công!");
    } else {
      console.error("Xảy ra lỗi khi thêm người dùng.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi khi tai len:", error);
  }
};

export { getList, addUser, deleteUser, updateUser };
