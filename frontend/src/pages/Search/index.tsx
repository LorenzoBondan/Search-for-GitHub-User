import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from 'components/ResultCard';

type FormData = {
  txtGithub : string; // os nomes tem que bater com a propriedade name do input
  //txtTest : string;
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


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 

    const name = event.target.name;
    const value = event.target.value;

    setFormData( {...formData, [name]:value} ) 
  }


  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // no reloading

    axios.get(`https://api.github.com/users/${formData.txtGithub}`)
    .then((response) => {
      setAdress(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      setAdress(undefined);
      console.log(error);
    });
    
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

            <div className='info-container'>

                <div className='result-image'>
                  <img src={address?.avatar_url} alt="Imagem do usuário" />
                </div>

                <div className='rigth-container'> 

                  <h1>Informações</h1>

                  {address && 
                  <>
                  <div className='result-cards'>
                    <ResultCard title='Perfil:' description={address?.url} />
                    <ResultCard title='Seguidores:' description={address?.followers} />
                    <ResultCard title='Localidade:' description={address?.location} />
                    <ResultCard title='Nome:' description={address?.name} />
                  </div>
                </>
                }

                </div>

              </div>

        </div>

      </>
    );
  }
  
  export default Search;