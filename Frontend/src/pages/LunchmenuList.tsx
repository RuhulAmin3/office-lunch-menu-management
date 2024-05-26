import { useState } from "react";
import { useGetLunchmenusQuery } from "../features/lunch-menu/lunch-menu.api"
import Loader from "../components/ui/Loader";
import LunchMenuItem from "../features/lunch-menu/components/LunchMenuItem";
import { Col, Row } from "antd";
import Header from "../components/ui/Header";

const LunchmenuList = () => {
    const [query, setQuery] = useState({ date: "2024-05-23T00:00:00Z" })

    const { data, isLoading, isError } = useGetLunchmenusQuery(query);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>{"something is wrong"}</p>}
            {
                data?.data?.length == 0 &&
                <>
                    <Header />
                    <p>{"data not found"}</p>
                </>
            }
            {data?.data?.length > 0 && <>
                <Header />
                <div style={{ width: "90vw", marginInline: "auto" }}>
                    <Row gutter={[10, 10]} >
                        {data?.data?.map((menu: any) => (
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