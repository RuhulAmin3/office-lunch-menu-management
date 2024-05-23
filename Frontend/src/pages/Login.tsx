/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Flex, message } from "antd"
import Form from "../components/Forms/Form"
import FormInput from "../components/Forms/FormInput"
import { SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "../features/auth/auth.api"
import { useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginValidator } from "../features/auth/auth.validator"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [login, { data, isLoading, isSuccess, isError, error }] =
        useLoginMutation();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            login(data);
        } catch (err) {
            console.log("err", err);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            message.success("register successful")
            navigate("/lunch-menus");
        }

        if (isError) {
            console.log("error", error);
            message.error((error as any)?.data?.message);
        }
    }, [data, isSuccess, isError, error])


    return (
        <div
            style={{
                backgroundImage:
                    'url("https://safewheel.sgp1.cdn.digitaloceanspaces.com/others/engin-akyurt-HEMIBJ8QQuA-unsplash%20(3).jpg")',
                height: "100vh",
                width: "100vw",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "96vh",
                }}
            >
                <Form submitHandler={onSubmit} resolver={yupResolver(loginValidator)}>
                    <Card style={{ width: 400 }}>
                        <Flex vertical gap="large">
                            <FormInput name="email" label="Email" required placeholder="Enter Your Email" type="email" />
                            <FormInput name="password" label="Password" required placeholder="Enter your password" type="password" />
                            <Button
                                loading={isLoading}
                                disabled={isLoading}
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Login
                            </Button>
                        </Flex>
                    </Card>
                </Form>
            </div>
        </div>
    )
}

export default Login