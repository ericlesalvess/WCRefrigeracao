import { div } from "motion/react-client";

interface FooterColumnProps{
    title:string;
    children:React.ReactNode;
}

export function FooterColumn({
    title,children,
}:FooterColumnProps){
    return(
        <div>
            <h3>
                {title}
            </h3>
                {children}
        </div>
    )
}