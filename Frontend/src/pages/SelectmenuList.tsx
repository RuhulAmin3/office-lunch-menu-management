/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetSelectmenusQuery } from "../features/select-menu/select-menu.api";
import Loader from "../components/ui/Loader";
import SelectmenuItem from "../features/select-menu/components/SelectmenuItem";
import { Col, Row } from "antd";

const SelectmenuList = () => {
    const [query, setQuery] = useState({ date: "2024-05-23T00:00:00Z" })

    const { data, isLoading, isError } = useGetSelectmenusQuery(query);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>{"something is wrong"}</p>}
            {data?.data?.length == 0 && <p>{"data not found"}</p>}
            <Row gutter={[10, 10]}>
                {data?.data?.length > 0 &&
                    data?.data?.map((menu: any) => (
                        <Col span={6} key={menu?.id}>
                            <SelectmenuItem key={menu?.id} menu={menu} />
                        </Col>
                    ))}
            </Row>
        </>
    )
}

export default SelectmenuList