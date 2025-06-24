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
import AddNewTypeAs from "../layouts/FormAdd/formAddNewTypeAs.tsx";
import TableStatus from "../layouts/tableList/tableStatus.tsx";
import AddNewStatus from "../layouts/FormAdd/formAddNewStatus.tsx";
import TableState from "../layouts/tableList/tableState.tsx";
import AddNewState from "../layouts/FormAdd/formAddNewState.tsx";
import FormConfig from "../pages/listPage/settings/FormConfig.tsx";
import Dashboard from "../layouts/dashboard/dashboard.tsx";
import TableListFormConfig from "../layouts/tableList/tableListFormConfig.tsx";
import FormConfigDetail from "../pages/listPage/settings/Detail/FormConfigDetail.tsx";
import AdvancedInfo from "../pages/listPage/settings/AdvancedInfo.tsx";

import FormAdvancedInfoDetail from "../pages/listPage/settings/Detail/FromAdvancedInfoDetail.tsx";
import AddNewAdvancedInfo from "../layouts/FormAdd/formAddNewAdvancedInfo.tsx";
import MyDashBoard from "../pages/myDashboard/MyDashboard.tsx";
import RevokeAsset from "../pages/assetDetail/Form/RevokeAssset.tsx";
import AssignAsset from "../pages/assetDetail/Form/AssignAsset.tsx";
import RepairAsset from "../pages/assetDetail/Form/RepairAsset.tsx";
import RepairList from "../pages/listPage/repair/RepairList.tsx";
import RepairCompleted from "../pages/listPage/repair/RepairCompleted.tsx";
import MaintenanceAsset from "../pages/assetDetail/Form/MaintenanceAsset.tsx";
import MaintenanceList from "../pages/listPage/maintenance/MaintenanceList.tsx";
import MaintenanceCompleted from "../pages/listPage/maintenance/MaintenanceCompleted.tsx";

// import FormAdvancedInfoDetail from "../pages/listPage/settings/Detail/FromAdvancedInfoDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Navigate to="/taisan/dashboard" replace />,
      },
      {
        path: "taisan",
        element: <ListPages />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          // Dashboard
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          // maintenance
          {
            path: "maintenance",
            element: <MaintenanceList />,
            children: [
              {
                path: "completed/:id",
                element: <MaintenanceCompleted />,
              },
            ],
          },
          // fix
          {
            path: "repair",
            element: <RepairList />,
            children: [
              {
                path: "completed/:id",
                element: <RepairCompleted />,
              },
            ],
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
            element: <AssetList />,
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
                    element: <AddNewTypeAs />,
                  },
                ],
              },
              {
                path: "status",
                element: <TableStatus />,
                children: [
                  {
                    path: "w-create",
                    element: <AddNewStatus />,
                  },
                ],
              },
              {
                path: "state",
                element: <TableState />,
                children: [
                  {
                    path: "w-create",
                    element: <AddNewState />,
                  },
                ],
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
            children: [
              {
                path: "w-create",
                element: <AddNewAdvancedInfo />,
              },
            ],
          },
        ],
      },
      //deatail list tài sản
      {
        path: "taisan/list/detail/:id",
        element: <AssetDetail />,
        children: [
          {
            path: "revoke",
            element: <RevokeAsset />,
          },
          {
            path: "assign",
            element: <AssignAsset />,
          },
          {
            path: "repair",
            element: <RepairAsset />,
          },
          {
            path: "maintenance",
            element: <MaintenanceAsset />,
          },
        ],
      },
      //deatail formConfigtaif sản
      {
        path: "taisan/settings/form-config/detail/:id",
        element: <FormConfigDetail />,
      },
      // deatail formConfig ttnc tài sản
      {
        path: "taisan/settings/advanced-info/detail/:_id",
        element: <FormAdvancedInfoDetail />,
      },

      {
        path: "tongquan",
        element: <MyDashBoard />,
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
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
