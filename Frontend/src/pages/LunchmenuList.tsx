import { useGetLunchmenusQuery } from "../features/lunch-menu/lunch-menu.api"
import Loader from "../components/ui/Loader";
import LunchMenuItem from "../features/lunch-menu/components/LunchMenuItem";
import { Col, Row, Typography } from "antd"; // Import Typography from Ant Design
import Header from "../components/ui/Header";
import { LunchMenuType } from "../features/lunch-menu/types";
import DataNotFound from "../components/ui/DataNotFound";
import ErrorMessage from "../components/ui/ErrorMessage";

const { Title } = Typography; // Destructure Title from Typography

const LunchmenuList = () => {

    const date = new Date(Date.now()).toISOString().split("T")[0];

    const { data, isLoading, isError } = useGetLunchmenusQuery({ date });

    return (
        <>
            {isLoading && <Loader />}
            {isError && <ErrorMessage message={"Something is Wrong"} />}
            {
                data?.data?.length === 0 &&
                <>
                    <Header background="#e7e7e7" />
                    <DataNotFound />
                </>
            }
            {data?.data?.length > 0 && <>
                <Header background="#e7e7e7" />

                <div style={{ width: "90vw", marginInline: "auto", marginTop: "20px" }}>
                    {/* Apply styles to the Title component */}
                    <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
                        Available Lunch Menus for Today
                    </Title>
                    <Row gutter={[10, 10]} >
                        {data?.data?.map((menu: LunchMenuType) => (
                            <Col span={6} key={menu?.id}>
                                <LunchMenuItem key={menu?.id} menu={menu} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </>
            }
        </>
    )
}

export default LunchmenuList;
