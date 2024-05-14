import React, { useState, useEffect, startTransition, useContext } from "react";
import { Modal, Box, Text, DatePicker } from "zmp-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import ZodiacContext from "../../../context/ZodiacContext";
import { useUpdateBirthdateActionMutation } from "../../../generated/graphql";

const AskBirthdate = () => {
  const totalTime = 2;
  const [seconds, setSeconds] = useState(totalTime);
  const [vDialogVisible, setVDialogVisible] = useState(true);
  const [confirmSubmitBirthdate, setConfirmSubmitBirthdate] = useState(false);

  const [date, setDate] = useState(null);
  const [datepickerIsClicked, setDatepickerIsClicked] = useState(false);
  // date dưới này để post
  const [dateToPost, setDateToPost] = useState("");
  const [shaking, setShaking] = useState(false);

  // hàm này là để xác nhận user không bỏ trống ô nhập ngày tháng sinh nhật
  const [confirmEnteredDate, setConfirmEnteredDate] = useState(false);

  const dateChangeHandler = (newDate) => {
    setDate(newDate);

    const datePost = `${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : `${newDate.getMonth() + 1}`}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : `${newDate.getDate()}`}-${newDate.getFullYear()}`;
    setDateToPost(datePost);
    console.log("Date thay đổi: ", datePost);
  };

  const { zodiacUserData, updateStorage } = useContext(ZodiacContext) as any;

  console.log("Hello from AskBirthdate.tsx", zodiacUserData);

  const getUSerID = zodiacUserData.user_id;

  const [updateBirthdateActionMutation] = useUpdateBirthdateActionMutation({
    fetchPolicy: "no-cache",
  });

  const navigate = useNavigate();

  // hàm nhận ngày sinh nhật của user rồi đẩy lên server
  const declareBirthdateToHasura = async () => {
    console.log(getUSerID, dateToPost);

    // set xuống localstorage
    // localStorage.setItem("zodiacUserData", JSON.stringify(objectData));
    // context sẽ copy từ local, rồi lấy từ context vào biến

    // gắn thế cho getUSerID.toString(),

    const dataWhenUpdateBirthdate = await updateBirthdateActionMutation({
      variables: {
        idUser: getUSerID.toString(),
        birthday: dateToPost.toString(),
      },
    });

    showMessageOKButton();

    setTimeout(() => {
      console.log("Dữ liệu nhận được sau khi update sinh nhật: ", dataWhenUpdateBirthdate);
      if (dataWhenUpdateBirthdate.data?.actionUpdateBirthday?.zodiac_id !== null) {
        updateStorage({ zodiac_id: dataWhenUpdateBirthdate.data?.actionUpdateBirthday?.zodiac_id })
        startTransition(() => {
          navigate("/horo");
        });
      }
    }, 3000);
  };

  // this function works when button 'OK' of the modal is clicked
  const showMessageOKButton = () => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds <= 0) {
          clearInterval(interval); // Stop the interval if the time is up
          return 0;
        }
        return seconds - 0.1;
      });
    }, 100);

    setConfirmSubmitBirthdate(true);

    return () => clearInterval(interval);
  };

  const percentage = (seconds / totalTime) * 100;

  // 1. Hàm update ngày sinh nhật
  // 2. Hàm AskBirthdate - OK
  // 3. Hỏi hội đồng coi UI Settings Update User Infor như vậy là được chưa
  // 4. Sửa mấy UI bên trong boys-team
  // 5. Làm Login cho trường hợp còn lại

  const handleShaking = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false); // Stop shaking after 2 seconds
    }, 2000); // since the total animation time is 2 seconds
  };

  useEffect(() => {
    setDatepickerIsClicked(false);
    console.log("Date sẽ post (lưu): ", dateToPost);
  }, [date]);

  return (
    <div className="">
      {confirmSubmitBirthdate && (
        <div
          className={`flex-col ${percentage === 0 && "jump"} h-16 justify-between mx-auto overflow-hidden w-fit mt-3 max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-400 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`}
          role="alert"
        >
          <div className="flex w-full items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-600 text-xl"
            />

            <div className="ps-4 text-lg font-medium px-3">
              Đang lưu ngày sinh
            </div>
          </div>

          <div className="w-[216px] absolute translate-y-[12px] rounded-3xl -translate-x-[32px] h-[3px] border-b">
            <div
              style={{ width: `${percentage}%` }}
              className="bg-green-600 h-[3px] -mb-[3px] transition-all ease-linear duration-3000"
            ></div>
          </div>
        </div>
      )}

      <Modal
        visible={vDialogVisible}
        className="text-center poppins tracking-wide font-semibold"
        verticalActions
        onClose={() => {
          setVDialogVisible(false);
        }}
        actions={[
          {
            text: "Tiếp tục mà không cần ngày sinh",
            close: true,
            onClick: () => setVDialogVisible(false)
          },
          {
            text: "OK",
            highLight: true,
            onClick: () => {
              // check coi đã nhập ngày tháng chưa
              if (date === null) {
                handleShaking();
              } else {
                setVDialogVisible(false);
                console.log("chạm else: ", confirmEnteredDate);
                declareBirthdateToHasura();
              }
            },
          },
        ]}
      >
        <Box className="space-y-4">
          <div
            className={`font-bold ${shaking && "shake"} text-start text-2xl -mt-3 -mb-2`}
          >
            Nhập ngày sinh của bạn
          </div>
          <Text className="text-start">
            để chúng tôi có thể giúp bạn trải nghiệm tốt hơn
          </Text>
          <DatePicker
            mask
            maskClosable
            dateFormat="dd/mm/yyyy"
            placeholder="Ngày sinh"
            value={datepickerIsClicked ? date : undefined}
            onChange={dateChangeHandler}
            title="Ngày sinh"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default AskBirthdate;
