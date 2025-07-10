import { styled } from "styled-components";
import { flex, font } from "../styles/style";

const HeaderContainer = styled.header`
    ${flex("row", "space-between", "center")};
    padding: 20px 20px;
    background-color: black;

    ul {
        ${flex('row', 'center', 'center', '20px')};

        li {
            ${font("16px")};
            list-style: none;
        }
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>OZ코딩스쿨</h1>
            <ul className="menu-container">
                <li>로그인</li>
                <li>회원가입</li>
                <li>내클래스</li>
            </ul>
        </HeaderContainer>
    );
}
