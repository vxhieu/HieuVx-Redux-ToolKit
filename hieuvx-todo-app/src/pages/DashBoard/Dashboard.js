import { Typography, Divider,QRCode,Space } from 'antd';
import Filters from '../../components/Filters';
import TodoList from '../../components/TodoList'

const { Title } = Typography;

const DashBoard= ()=> {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO  with REDUX</Title>
      <Space direction="vertical" align="center" >
    <QRCode type="canvas" value="https://github.com/vxhieu/NextJs" />
  </Space>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default DashBoard;
