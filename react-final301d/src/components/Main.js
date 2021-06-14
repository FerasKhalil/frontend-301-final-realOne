import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import FavoriteDigimons from './FavoriteDigimons';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultArr: [],
            img: '',
            level: '',
            name: '',
            

        }
    }

    componentDidMount = async () => {
        const server = process.env.REACT_APP_SERVER;
        // const result = await axios.get(`https://digimon-api.vercel.app/api/digimon`);
        // const url = 'https://digimon-api.vercel.app/api/digimon';
        // const result = await axios.get(`/https://digimon-api.vercel.app/api/digimon`);
        const result = await axios.get(`${server}/getFromBack`);



        this.setState({
            resultArr: result.data,
            
        })

    }

    addToFav = async () => {
        const server = process.env.REACT_APP_SERVER;
        const result = axios.post(`${server}/addToFavDatabase`);
        this.setState({
            resultArr: result.data,
            name: result.data.name,
            img: result.data.img,
            level: result.data.level
        })

    }

    render() {
        return (
            <div>
                {this.state.resultArr.map(element => {


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.img} />
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                                {element.level}
                            </Card.Text>
                            <Button onClick={this.addToFav} variant="primary">Add to Fav</Button>
                        </Card.Body>
                    </Card>

                })}
                <FavoriteDigimons
                    addToFav={this.addToFav}

                    name={this.state.name}
                    img={this.state.img}
                    level={this.state.level}
                    hide={this.state.hide}

                />

            </div>
        )
    }
}

export default Main
