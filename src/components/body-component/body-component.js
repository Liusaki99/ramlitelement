import { LitElement, html } from 'lit-element';
import { rickAndMortyApi } from '../../components-dm/rick-and-morty-api';
import styles from './body-component-style.js';



class BodyComponent  extends LitElement {

  static get styles() {
    return [
      styles,
    ]
  }

  static get properties() {
    return {
        _apiConsume: {type: Array},
        charactersFilter: {type: Array},
        characterSpecial : {type: Array},
        page : {type: 'number'},
        flagAll : {type: Boolean}
    };
  }

  async getCharactersPage(page){
    let getConsume = []
    this.responseApiConsume = await this._apiConsume.getParamsApi('character', page);
    console.log([this.responseApiConsume], 'Todo')
    getConsume = [this.responseApiConsume.results];
    let characters = []
    
    getConsume.forEach((element) => {
        element.forEach(character => {
            characters.push({
                id: character.id,
                name: character.name,
                status: character.status,
                image: character.image
            })
        });
    });

    this.charactersFilter = characters;
    console.log(this.charactersFilter,'characters');
  }

  constructor() {
    super();
    this.page = 1;

    this.config = {
        url: 'https://rickandmortyapi.com/api/',
        params: {
            page: '/?page='
        }
    };
    this._apiConsume = new rickAndMortyApi(this.config);
    this.responseApiConsume = [];
    this.charactersFilter = [];
    this.characterSpecial = [];
    this.flagAll = true;
    this.getCharactersPage(this.page);
  }

  _upPage()
  {
    if(this.page < 42)
    {
      this.page ++;
    }
    this.getCharactersPage(this.page);
    window.scrollTo(0, 0)
  }

  _downPage()
  {
    if(this.page > 1 )
    {
      this.page --;
    }
    this.getCharactersPage(this.page)
    window.scrollTo(0, 0)
  }

  _filterAlive()
  {
    this.characterSpecial = this.charactersFilter.filter((character) => character.status == 'Alive');
    console.log(this.characterSpecial)
    this.flagAll = false;
  }

  _filterDead()
  {
    this.characterSpecial = this.charactersFilter.filter((character) => character.status == 'Dead');
    console.log(this.characterSpecial)
    this.flagAll = false;
  }

  _filterUnknown()
  {
    this.characterSpecial = this.charactersFilter.filter((character) => character.status == 'unknown');
    console.log(this.characterSpecial)
    this.flagAll = false;
  }

  _filterAll(){
    console.log("All");
    this.flagAll = true;
  }

 render() {
    return html`

      <!-- Filter check -->

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card">
            <div class="row">
              <h1>Filter by status</h1>
            </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="${this._filterAlive}">
                <label class="form-check-label" for="flexRadioDefault1">
                  Alive
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="${this._filterDead}">
                <label class="form-check-label" for="flexRadioDefault2">
                  Dead
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="${this._filterUnknown}">
                <label class="form-check-label" for="flexRadioDefault3">
                  Unknown
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" @click="${this._filterAll}" checked>
                <label class="form-check-label" for="flexRadioDefault4">
                  All
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- body de personajes -->
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            ${this.dataTemplate()}
        </div>
      
      
      <!-- pagination selector -->
        <div class="container">
            <nav aria-label="pagination">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" @click="${this._downPage}">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link">${this.page}</a></li>
                    <li class="page-item">
                    <a class="page-link" @click="${this._upPage}">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    `;
  }
  dataTemplate()
  {
    if(this.flagAll)
    {
      return html`
        ${this.charactersFilter.map((character) => html`
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src=${character.image} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${character.id}. ${character.name}</h5>
                        <p class="card-text">${character.status}</p>
                    </div>
                </div>
            </div>
        `)}
    `
    }
    else {
      return html`
        ${this.characterSpecial.map((character) => html`
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src=${character.image} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${character.id}. ${character.name}</h5>
                        <p class="card-text">${character.status}</p>
                    </div>
                </div>
            </div>
        `)}
    `
    }
  }
}

customElements.define('body-component', BodyComponent);