import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      photos: []
  }
    }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(response=> response.json())
  .then(json => this.setState({photos: json}))
}
render () {
  return (
    <div className="container-fluid p-0">

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">

        <a className="navbar-brand" href='#'><i className="fas fa-coins"></i>&nbsp; BATATINHA </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="navbarMainToggler">
          <div className="navbar-nav ml-auto pr-3">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Channel</a>
            <a className="nav-item nav-link" href="#">Login</a>&nbsp;&nbsp;
        </div>
          <form className="form-inline">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control mr-3" placeholder="Username" />&nbsp;
          <button className="btn btn-outline-success">Login</button>
          </form>
        </section>
      </nav>

      <section id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          <li data-target="#carouselSection" data-slide-to="0" className="active"></li>
          <li data-target="#carouselSection" data-slide-to="1"></li>
          <li data-target="#carouselSection" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pm1.narvii.com/7066/48cdcaf393905a470344a8c02092698eb9ff2016r1-733-733v2_hq.jpg" alt="Imagem 1" className="d-block w-100 image-fluid" />
          < div className="carousel-caption d-none d-block">
            <h4> Doggo</h4>
            <p> Tão lindinho, ne</p>
          </div>
          </div>
          <div className="carousel-item ">
            <img src="https://pbs.twimg.com/media/D4Ry76NXkAEuPG5?format=jpg&name=900x900" alt="Imagem 2" className="d-block w-100 image-fluid" />
            < div className="carousel-caption d-none d-block">
            <h4> Doggo 2</h4>
            <p> Tão lindinho, ne</p>
          </div>
          </div>

          <div className="carousel-item active">
            <img src="https://pbs.twimg.com/https://pbs.twimg.com/media/D4bZZPGU0AAfvaN?format=jpg&name=large/D4Z1_7TU8AIbXMw?format=jpg&name=900x900" alt="Imagem 3" className="d-block w-100 image-fluid" />
            < div className="carousel-caption d-none d-block">
            <h4> kkkkkkk</h4>
            <p> Tão lindinho, ne</p>
          </div>
          </div>
          </div>

          <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </div>
        
          <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Ptrvious</span>
          </div>

      </section>


      <section className="container p-3">
        
        <ul className="list-unstyled">

          {
            this.state.photos.map(photo=>{
              return (
              <li className="media pt-2">
              <img src={photo.thumbnailUrl} alt= "" className="mr-3"/>
            <div className="media-body">
              <h5 className="mt-0 mb-1">{photo.title}</h5>


              <p>Id: {photo.id}} </p>
              <p>Titulo: {photo.title} </p>
            
            </div>
          </li>
              )
            })
          }
          
          </ul>
          </section>
      
      <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
        <container className="container col-12 col-lg-6 d-flex justify-content-around">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-google-drive"></i>
        <i class="fab fa-spotify"></i>
        <i class="fab fa-github-alt"></i>
        <i class="fab fa-github"></i>
        </container>

      </footer>
    </div>
  );
}
}
export default App;
