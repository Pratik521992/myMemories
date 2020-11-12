import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Modal, DatePicker, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBirthday, closeAddBirthdays } from "../../../_actions/modal_actions";

function AddBirthdays(props) {
  const [formData, setFormData] = useState({});
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const closeAddModal = () => {
    dispatch(closeAddBirthdays());
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const submitForm = () => {
    if (!formData.name || !formData.email || !formData.date) {
      return alert("fill all the fields first!");
    }
    if (!user || !user.userData || !user.userData.isAuth) {
      props.history.push("/login");
      dispatch(closeAddBirthdays());
      return;
    }
    const payload = {
      writer: user.userData._id,
      writerName: user.userData.name,
      name: formData.name,
      email: formData.email,
      date: formData.date,
      linkedin: formData.linkedin,
      facebook: formData.facebook,
      wishes: formData.message,
      pagination: formData.pagination
    };
    console.log(payload)
    dispatch(addBirthday(payload));
    dispatch(closeAddBirthdays());
  };

  return (
    <div>
      <Modal
        title="Add Birthdays"
        visible={modal.modalStatus}
        onOk={submitForm}
        onCancel={closeAddModal}
      >
        <Form
          layout="horizontal"
          size="small"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="Name" required tooltip="This is a required field">
            <Input
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item name="date-picker" required label="DatePicker" {...config}>
            <DatePicker
              name="date"
              value={formData.date}
              onChange={onDateChange}
            />
          </Form.Item>
          <Form.Item label="LinkedIn ID">
            <Input
              placeholder="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Facebook ID">
            <Input
              placeholder="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Wishes">
            <Input.TextArea
              placeholder="enter a message"
              name="message"
              value={formData.message}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Pagination">
            <Input
              placeholder="enter page number"
              name="pagination"
              value={formData.pagination}
              onChange={onChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default withRouter(AddBirthdays);
