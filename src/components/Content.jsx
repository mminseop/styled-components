import styled from "styled-components";
import { flex, font, styleVal } from "../styles/style";

const ContentContainer = styled.div`
    ${flex("column", "start", "start", "5px")};
    img {
        width: 300px;
        border-radius: 10px;
        margin-bottom: 3px;
        min-height: 225px;
    }

    span {
        ${font("12px")};
        color: ${styleVal.tagColor};
        border: 1px solid ${styleVal.tagColor};
        padding: 4px, 5px;
        border-radius: 3px;
    }

    div {
        ${font("18px", "600")};
    }

    p {
        ${font("12px")};
        color: ${styleVal.gray};
    }
`;
export default function Content({ content }) {
    return (
        <ContentContainer>
            <img src={content.img} alt={content.title} />
            <span>모집중</span>
            <div>{content.title}</div>
            <p>{content.subtitle}</p>
        </ContentContainer>
    );
}
