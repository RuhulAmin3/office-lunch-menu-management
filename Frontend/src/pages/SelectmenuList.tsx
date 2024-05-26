/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetSelectmenusQuery } from "../features/select-menu/select-menu.api";
import Loader from "../components/ui/Loader";
import SelectmenuItem from "../features/select-menu/components/SelectmenuItem";
import { Col, DatePicker, DatePickerProps, Flex, Row } from "antd";
import DataNotFound from "../components/ui/DataNotFound";
import ErrorMessage from "../components/ui/ErrorMessage";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import dayjs from "dayjs";

const SelectmenuList = () => {
    const date = new Date(Date.now()).toISOString().split("T")[0];
    const [query, setQuery] = useState({ date });

    const { data, isLoading, isError } = useGetSelectmenusQuery(query);

    const onChange: DatePickerProps['onChange'] = (_, dateString) => {

        const stringDate = new Date(dateString as string).toISOString().split("T")[0];
        setQuery({ date: stringDate });
    };


    return (
        <>
            {isLoading && <Loader />}
            {isError && <ErrorMessage message={"Something is Wrong"} />}


            <Flex justify="space-between" align="center" style={{ width: "100%", marginBottom: "10px" }}>

                <Title level={4} style={{ marginBlock: "10px" }}>On {query.date}, lunch menus were selected by employees.</Title>

                <DatePicker onChange={onChange} defaultValue={dayjs(Date.now())} />
            </Flex>

            {data?.data?.length == 0 && <DataNotFound />}

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