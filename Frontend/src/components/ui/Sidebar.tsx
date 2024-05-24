import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = [
        {
            label: <Link to="/create-lunch-menu">Create Lunch Menu</Link>,
            key: `create-lunch-menu`,
            icon: <ProfileOutlined />,
        },
        {
            label: <Link to="/select-menus">Select Menus</Link>,
            key: `select-menus`,
            icon: <ProfileOutlined />,
        },
    ]
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: collapsed ? "0.5rem" : "1.5rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: ".5rem",
                    padding: "10px 0px",
                    textTransform: "uppercase"
                }}
            >
                <Link to={"/"} style={{ color: "white" }}>LUNCH MANAGEMENT</Link>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems}
            />
        </Sider>
    );
};

export default SideBar;