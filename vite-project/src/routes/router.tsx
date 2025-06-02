import {createBrowserRouter} from "react-router-dom";
import ListPages from "../pages/listPage/page.tsx";
import AssetDashboard from "../pages/listPage/dashboard/dashboard.tsx";
import AssetList from "../pages/listPage/list/list.tsx";
import AddNewAsset from "../layouts/FormAdd/formAddNewAs.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListPages/>
    },

    {
        path: '/:AssetID',
        element: <ListPages/>,
        children: [
            {
                path: 'dasboard',
                element: <AssetDashboard/>,
            },
            {
                path: 'list',
                element: <AssetList/>,
                children: [
                    {
                        path:'w-create',
                        element: <AddNewAsset/>,
                    }
                ]
            }
        ]
    },
    // {
    //     path: '/tongquan/:AssetID',
    //     element: <ListPages/>,
    // },
    // {
    //     path: '/quytrình/:AssetID',
    //     element: <ListPages/>,
    // },{
    //     path: '/congviec/:AssetID',
    //     element: <ListPages/>,
    // },
    // {
    //     path: '/taisan/:AssetID',
    //     element: <ListPages/>,
    //     children :  [
    //         {
    //             path: 'dasboard1',
    //             element: <AssetDashboard/>,
    //         },
    //         {
    //             path: 'dasboard2',
    //             element: <ListPages/>,
    //         },
    //         {
    //             path: 'dasboard3',
    //             element: <ListPages/>,
    //         },
    //     ]
    // },
    // {
    //     path: '/tongquan1/:AssetID',
    //     element: <ListPages/>,
    // },
    // {
    //     path: '/quytrình1/:AssetID',
    //     element: <ListPages/>,
    // },{
    //     path: '/congviec1/:AssetID',
    //     element: <ListPages/>,
    // },


])

export default router;