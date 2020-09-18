import { useState, useEffect } from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    const _storageData = localStorage.getItem("todos");
    if (_storageData) {
      setTodos(JSON.parse(_storageData));
    }
  }, []);

  return (
    <div className="container">
      <div className="form">
        <Row gutter={20}>
          <Col span={18}>
            <Input
              placeholder="Write any text..."
              value={todoName}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Button
              style={{ width: "100%" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setTodos([...todos, todoName]);
                setTodoName("");
                localStorage.setItem(
                  "todos",
                  JSON.stringify([...todos, todoName])
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
                 setTodos([])
                 localStorage.setItem("todos", "")
              }}

              danger
            />
          </Col>
        </Row>
      </div>

      <div className="todo-list">
        {todos.map((item, index) => (
          <Card hoverable key={index}>
            <Row>
              <Col span={23}>{item}</Col>
              <Col span={1}>
                <Button
                  danger
                  type="primary"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    setTodos(todos.filter((el) => el !== item));
                    localStorage.setItem("todos", JSON.stringify(todos.filter((el) => el !== item)))
                  }}
                />
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
