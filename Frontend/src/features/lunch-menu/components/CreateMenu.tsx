/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Flex, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormDatePicker from "../../../components/Forms/FormDatePicker";
import FormTextArea from "../../../components/Forms/FormTextArea";
import { useCreateLunchmenuMutation } from "../lunch-menu.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateMenu = () => {

    const [createLunchmenu, { data, isLoading, isSuccess, isError, error }] = useCreateLunchmenuMutation();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            console.log("date", data.date);
            // createLunchmenu(data);

        } catch (err) {
            console.log("err", err);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            message.success("Lunch menu created successfully")
            // navigate("/");
        }

        if (isError) {
            message.error((error as any)?.data?.message);
        }
    }, [data, isSuccess, isError, error, navigate])


    return (
        <Form submitHandler={onSubmit}>
            <Card style={{ maxWidth: "600px", width: "100%", marginInline: "auto" }}>
                <Flex vertical gap="large">
                    <FormInput name="title" label="Title" required placeholder="Enter Your title" type="text" />

                    <FormDatePicker name="date" label="Select Date" />

                    <FormTextArea name="description" label="Description" placeholder="Enter your description" rows={5} />
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