import { FC } from "react"
import ViewModal from "../../../components/ui/ViewModal"
import { SelectedLunchMenu } from "../types"
import { Avatar, Flex, Space, Typography } from 'antd';

import { generateRandomColor } from "../../../common/utils";

const { Text, Title } = Typography;

const SelectedLunchModal: FC<{ menu: SelectedLunchMenu, isOpen: boolean, setIsOpen: (x: boolean) => void }> = ({ menu, isOpen, setIsOpen }) => {
    const { lunchMenu, user } = menu || {};

    return (
        <ViewModal isOpen={isOpen} title="View Details" closeModal={() => setIsOpen(false)}>
            <Space direction="vertical" style={{ marginBottom: "15px" }}>
                <Title level={4}>{lunchMenu?.title}</Title>
                <img src={lunchMenu?.image} style={{ height: "300px", width: "100%", objectFit: "contain" }} />
                <Text style={{ marginBottom: "20px" }}> Description: {lunchMenu?.description}</Text>
            </Space>

            <Flex gap="10px" align="center">
                <Avatar style={{ backgroundColor: `${generateRandomColor()}` }}>
                    {user?.firstName.split("")[0] + user?.lastName.split("")[0]}</Avatar>
                <Text>Employee: {user?.firstName + user?.lastName}</Text>
            </Flex>
        </ViewModal>
    )
}

export default SelectedLunchModal