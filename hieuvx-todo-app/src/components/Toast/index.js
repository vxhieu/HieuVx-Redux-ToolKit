import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

export const Toast = ({ status }) => {
  const [modal, contextHolder] = Modal.useModal();
  useEffect(() => {
    if (status.authenticated === false) {
      countDown(false);
    }
    if (status.authenticated === true) {
      countDown(true);
    }
  }, [status]);
  const countDown = (isStatus) => {
    let secondsToGo = 3;
    let instance;
    if (!isStatus) {
      instance = modal.error({
        title: "Incorrect password or user name",
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    } else {
      instance = modal.success({
        title: "Login Sucess",
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }
    const timer = setInterval(() => {
        console.log(instance);
      secondsToGo -= 1;
      instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  return (
    <>
      {contextHolder}
    </>
  );
};
