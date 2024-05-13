import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { DatePicker, Page } from "zmp-ui";
import BelowButton from "./svg/BelowButton";
import TopUpdateBirthday from "./svg/TopUpdateBirthday";

const UpdateBirthday = () => {
  const [date, setDate] = useState(new Date());

  // date dưới này để post
  const [dateToPost, setDateToPost] = useState("");

  const [updatedMessage, setUpdatedMessage] = useState(false);
  const [datepickerIsClicked, setDatepickerIsClicked] = useState(false);

  const dateChangeHandler = (newDate) => {
    setDate(newDate);

    const datePost = `${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}-${newDate.getFullYear()}`;
    setDateToPost(datePost);
    console.log("Date thay đổi: ", datePost);
  };

  // hàm nhận ngày sinh nhật của user rồi đẩy lên server
  const updateBirthdayHandler = () => {
    setUpdatedMessage(true);
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
          value={datepickerIsClicked ? date : undefined}
          onChange={dateChangeHandler}
          dateFormat="dd/mm/yyyy"
          locale="vi"
          inputClass="poppins"
        />

        <div className="mt-4 flex space-x-4">
          {/* <label className="block mb-2 text-lg font-medium text-[#9f7c35] poppins">Họ và tên</label> */}
          <input
            type="text"
            className="bg-white h-[50px] text-base poppins border-2  text-[#9f7c35] text-md rounded-lg focus:ring-3 focus:ring-zodiac-gold block w-full p-3"
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
        {updatedMessage && (
          <p
            className={`px-2 transition-all ease-linear italic mt-4 ${updatedMessage ? "" : "opacity-0"} text-[#9f7c35]`}
            style={{
              animation: updatedMessage ? "none" : "fades 11s forwards",
            }}
          >
            Dữ liệu đã được cập nhật với ngày sinh{" "}
            {new Date().getDate().toString().padStart(2, "0")}-
            {(new Date().getMonth() + 1).toString().padStart(2, "0")}-
            {new Date().getFullYear()}
          </p>
        )}
      </div>
    </Page>
  );
};

export default UpdateBirthday;
