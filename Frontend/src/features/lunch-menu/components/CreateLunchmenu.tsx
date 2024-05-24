/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Flex } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../../../components/Forms/Form";
import FormInput from "../../../components/Forms/FormInput";
import FormDatePicker from "../../../components/Forms/FormDatePicker";
import FormTextArea from "../../../components/Forms/FormTextArea";

const CreateMenu = () => {
    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            // login(data);
            console.log("data", data);
        } catch (err) {
            console.log("err", err);
        }
    };


    return (
        <Form submitHandler={onSubmit}>
            <Card style={{ maxWidth: "600px", width: "100%", marginInline: "auto" }}>
                <Flex vertical gap="large">
                    <FormInput name="title" label="Title" required placeholder="Enter Your title" type="text" />

                    <FormDatePicker name="date" label="Select Date" />

                    <FormTextArea name="description" label="Description" placeholder="Enter your description" rows={5} />
                    <Button
                        // loading={isLoading}
                        // disabled={isLoading}
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