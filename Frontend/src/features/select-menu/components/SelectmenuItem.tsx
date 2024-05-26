import { Avatar, Button, Card } from "antd";
import { generateRandomColor } from "../../../common/utils";
import { SelectedLunchMenu } from "../types";
import SelectedLunchModal from "./SelectedLunchModal";
import { useState } from "react";

const { Meta } = Card;

const SelectmenuItem = ({ menu }: { menu: SelectedLunchMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { firstName, lastName } = menu?.user || {};

    const { title, image, description } = menu?.lunchMenu || {};

    return (
        <>
            <Card
                cover={
                    <img
                        style={{
                            height: "250px",
                            objectFit: "cover"
                        }}
                        alt="example"
                        src={image ? image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                    />
                }
                actions={[
                    <Button onClick={() => setIsOpen(true)}>View</Button>
                ]}
            >
                <Meta
                    avatar={<Avatar style={{ backgroundColor: `${generateRandomColor()}` }}>
                        {firstName.split("")[0] + lastName.split("")[0]}</Avatar>}
                    title={title}
                    description={description.split(" ").length < 2 ? description : description?.slice(0, 40) + " ..."}
                />
            </Card>
            <SelectedLunchModal isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} />

        </>
    )
}

export default SelectmenuItem;
