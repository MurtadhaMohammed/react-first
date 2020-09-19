import { Row, Col, Input, Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const TodoForm = (props) => {
  return (
    <div className="form">
      <Row gutter={20}>
        <Col span={18}>
          <Input
            placeholder="Write any text..."
            value={props.todoName}
            onChange={(e) => props.setTodoName(e.target.value)}
          />
        </Col>
        <Col span={4}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              props.setTodos([...props.todos, props.todoName]);
              props.setTodoName("");
              localStorage.setItem(
                "todos",
                JSON.stringify([...props.todos, props.todoName])
              );
            }}
          >
            Add
          </Button>
        </Col>
        <Col span={2}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => {
              // setTodos([]);
              // localStorage.setItem("todos", "");
            }}
            danger
          />
        </Col>
      </Row>
    </div>
  );
};

export default TodoForm;
