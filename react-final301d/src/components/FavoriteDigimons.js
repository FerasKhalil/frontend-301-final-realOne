import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';

class FavoriteDigimons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newResult: [],
            formShow:false
          
        }
    }


    componentDidMount=async()=>{
        const server = process.env.REACT_APP_SERVER;
       const  result = await axios.get(`${server}/favoritedFunc`);
        this.setState({
            newResult:result.data
        })
    }

    deleteFunc = async (name) => {

        const server = process.env.REACT_APP_SERVER;

        const result = await axios.delete(`${server}/deleteFromDatabase/${name}`);

        this.setState({
            newResult: result.data
        })
        console.log(this.state.newResult);
    }

    updateFunc = async (name) => {
        const server = process.env.REACT_APP_SERVER;
        const result = await axios.put(`${server}/updateDataBase/${name}`);

        this.setState({
            newResult: result.data,
            formShow:true
        })
    }


  
    render() {
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.level}
                        </Card.Text>
                      


                        <Button onClick={() => this.deleteFunc({ name: this.props.name, level: this.props.level, img: this.props.img})} variant="primary">DELETE</Button>

                        <Button onClick={() => this.updateFunc({ name: this.props.name, level: this.props.level, img: this.props.img})} variant="primary">UPDATE</Button>
                    </Card.Body>
                </Card>
                <UpdateForm 
                formShow={this.state.formShow}
                />
            </div>
        )
    }
}

export default FavoriteDigimons;
