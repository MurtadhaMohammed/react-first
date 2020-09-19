import {Card, Row, Col, Button} from 'antd'
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = (props) => {
  return (
    <Card hoverable >
      <Row>
        <Col span={23}>{props.item}</Col>
        <Col span={1}>
          <Button
            danger
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => {
              props.setTodos(props.todos.filter((el) => el !== props.item));
              localStorage.setItem(
                "todos",
                JSON.stringify(props.todos.filter((el) => el !== props.item))
              );
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default TodoItem
