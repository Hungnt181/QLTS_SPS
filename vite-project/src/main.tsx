import { createRoot } from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/router.tsx";

createRoot(document.getElementById('root')!).render(
    <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router}>
        </RouterProvider>
    </FluentProvider>,
)
