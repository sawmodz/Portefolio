import './Project.css'
import React from 'react'

export default class Projet extends React.PureComponent {
    render (){
        return (
            <div className="MyProject">
              <a href={this.props.link} target="_blank" rel="noreferrer">
                <img src={this.props.image} alt="site" className="myproject_img"/>
                <div className="myproject_text">
                  <p className="myproject_name">{this.props.name}</p>
                  <p className="myproject_date">{this.props.date}</p>
                </div>
              </a>
            </div>
        )
    }
}
