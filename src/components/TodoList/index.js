import { Col, Row, Input, Button, Select, Tag,Space,QRCode } from 'antd';
import Todo from '../Todo';
import {  useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import { getAllTask } from '../../features/todo/todoSlice';
export default function TodoList() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState("");
  const [optionValue, setOptionValue] = useState("Medium");
  const addNewTask =()=>{
    if (taskData !== "") {
      dispatch(addTodo({taskData,optionValue}));
      setTaskData("");
      setOptionValue("Medium");
    }
  }
  const handleOptionChange =(value)=>{
    setOptionValue(value);
  }
  const listTask = useSelector(getAllTask);
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {listTask.map(task=>(
        <Todo name={task.text.taskData} prioriry={task.text.optionValue} key={task.id}/>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={taskData} onChange={(e)=>setTaskData(e.target.value)}  />
          <Select  value={optionValue} onChange={handleOptionChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value={optionValue} label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={addNewTask}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
