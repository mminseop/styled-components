// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flex } from "./styles/style";
import { styled } from "styled-components";

const Section = styled.section`
    ${flex("row", "center", "center", "20px", "wrap")};
    padding: 20px 40px;
`;

function App() {
    return (
        <main>
            <Header />
            <Section>
                {contents.map((el, index) => (
                    <Content key={index} content={el} />
                ))}
            </Section>
        </main>
    );
}

export default App;
