
import { Alert, Button } from 'antd';

const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Alert
                message="Error"
                description={message}
                type="error"
                showIcon
                action={
                    <Button type="primary">
                        Retry
                    </Button>
                }
            />
        </div>
    );
};

export default ErrorMessage;
