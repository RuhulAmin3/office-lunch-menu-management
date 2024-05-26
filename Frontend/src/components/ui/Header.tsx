import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, userLogout } from "../../features/auth/auth.service";

const { Header: AntHeader } = Layout;

const Header = ({ background }: { background?: string }) => {
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

    const { role } = getUserInfo();

    return (
        <AntHeader
            style={{
                background: background ? background : "#fff",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
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
        </AntHeader >
    );
};

export default Header;