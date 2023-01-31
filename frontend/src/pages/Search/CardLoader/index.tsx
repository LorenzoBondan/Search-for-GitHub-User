import ContentLoader from "react-content-loader"
import './styles.css';

const CardLoader = () => (
  <div className="card-loader-container">
  <ContentLoader 
    speed={2}
    width={1250}
    height={300}
    viewBox="0 0 1250 300"
    backgroundColor="rgb(186,186,186)"
    foregroundColor="rgb(136,136,136)"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1250" height="300" />
  </ContentLoader>
  </div>
)

export default CardLoader