import subToolBarStyle from "../../styles/subToolBar/subToolBar.ts";
import {Button} from "@fluentui/react-components";
import {
    Add20Regular,
    ArrowDownload16Regular,
    ArrowUpload16Regular, Delete20Regular,
    Filter20Regular,
    List20Regular
} from "@fluentui/react-icons";

const SubToolBarRepair = ({onOpen, onOpenAdd, disabled} : { onOpenAdd: ()=> void ,onOpen: () => void, disabled:boolean}) => {
    const style = subToolBarStyle()
    return (
        <div className={style.subToolBar}>
            <div className={style.subToolBarStart}>
                <div>
                    <Button appearance="primary" icon={<Add20Regular/>} onClick={onOpenAdd} disabled={disabled}>
                        Hoàn thành
                    </Button>
                    <Button appearance="subtle" icon={<Delete20Regular/>} className={style.marginLeft} disabled={disabled}>
                        Xóa
                    </Button>
                </div>
            </div>
            <div className={style.subToolBarEnd}>
                <div>
                    <Button className={style.subToolBarEndBtnNoBorder} icon={<ArrowUpload16Regular/>}>Import</Button>
                    <Button className={style.subToolBarEndBtnNoBorder} icon={<ArrowDownload16Regular/>}>Export</Button>
                    <Button className={style.subToolBarEndBtnNoBorder} icon={<List20Regular/>}>Bộ lọc đã lưu</Button>
                    <Button className={style.subToolBarEndBtnNoBorder}
                            onClick={onOpen}
                            icon={<Filter20Regular/>} >

                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SubToolBarRepair;