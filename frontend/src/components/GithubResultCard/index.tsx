import ResultCard from "components/ResultCard";

type Props = {
    descriptionProfile: string;
    descriptionFollowers: string;
    descriptionCountry : string;
    descriptionName : string;
    imgUrl : string;
}

function GithubResultCard({ descriptionProfile, descriptionFollowers, descriptionCountry, descriptionName,  imgUrl} : Props) {
  return (
    <>
      <div className="result-image">
        <img src={imgUrl} alt="Imagem do usuário" />
      </div>
      <div className="rigth-container">
        <h1>Informações</h1>

        <div className="result-cards">
          <ResultCard title="Perfil:" description={descriptionProfile} />
          <ResultCard title="Seguidores:" description={descriptionFollowers} />
          <ResultCard title="Localidade:" description={descriptionCountry} />
          <ResultCard title="Nome:" description={descriptionName} />
        </div>
      </div>
    </>
  );
}

export default GithubResultCard;
