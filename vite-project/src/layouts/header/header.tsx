import headerStyle from "../../styles/header/header.ts";
import {Avatar, type AvatarProps, Field, SearchBox, Switch} from "@fluentui/react-components";
import type {SearchBoxProps} from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";
import {Alert20Regular, GridDots24Regular, QuestionCircle20Regular, Settings20Regular} from "@fluentui/react-icons";
type Header = {
    searchProps?: SearchBoxProps;
    switchProps?: SwitchProps;
    avatarProps?: AvatarProps;
}
const Header = ({searchProps = {},switchProps = {}, avatarProps }: Header) => {
    const style = headerStyle()
    return (
        <div className={style.header}>
            <div className={style.headerStart}>
                <div className={style.headerStartIcon}>
                    <GridDots24Regular/>
                </div>
                <div className={style.headerStartMenu}>
                    <div className={style.headerStartName}>
                        SP365
                    </div>
                    <div>
                        <Switch label="Trải nghiệm bản mới (Beta)" {...switchProps} />
                    </div>
                </div>

            </div>
            <div className={style.headerCenter}>
                <Field className={style.customField}>
                    <SearchBox {...searchProps}
                               placeholder={searchProps.placeholder ?? "Tìm kiếm trong SP365"}
                    />
                </Field>
            </div>
            <div className={style.headerEnd}>
                <div className={style.headerEndIcon}>
                    <Alert20Regular/>
                </div>
                <div className={style.headerEndIcon}>
                    <Settings20Regular/>
                </div>
                <div className={style.headerEndIcon}>
                    <QuestionCircle20Regular/>
                </div>
                <div  className={style.headerEndIcon}>
                    <Avatar aria-label="Guest" {...avatarProps}
                    size={32}/>
                </div>
            </div>
        </div>
    );
};

export default Header;