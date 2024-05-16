import React, { useState, useEffect, useContext } from "react";
import { DatePicker, Page, useNavigate } from "zmp-ui";
import BelowButton from "./svg/BelowButton";
import TopUpdateBirthday from "./svg/TopUpdateBirthday";
import {
  useQueryUserByUpdateQuery,
  useUpdateBirthdateActionMutation,
  useMutationUserUpdateNameMutation,
} from "../../../generated/graphql";
import ZodiacContext from "../../../context/ZodiacContext";

const UpdateBirthday = () => {
  const navigate = useNavigate();
  const { zodiacUserData, updateStatusBirthday, hasBirthday } = useContext(
    ZodiacContext
  ) as any;
  const getUserID = zodiacUserData.user_id;
  const idUser = getUserID;
  const { data: dataUser } = useQueryUserByUpdateQuery({
    variables: { userId: idUser },
    fetchPolicy: "no-cache",
  });
  const [updateBirthDay] = useUpdateBirthdateActionMutation({
    fetchPolicy: "no-cache",
  });
  const [updateNameUser] = useMutationUserUpdateNameMutation({
    fetchPolicy: "no-cache",
  });
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState<any>();
  const dateString = dataUser?.users[0]?.birthdate;
  const nameString = dataUser?.users[0]?.full_name;
  // Tạo một đối tượng Date từ chuỗi
  const dateConvert = new Date(dateString);

  useEffect(() => {
    setDate(dateConvert);
    setName(nameString);
  }, [dataUser]);

  // date dưới này để post

  const [updatedMessage, setUpdatedMessage] = useState(false);
  const [datepickerIsClicked, setDatepickerIsClicked] = useState(false);

  const dateChangeHandler = (value) => {
    setDate(value);
  };
  const dateChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  // hàm nhận ngày sinh nhật của user rồi đẩy lên server
  const updateBirthdayHandler = async () => {
    if (date) {
      setUpdatedMessage(true);
      const dateUpdate = new Date(date);
      dateUpdate.setUTCDate(dateUpdate.getUTCDate() + 1);
      const month = String(dateUpdate.getUTCMonth() + 1).padStart(2, "0");
      const day = String(dateUpdate.getUTCDate()).padStart(2, "0");
      const year = dateUpdate.getUTCFullYear();
      const formattedDate = `${month}-${day}-${year}`;
      await updateBirthDay({
        variables: {
          idUser: idUser.toString(),
          birthday: formattedDate,
        },
      });

      await updateNameUser({
        variables: {
          userId: idUser,
          full_name: name,
        },
      });
      setUpdatedMessage(false);
    }

    localStorage.setItem("hasBirthday", "true");
    updateStatusBirthday(true);
    navigate("/horo");
  };

  useEffect(() => {
    let timeout;
    if (updatedMessage) {
      // Set a timeout to fade out the element after 2 seconds
      timeout = setTimeout(() => {
        setUpdatedMessage(false);
      }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Clean up the timeout when the component is unmounted or the visibility changes
    return () => clearTimeout(timeout);
  }, [updatedMessage]);

  // mục đích của cái useEffect dưới đây là để tránh việc mới
  // vào app mà không hiện chữ 'Ngày sinh' ngay trên ô nhập ngày tháng
  useEffect(() => {
    setDatepickerIsClicked(false);
  }, [date]);

  return (
    <Page className="page bg-[#f4eee3] overflow-x-scroll">
      <div className="w-fit mx-auto mb-9 relative">
        <div className="">
          <TopUpdateBirthday />
        </div>

        <div className="svn-seiston -translate-y-16 w-full tracking-wider text-3xl text-[#9f7c35]">
          <p className="w-64 mx-auto text-center">Thông tin cá nhân</p>
        </div>
      </div>

      <div className="-mt-14">
        <DatePicker
          mask
          maskClosable
          placeholder="Ngày sinh"
          title="Thay đổi ngày sinh"
          value={date}
          onChange={dateChangeHandler}
          dateFormat="dd/mm/yyyy"
          locale="vi"
          inputClass="poppins"
        />

        <div className="mt-4 flex space-x-4">
          {/* <label className="block mb-2 text-lg font-medium text-[#9f7c35] poppins">Họ và tên</label> */}
          <input
            type="text"
            value={name}
            onChange={dateChangeNameHandler}
            className="bg-white h-[50px] text-base poppins border-2 text-md rounded-lg focus:ring-3 focus:ring-zodiac-gold block w-full p-3"
            placeholder="Họ và tên"
            required
          />

          {/* <button
              className="bg-[#9f7c35] w-[20%] py-4 -translate-y-4 rounded-lg mt-4 poppins text-lg text-white">
              <FontAwesomeIcon icon={faCheckCircle} />
            </button> */}
        </div>

        <button
          className="bg-[#9f7c35] w-full py-3 rounded-lg mt-4 poppins text-lg text-white"
          onClick={updateBirthdayHandler}
        >
          Cập nhật
        </button>
      </div>

      <div className="mt-2 w-fit mx-auto">
        <BelowButton />
      </div>

      {/* backend team note: chỗ này thay thế cái ngày tháng bằng ngày tháng trả về từ backend */}
      <div className="mt-4 w-fit mx-auto">
        {updatedMessage && date && (
          <p
            className={`px-2 transition-all ease-linear italic mt-4 ${
              updatedMessage ? "" : "opacity-0"
            } text-[#9f7c35]`}
            style={{
              animation: updatedMessage ? "none" : "fades 11s forwards",
            }}
          >
            Dữ liệu đã được cập nhật với ngày sinh{" "}
            {new Date(date).getDate().toString().padStart(2, "0")}-
            {(new Date(date).getMonth() + 1).toString().padStart(2, "0")}-
            {new Date(date).getFullYear()}
          </p>
        )}
      </div>
    </Page>
  );
};

export default UpdateBirthday;
