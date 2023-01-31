import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import GithubResultCard from 'components/GithubResultCard';
import CardLoader from './CardLoader';

type FormData = {
  txtGithub : string;
}

type Address = {
  url : string;
  followers : string;
  location : string;
  name : string;
  avatar_url : string;
}

function Search() {

  // TEXTBOXES
  const [formData, setFormData] = useState<FormData>({txtGithub: ''});

  // API
  const [address, setAdress ] = useState<Address>();

  // LOADING ANIMATION
  const [isLoading, setIsLoading] = useState(false);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 

    const name = event.target.name;
    const value = event.target.value;

    setFormData( {...formData, [name]:value} ) 
  }


  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // no reloading

    setIsLoading(true);
    axios.get(`https://api.github.com/users/${formData.txtGithub}`)
    .then((response) => {
      setAdress(response.data);
    })
    .catch((error) => {
      setAdress(undefined);
    })
    .finally(() => {
      setIsLoading(false)});
    
  }

    return (
      <>
        <div className="github-search-container">  
            
            <div className='base-card search-container'>
              
              <h1 className='text'>Encontre um perfil Github</h1>

              <form onSubmit={handleSubmit}>
                <div className='form-container'>

                <input
                  name='txtGithub'
                  value={formData.txtGithub}
                  type="text"
                  className="search-input"
                  placeholder="Usuário Github"
                  onChange={(handleChange)}
                />

                <div className='button-zone'>
                  <button type="submit" className="btn btn-primary search-button">Encontrar</button>
                </div>

                </div>

              </form>

            </div>

            {address && 
              <>
              <div className='info-container'>
              {isLoading ? <CardLoader /> :
              <GithubResultCard 
                  descriptionProfile={address.url} 
                  descriptionFollowers={address.followers} 
                  descriptionCountry={address.location} 
                  descriptionName={address.name} 
                  imgUrl={address.avatar_url} 
                /> 
              }
              </div>
              </>
            }

        </div>

      </>
    );
  }
  
  export default Search;