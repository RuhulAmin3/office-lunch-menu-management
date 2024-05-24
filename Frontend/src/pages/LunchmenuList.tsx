import { useState } from "react";
import { useGetLunchmenusQuery } from "../features/lunch-menu/lunch-menu.api"
import Loader from "../components/ui/Loader";
import LunchMenuItem from "../features/lunch-menu/components/LunchMenuItem";

const LunchmenuList = () => {
    const [query, setQuery] = useState({ date: "2024-05-23T00:00:00Z" })

    const { data, isLoading, isError } = useGetLunchmenusQuery(query);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>{"something is wrong"}</p>}
            {data?.data?.length == 0 && <p>{"data not found"}</p>}
            {data?.data?.length > 0 && data?.data?.map((menu: any) => (
                <LunchMenuItem key={menu?.id} menu={menu} />
            ))}
        </>
    )
}

export default LunchmenuList;