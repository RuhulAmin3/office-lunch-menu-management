/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Card, message } from "antd";

import { useCreateSelectmenuMutation, useDeselectSelectmenuMutation } from "../../select-menu/select-menu.api";
import { getUserInfo } from "../../auth/auth.service";
import dayjs from "dayjs";
import { useEffect } from "react";
import { deselectSelectLunchmenu, selectLunchmenu, setStoreToLocalStorage } from "../lunch-menu.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

const { Meta } = Card;

const LunchMenuItem = ({ menu }: any) => {
    const { image, title, description, date, id } = menu || {};
    const { userId } = getUserInfo();
    const [createSelectmenu, { data, isSuccess, isLoading, isError, error }] = useCreateSelectmenuMutation();
    const [deselectSelectmenu, res] = useDeselectSelectmenuMutation();

    const { menus } = useAppSelector((state) => (state as any)?.lunchMenu)
    const dispatch = useAppDispatch();

    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    const selectMenuData = {
        userId,
        lunchMenuId: id,
        date,
    }

    const handleSelectMenu = () => {
        createSelectmenu(selectMenuData);
    }

    const handleDeselectSelectMenu = () => {
        deselectSelectmenu({ id, userId })
    }

    useEffect(() => {
        if (isSuccess && data) {
            message.success("menu selected for you");
            dispatch(selectLunchmenu(id));
        }

        if (isError) {
            message.error((error as any)?.data?.message);
        }

    }, [data, isSuccess, isError, error, id])

    useEffect(() => {
        if (res?.isSuccess) {
            message.success("Lunch menu deselected successfully");
            dispatch(deselectSelectLunchmenu(id));
        }

        if (res?.isError) {
            message.error((res?.error as any)?.data?.message);
        }

    }, [res.data, res?.isSuccess, res.isError, id])

    useEffect(() => {
        dispatch(setStoreToLocalStorage());
    }, [])


    return (
        <Card
            cover={
                <img

                    alt="image"
                    src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                />
            }
            actions={[
                menus?.includes(id) ?
                    <Button onClick={handleDeselectSelectMenu} disabled={isLoading}>Deselect</Button> :
                    <Button onClick={handleSelectMenu} disabled={res?.isLoading}>Select</Button>,
                <Button>View</Button>
            ]}
        >

            <p style={{ textAlign: "right" }}>{formattedDate}</p>

            <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title={title}
                description={description}

            />
        </Card>
    )
}

export default LunchMenuItem;