import * as React from "react"
import { Card, Col, Row } from "antd"
import SideBar from "../../component/layout/SideBar"
import { Link } from "gatsby"
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// data

const IndexPage = () => {
  return (
    <div style={{ height: "100" }}>
      <SideBar>
        <div className="container" style={{ width: "80" }}>
          <Row gutter={8}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </SideBar>
    </div>
  )
}

export default IndexPage
