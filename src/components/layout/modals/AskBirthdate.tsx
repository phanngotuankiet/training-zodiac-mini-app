import React from "react";
import { Modal, Box, Text, DatePicker } from "zmp-ui";

const AskBirthdate = () => {
  return <Modal
    visible
    className=""
    title="Nhập ngày sinh của bạn"
    actions={[
      {
        text: "Tiếp tục sử dụng mà không cần ngày sinh",
      },
      {
        text: "OK",
        highLight: true,
      },
    ]}
  >
    <Box className="space-y-4">
      <Text className="">
        Để chúng tôi có thể giúp bạn trải nghiệm tốt hơn
      </Text>

      <DatePicker
        mask
        maskClosable
        dateFormat='dd/mm/yyyy'
        placeholder="Ngày sinh"
        title='Ngày sinh'
      />
    </Box>
  </Modal>
}

export default AskBirthdate;