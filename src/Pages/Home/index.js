import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { useHistory } from "react-router-dom";
import ImgHome1 from "../../Assets/HomeImg1.svg";
import { HomeContainer } from "./styles";
const Home = () => {
  const history = useHistory();

  return (
    <HomeContainer>
      <Header>
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button onClick={() => history.push("/signup")}>Cadastro</Button>
      </Header>{" "}
      <main>
        <section>
          <article>
            <h2>Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </article>
          <figure>
            <img src={ImgHome1} alt="HomeIMG" />
            <figcaption>Home Img</figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
