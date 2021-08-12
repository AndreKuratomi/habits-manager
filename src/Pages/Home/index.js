import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <>
      <Header>
        <Button>Login</Button>
        <Button>Cadastro</Button>
      </Header>
      <h1>Home</h1>
      <Card
        title="Habito1"
        category="category1"
        achieved={true}
        difficulty="Facil"
        frequency="Diaria"
        howMuch={30}
      />
      <Card
        title="Habito2"
        category="category2"
        achieved={false}
        difficulty="Dificil"
        frequency="Semanal"
        howMuch={100}
      />
      <Card title="Meta" difficulty="EZ" howMuch={2} />
      <Card title="Activity" time="13:00" />
    </>
  );
};

export default Home;
