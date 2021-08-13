import React from 'react'
import ReactGa from 'react-ga'

import './css/Main.css'
import "./css/Presentation.css"
import "./css/Competence.css"
import "./css/Work.css"
import "./css/Price.css"

import profile from "../../img/avatar.png"
import site1 from "../../img/site1.png"
import git from "../../img/git-corner.png"

import Projet from "../project/Project"

export default class App extends React.PureComponent {

  constructor(props){
    super(props)
    ReactGa.initialize("UA-204792129-1")
    ReactGa.pageview("/")
  }

  render () {
    return (
      <>
        <div id="accueil">
          <div className="gitcorner">
            <a href="https://github.com/sawmodz" target="_blank">
              <img src={git} alt="git"></img>
            </a>
          </div>
          <div id="title_group">
            <h1 className="bold title">Développeur Web, Mobile</h1>
            <p className="bold pretitle">Je produis vos magnifiques projets et j'aime ce que je fais</p>
          </div>

          <img id="profil" src={profile} alt="profile"></img>
        </div>

        <div id="presentation">
          <div id="pres_text">
            <p id="pres_title">Salut ! Je m'appelle Théo. Bienvenue sur mon site.</p>
            <div id="pres_desc">
              <p id="pres_subtitle">Je suis développeur depuis maintenant plus de 5 ans. J'ai acquis mon expérience au fil des projets personnels comme professionnels que j'ai du faire. Ceci me permet de mieux comprendre les attentes d'un client et de répondre précisement au besoin demandé. Ayant acquis mon bac pro Systemes Numeriques et continuant dans des études pour devenir ingénieur informatique à Campus Académie, Etre developpeur indépendant me permet de toujours plus apprendre que ce que je sais déja "comme on le dit on en apprend tous les jours". J'ai commencé le développement avec le java, puis j'ai voulu changer pour me tourner vers un langage beaucoup plus visuel. Je travaille actuellement le js ( j'utilise le Framework ReactJS pour les applications web et ReactNative pour les applications mobiles ). Et je travaille aussi sur la partie backend d'une application web grâce à nodeJS. Je sais aussi utiliser le python ( que j'ai pu utiliser dans un projet dans l'IA ), HTML et le CSS. J'apprends aussi constamment le RUST actuellement.</p>
            </div>
          </div>
        </div>


        <div id="competence">

          <div className="comp_box">
            <h3 className="comp_title">Front-end</h3>

            <p className="comp_desc">Le front-end est pour moi la partie la plus importante d'un projet. C'est ce qui sera devoilé au public et qui montrera la beauté du projet et l'envie d'y contribuer.</p>

            <div className="comp_languages">
              <h4 className="comp_languages_title">Language utilisé</h4>
              <p className="comp_languages_pretitle">HTML, CSS, ReactJS</p>
            </div>
            
            <div className="comp_logiciels">
              <h4 className="comp_logiciels_title">Logiciels</h4>
              <p>Visual Studio Code</p>
              <p>Github</p>
              <p>GitKraken</p>
              <p>Adobe XD</p>
              <p>Sublime Text</p>
              <p>WinSCP</p>
              <p>Terminal Windows</p>
            </div>
          </div>

          <div className="comp_box">
            <h3 className="comp_title">Back-end</h3>

            <p className="comp_desc">Le back-end est la partie cachée de l'application web. Mais la plus réflechie aussi. C'est elle qui fait la liaison avec les bases de données et ce que voit l'utilisateur. Mais le back-end, c'est lui aussi qui simplifie et fludifie l'utilisation du site.</p>

            <div className="comp_languages">
              <h4 className="comp_languages_title">Language utilisé</h4>
              <p className="comp_languages_pretitle">ReactJS, JS</p>
            </div>
            
            <div className="comp_logiciels">
              <h4 className="comp_logiciels_title">Logiciels</h4>
              <p>Visual Studio Code</p>
              <p>Github</p>
              <p>GitKraken</p>
              <p>Sublime Text</p>
              <p>WinSCP</p>
              <p>Postman</p>
              <p>Terminal Windows</p>
            </div>
          </div>

        </div>

        <div className="Work">
          <div>
            <h2 id="work_title">MES PROJETS</h2>
            <p id="work_pretitle">Voici mes projets que j'ai pu effectuer durant mon activité</p>
          </div>

          <br/><br/><br/>

          <div className="Projects">
            <Projet link="http://blizzfull.fr" name="Portfolio" date="Site en cours de construction" image={site1} />
          </div>
        </div>

        <div className="Price">
          <h2 id="price_title">MES OFFRES</h2>
          <div className="Offers">

            <div className="offer">
              <div className="offer_top">
                <h2>Site Vitrine Standard</h2>
              </div>

              <div className="offer_options">
                <p>Charte graphique donnée par le client</p>
                <p>Site compatible reponsive</p>
                <p>Formulaire de contact</p>
                <p>Liens de partage sur les réseaux sociaux</p>
                <p>Optimisation du référencement</p>
                <p>Statistiques de visites</p>
                <p>Mise en ligne du site</p>
                <p>Aide a l'installation du site sur votre serveur web</p>
                <p>Optimisation des performances</p>
              </div>
              <div className="offer_button">
                <button>
                  <p>DEMANDER UN DEVIS</p>
                </button>
              </div>
            </div>

            <div className="offer">
              <div className="offer_top">
                <h2>Site Personnalisé Standard</h2>
              </div>

              <div className="offer_options">
                <p>Charte graphique donnée par le client</p>
                <p>Site compatible reponsive</p>
                <p>Formulaire de contact</p>
                <p>Liens de partage sur les réseaux sociaux</p>
                <p>Optimisation du référencement</p>
                <p>Statistiques de visites</p>
                <p>Mise en ligne du site</p>
                <p>Aide a l'installation du site sur votre serveur web</p>
                <p>Optimisation des performances</p>
              </div>
              <div className="offer_button">
                <button>
                  <p>DEMANDER UN DEVIS</p>
                </button>
              </div>
            </div>

            <div className="offer">
              <div className="offer_top">
                <h2>Application Mobile Standard</h2>
              </div>

              <div className="offer_options">
                <p>Charte graphique donnée par le client</p>
                <p>Site compatible reponsive</p>
                <p>Formulaire de contact</p>
                <p>Liens de partage sur les réseaux sociaux</p>
                <p>Optimisation du référencement</p>
                <p>Statistiques de visites</p>
                <p>Mise en ligne du site</p>
                <p>Aide a l'installation du site sur votre serveur web</p>
                <p>Optimisation des performances</p>
              </div>
              <div className="offer_button">
                <button>
                  <p>DEMANDER UN DEVIS</p>
                </button>
              </div>
            </div>

          </div>

        </div>
      </>
    )
  }
}
