import { Avatar, Card } from "antd";

const { Meta } = Card;

const SelectmenuItem = ({ menu }: any) => {
    const { firstName, lastName, email } = menu?.user || {};

    const { title, image, description, date } = menu?.lunchMenu || {};

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                />
            }
        >
            <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title={title}
                description={description}
            />
        </Card>
    )
}

export default SelectmenuItem;
