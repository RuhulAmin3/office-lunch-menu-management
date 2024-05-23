import { Button, Card, Flex } from "antd"
import Form from "../components/Forms/Form"
import FormInput from "../components/Forms/FormInput"

const Login = () => {
    return (
        <div
            style={{
                backgroundImage:
                    'url("https://safewheel.sgp1.cdn.digitaloceanspaces.com/others/engin-akyurt-HEMIBJ8QQuA-unsplash%20(3).jpg")',
                height: "100vh",
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
                <Form submitHandler={() => { }}>
                    <Card style={{ width: 400 }}>
                        {/* <img src={Logo} alt="" style={{ width: "120px" }} /> */}
                        <Flex vertical gap="large">
                            <FormInput name="email" label="Email" required placeholder="Enter Your Email" type="email" />
                            <FormInput name="password" label="Password" required placeholder="Enter your password" type="password" />
                            <Button
                                // loading={loading}
                                // disabled={loading}
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