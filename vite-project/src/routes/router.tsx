import {createBrowserRouter, Navigate} from "react-router-dom";
import AssetDashboard from "../pages/listPage/dashboard/dashboard.tsx";
import AssetList from "../pages/listPage/list/list.tsx";
import AddNewAsset from "../layouts/FormAdd/formAddNewAs.tsx";
import AssetDetail from "../pages/assetDetail/assetDetail.tsx";
import EmptyPage from "../pages/emptyPage/page.tsx";
import HomePage from "../pages/homePage/HomePage.tsx";
import ListPages from "../pages/listPage/page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                index: true,
                element: <Navigate to="/taisan/list" replace/>,
            },
            {
                path: "taisan",
                element: <ListPages/>,
                children: [
                    {
                        index: true,
                        element: <AssetList/>,
                    },
                    {
                        path: 'dasboard',
                        element: <AssetDashboard/>,
                    },
                    {
                        path: 'list',
                        element: <AssetList/>,
                        children: [
                            {
                                path: 'w-create',
                                element: <AddNewAsset/>,
                            },
                        ]
                    },
                    {
                        path: 'list/detail/:id',
                        element: <AssetDetail/>,
                    },
                ]
            },
            {
                path: "tongquan",
                element: <EmptyPage/>,
            },
            {
                path: "quytrinh",
                element: <EmptyPage/>,
            },
            {
                path: "congviec",
                element: <EmptyPage/>,
            },
            {
                path: "dashboard",
                element: <EmptyPage/>,
            },
            {
                path: "flow",
                element: <EmptyPage/>,
            },
            {
                path: "work",
                element: <EmptyPage/>,
            },
        ]
    }


])

export default router;