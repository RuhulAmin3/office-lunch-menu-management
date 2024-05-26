
import { FC } from "react"
import ViewModal from "../../../components/ui/ViewModal"
import { Space, Typography } from 'antd';

import { LunchMenuType } from "../types";

const { Text, Title } = Typography;

const LunchMenuViewModal: FC<{ menu: LunchMenuType, isOpen: boolean, setIsOpen: (x: boolean) => void }> = ({ menu, isOpen, setIsOpen }) => {
    const { description, image, title } = menu || {};

    return (
        <ViewModal isOpen={isOpen} title="View Details" closeModal={() => setIsOpen(false)}>
            <Space direction="vertical" style={{ marginBottom: "15px" }}>
                <Title level={4}>{title}</Title>
                <img src={image} style={{ height: "300px", width: "100%", objectFit: "contain" }} />
                <Text style={{ marginBottom: "20px" }}> Description: {description}</Text>
            </Space>
        </ViewModal>
    )
}

export default LunchMenuViewModal