import svg from "../assets/react.svg";
function Dashboard() {
  return (
    <div className="text-center"> 
    <img src={svg} alt="React" />
      <h2 className="text-2xl font-bold mb-2">Paneliniz</h2>
      <p>Daha sonra buraya bir şeyler eklenebilir</p>
    </div>
  );
}

export default Dashboard;
