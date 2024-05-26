
import { Avatar, Button, Card, message } from "antd";

import { useCreateSelectmenuMutation, useDeselectSelectmenuMutation } from "../../select-menu/select-menu.api";
import { getUserInfo } from "../../auth/auth.service";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { deselectSelectLunchmenu, selectLunchmenu, setStoreToLocalStorage } from "../lunch-menu.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { LunchMenuType } from "../types";
import LunchMenuViewModal from "./LunchMenuViewModal";


const { Meta } = Card;

const LunchMenuItem = ({ menu }: { menu: LunchMenuType }) => {
    const { image, title, description, date, id } = menu || {};
    const { userId } = getUserInfo();
    const [isOpen, setIsOpen] = useState(false);
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
            message.warning("Lunch menu deselected successfully");
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
        <>
            <Card
                cover={
                    <img
                        style={{
                            height: "250px",
                            objectFit: "cover"
                        }}
                        alt="image"
                        src={image ? image : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                    />
                }
                actions={[
                    menus?.includes(id) ?
                        <Button onClick={handleDeselectSelectMenu} disabled={isLoading}>Deselect</Button> :
                        <Button onClick={handleSelectMenu} disabled={res?.isLoading}>Select</Button>,
                    <Button onClick={() => setIsOpen(true)}>View</Button>
                ]}
            >

                <p>Lunch menu for <strong>
                    {formattedDate}
                </strong>
                </p>

                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title={title}
                    description={description.split(" ").length < 2 ? description : description?.slice(0, 40) + " ..."}

                />
            </Card>
            <LunchMenuViewModal menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default LunchMenuItem;
