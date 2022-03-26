import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button, Table, Checkbox } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import { completeTodo, uncompleteTodo, deleteTodo } from "../../action";

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default function Todo() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const route = useRouter();

  const handleCheck = (e, id) => {
      if (e.target.checked) {
          dispatch(completeTodo(id));
      } else {
        dispatch(uncompleteTodo(id));
      }
  }

  const handleDelete = (id) => {
      dispatch(deleteTodo(id));
  }

  const handleAddNew = () => {
      route.push('/todo/add-todo');
  }

  const column = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: '',
        key: 'complete',
        dataIndex: 'complete',
        render: (text, record) => (
            <>
            <Checkbox checked={record.complete} onChange={(e) => handleCheck(e, record.id)} />
            </>
        )
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <>
                <Button type="primary" danger onClick={(e) => handleDelete(record.id)}>Delete</Button>
            </>
        )
      }
  ];

  return (
    <Wrapper>
      <Button type="primary" icon={<PlusOutlined />} onClick={() => handleAddNew()}>Add New</Button>
      <Table dataSource={data} columns={column} rowKey="id" style={{ marginTop: '10px' }} />
    </Wrapper>
  );
}
