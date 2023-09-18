export const registerUser = (data) => {
  try {
    const Datas = JSON.stringify(data);
    window.localStorage.setItem("User", Datas);
    return { status: "success" };
  } catch (error) {
    console.log(error);
  }
};
export const getUser = () => {
  try {
    const Datas = JSON.parse(localStorage.getItem("User"));
    return Datas;
  } catch (error) {
    console.log(error);
  }
};
