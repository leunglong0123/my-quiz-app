import * as React from "react"
import { Layout, Menu } from "antd"
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"
import { navigate } from "gatsby"
const SideBar = ({ element }) => {
  const { Header, Content, Footer, Sider } = Layout
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={null}>
            <Menu.Item
              type="link"
              key="1"
              onClick={() => {
                navigate("/")
              }}
              icon={<UserOutlined />}
            >
              Profile
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                navigate("/question")
              }}
              icon={<VideoCameraOutlined />}
            >
              Begin Quiz
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                console.log("Clicked")
              }}
              icon={<UploadOutlined />}
            >
              Setting
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => {
                console.log("Clicked")
              }}
              icon={<UserOutlined />}
            >
              About Us
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0", height: "83vh" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 400 }}
            >
              {element}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default SideBar
