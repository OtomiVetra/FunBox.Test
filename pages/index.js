import Card from '../components/Card';
const IndexPage = () => {
  return (
    <div className="background">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default IndexPage;
