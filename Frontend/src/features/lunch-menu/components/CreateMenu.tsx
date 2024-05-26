/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Flex, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormDatePicker from "../../../components/Forms/FormDatePicker";
import FormTextArea from "../../../components/Forms/FormTextArea";
import { useCreateLunchmenuMutation, useUploadImagesMutation } from "../lunch-menu.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormImageUpload from "../../../components/Forms/FormImageInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { createLunchMenuValidator } from "../lunch-menu.validator";

const CreateMenu = () => {
    const [imageFile, setImageFile] = useState();
    const [createLunchmenu, { data, isLoading, isSuccess, isError, error }] = useCreateLunchmenuMutation();
    const [uploadImages] = useUploadImagesMutation();
    const navigate = useNavigate();

    const handleImage = async (pics) => {
        if (pics) {
            if (pics.type === "image/jpeg" || pics.type === "image/png") {
                const data = new FormData();
                data.append("file", pics);
                data.append("upload_preset", "poco-site");
                data.append("cloud_name", "online-poco");
                return uploadImages(data);
            }
        } else {
            message.warning("upload your image first");
            return;

        }
    };


    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            const fileInfo = await handleImage(imageFile);
            if (fileInfo?.data?.secure_url) {
                data["image"] = fileInfo?.data?.secure_url;
                await createLunchmenu(data);
            }
        } catch (err) {
            console.log("err", err);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            message.success("Lunch menu created successfully")
            navigate("/");
        }

        if (isError) {
            message.error((error as any)?.data?.message);
        }
    }, [data, isSuccess, isError, error, navigate])

    return (
        <Form submitHandler={onSubmit} resolver={yupResolver(createLunchMenuValidator)}>
            <Card style={{ maxWidth: "600px", width: "100%", marginInline: "auto" }}>
                <Flex vertical gap="large">
                    <FormImageUpload setImageFile={setImageFile} name="image" label="Upload Image" accept=".jpg,.jpeg,.png" />

                    <FormInput name="title" label="Title" required placeholder="Enter Your Lunch title" type="text" />

                    <FormDatePicker required name="date" label="Select Lunch Menu date" />

                    <FormTextArea required name="description" label="Description" placeholder="Enter your description" rows={5} />
                    <Button
                        loading={isLoading}
                        disabled={isLoading}
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        Create Lunch Menu
                    </Button>
                </Flex>
            </Card>
        </Form>
    )
}

export default CreateMenu;