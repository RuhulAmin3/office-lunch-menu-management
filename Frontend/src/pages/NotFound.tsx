import { Row, Col } from 'antd';

const NotFound = () => {
    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Not Found</h1>
                    <p>Sorry, the page you're looking for does not exist.</p>
                </div>
            </Col>
        </Row>
    );
}

export default NotFound;
