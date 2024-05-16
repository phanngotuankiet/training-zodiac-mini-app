import React, { startTransition } from "react";
import { useNavigate } from "react-router";
import { Page } from "zmp-ui";

const ForceInputBirthday = () => {
  const navigate = useNavigate();
  const handleSettingsUpdate = () => {
    startTransition(() => {
      navigate("/update-birthdate");
    });
  };

  return (
    <Page className="page flex items-center justify-center bg-[#f4eee3] poppins">
      <div className="space-y-2">
        <p className="text-xl">Bạn chưa cập nhật ngày sinh?</p>

        <div className="flex justify-center">
          <button
            className="bg-[#9f7c35] text-white py-3 px-5 text-lg rounded-lg w-fit"
            onClick={handleSettingsUpdate}
          >
            Cập nhật để xem cho tiện!
          </button>
        </div>
      </div>
    </Page>
  );
};

export default ForceInputBirthday;
