import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { ROLE } from "../../common/types";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { userLogout } from "../../features/auth/auth.service";

const { Header: AntHeader } = Layout;

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        userLogout();
        navigate("/login");
    }

    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <Button type="text" danger onClick={handleLogout}>
                    Logout
                </Button>
            ),
        },
    ];

    const role = ROLE.Admin;

    return (
        <AntHeader
            style={{
                background: "#fff"
            }}
        >
            <Row
                justify="end"
                align="middle"
                style={{
                    height: "100%",
                }}
            >
                <p
                    style={{
                        margin: "0px 5px",
                    }}
                >
                    {role}
                </p>
                <Dropdown menu={{ items }}>
                    <Space wrap size={16}>
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Space>
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;