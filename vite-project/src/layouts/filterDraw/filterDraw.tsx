import filterDrawStyle from "../../styles/filterDraw/filterDraw.ts";
import {
    Button, DrawerBody, DrawerHeader, DrawerHeaderTitle, OverlayDrawer, useRestoreFocusSource,
} from "@fluentui/react-components";
import {Dismiss24Regular} from "@fluentui/react-icons";

const FilterDraw = ({isOpen,onClose} : {isOpen: boolean; onClose: () => void }    ) => {
    const style = filterDrawStyle()
    //
    const restoreFocusSourceAttributes = useRestoreFocusSource();
    return (
        <div className={style.filterDraw}>
            <OverlayDrawer
                as="aside"
                position="end"
                {...restoreFocusSourceAttributes}
                open={isOpen}
                onOpenChange={(_, { open }) => {
                    if (!open) onClose();
                }}
            >
                <DrawerHeader>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular/>}
                                onClick={onClose}
                            />
                        }
                    >
                        Tìm kiếm
                    </DrawerHeaderTitle>
                </DrawerHeader>

                <DrawerBody >
                    <p>Nội dung tìm kiếm</p>
                </DrawerBody>
            </OverlayDrawer>


        </div>
    );
};

export default FilterDraw;
