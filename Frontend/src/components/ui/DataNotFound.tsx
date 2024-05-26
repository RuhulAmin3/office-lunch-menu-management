
import { Result, Button } from 'antd';

const DataNotFound = () => {
    return (
        <Result
            status="404"
            title="Data Not Found"
            subTitle="Sorry, the data you're looking for does not exist."
            extra={
                <Button type="primary">
                    Retry
                </Button>
            }
        />
    );
}

export default DataNotFound;
