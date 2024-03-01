const apiUrl = "https://65dca5cce7edadead7ec9f4d.mockapi.io/api/product";

const getList = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.status === 200) {
      console.log("getList thành công!");
      return data;
    } else {
      console.error("Xảy ra lỗi getList");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "DELETE",
    });

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
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    });

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
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (response.status === 201) {
      console.log("Người dùng đã được thêm thành công!");
    } else {
      console.error("Xảy ra lỗi khi thêm người dùng.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
  }
};

export { getList, addUser, deleteUser, updateUser };
