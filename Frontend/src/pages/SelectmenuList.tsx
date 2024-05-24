import { useState } from "react";
import { useGetSelectmenusQuery } from "../features/select-menu/select-menu.api";
import Loader from "../components/ui/Loader";
import SelectmenuItem from "../features/select-menu/components/SelectmenuItem";
import { Flex } from "antd";

const SelectmenuList = () => {
    const [query, setQuery] = useState({ date: "2024-05-23T00:00:00Z" })

    const { data, isLoading, isError } = useGetSelectmenusQuery(query);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>{"something is wrong"}</p>}
            {data?.data?.length == 0 && <p>{"data not found"}</p>}

            {data?.data?.length > 0 && <Flex gap={8}>
                {data?.data?.map((menu: any) => (
                    <SelectmenuItem key={menu?.id} menu={menu} />
                ))}
            </Flex>}
        </>
    )
}

export default SelectmenuList