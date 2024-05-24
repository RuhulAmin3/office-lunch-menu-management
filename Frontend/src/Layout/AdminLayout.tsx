
import { Layout } from "antd";
import { useEffect, useState } from "react";
import Loader from '../components/ui/Loader';
import SideBar from '../components/ui/Sidebar';
import Contents from '../components/ui/Content';
import { Outlet, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../features/auth/auth.service';

const AdminLayout = () => {
    const userLoggedIn = isLoggedIn();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/login");
        }
        setIsLoading(true);
    }, [navigate, isLoading, userLoggedIn]);

    if (!isLoading) {
        return <Loader />
    }

    return (
        <Layout hasSider>
            <SideBar />
            <Contents>
                <Outlet />
            </Contents>
        </Layout>
    );
};

export default AdminLayout;