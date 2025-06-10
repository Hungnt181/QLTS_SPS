import { createBrowserRouter, Navigate } from "react-router-dom";
import AssetDashboard from "../pages/listPage/dashboard/dashboard.tsx";
import AssetList from "../pages/listPage/list/list.tsx";
import AddNewAsset from "../layouts/FormAdd/formAddNewAs.tsx";
import AssetDetail from "../pages/assetDetail/assetDetail.tsx";
import EmptyPage from "../pages/emptyPage/page.tsx";
import HomePage from "../pages/homePage/HomePage.tsx";
import ListPages from "../pages/listPage/page.tsx";
import MasterData from "../pages/listPage/settings/MasterData.tsx";
import TableTypeAsset from "../layouts/tableList/tableTypeAsset.tsx";
import TableGroupAsset from "../layouts/tableList/tableGroupAsset.tsx";
import AddNewGroupAs from "../layouts/FormAdd/formAddNewgroupAs.tsx";
import MyLisstAsset from "../pages/listPage/list/MyListAsset.tsx";
import FormConfig from "../pages/listPage/settings/FormConfig.tsx";
import TableListFormConfig from "../layouts/tableList/tableListFormConfig.tsx";
import FormConfigDetail from "../pages/listPage/settings/Detail/FormConfigDetail.tsx";
import AdvancedInfo from "../pages/listPage/settings/AdvancedInfo.tsx";
// import FormAdvancedInfoDetail from "../pages/listPage/settings/Detail/FromAdvancedInfoDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Navigate to="/taisan/list" replace />,
      },
      {
        path: "taisan",
        element: <ListPages />,
        children: [
          {
            index: true,
            element: <AssetList />,
          },
          // Dashboard
          {
            path: "dashboard",
            element: <AssetDashboard />,
          },
          // maintenance
          {
            path: "maintenance",
            element: <AssetDashboard />,
          },
          // fix
          {
            path: "fix",
            element: <AssetDashboard />,
          },
          // liquidation
          {
            path: "liquidation",
            element: <AssetDashboard />,
          },
          // inventory
          {
            path: "inventory",
            element: <AssetDashboard />,
          },
          //// List Asset
          {
            path: "list",
            element: <AssetList />,
            children: [
              {
                path: "w-create",
                element: <AddNewAsset />,
              },
            ],
          },
          {
            path: "my-asset",
            element: <MyLisstAsset />,
          },
          // Settings
          // Settings Master Data
          {
            path: "settings/master-data",
            element: <MasterData />,
            children: [
              {
                index: true,
                element: (
                  <Navigate to="/taisan/settings/master-data/group" replace />
                ),
              },
              {
                path: "group",
                element: <TableGroupAsset />,
                children: [
                  {
                    path: "w-create",
                    element: <AddNewGroupAs />,
                  },
                ],
              },
              {
                path: "type",
                element: <TableTypeAsset />,
                children: [
                  {
                    path: "w-create",
                    element: <AddNewGroupAs />,
                  },
                ],
              },
              {
                path: "status",
                element: <TableTypeAsset />,
              },
              {
                path: "state",
                element: <TableTypeAsset />,
              },
            ],
          },
          // Settings Form Config
          {
            path: "settings/form-config",
            element: <FormConfig />,
            children: [
              {
                index: true,
                element: (
                  <Navigate to="/taisan/settings/form-config/list" replace />
                ),
              },
              {
                path: "list",
                element: <TableListFormConfig />,
              },
            ],
          },
          // Settings Form advanced-info
          {
            path: "settings/advanced-info",
            element: <AdvancedInfo />,
          },
        ],
      },
      //deatail list tài sản
      {
        path: "taisan/list/detail/:id",
        element: <AssetDetail />,
      },
      //deatail formConfigtaif sản
      {
        path: "taisan/settings/form-config/detail/:id",
        element: <FormConfigDetail />,
      },
      // deatail formConfig ttnc tài sản
      // {
      //     path: 'taisan/settings/advanced-info/detail/:_id',
      //     element: <FormAdvancedInfoDetail/>,
      // },

      {
        path: "tongquan",
        element: <EmptyPage />,
      },
      {
        path: "quytrinh",
        element: <EmptyPage />,
      },
      {
        path: "congviec",
        element: <EmptyPage />,
      },
      {
        path: "dashboard",
        element: <EmptyPage />,
      },
      {
        path: "flow",
        element: <EmptyPage />,
      },
      {
        path: "work",
        element: <EmptyPage />,
      },
    ],
  },
]);

export default router;
