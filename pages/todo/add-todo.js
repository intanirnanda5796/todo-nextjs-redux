import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action";
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 500px;
  margin-left: 25%;
  margin-top: 20px;
`;

const todoSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
});

export default function AddTodo() {

  const dispatch = useDispatch();
  const route = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: todoSchema,
    onSubmit: (values) => {
      dispatch(addTodo(values));
      route.push('/todo');
    },
  });

  return (
    <Wrapper>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item 
        label="title"
        name="title"
        required={true}
        onChange={(e) => formik.setFieldValue("title", e.target.value)}>
          <Input
            placeholder="input your title"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}
