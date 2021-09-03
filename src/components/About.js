import React, { Component } from 'react';

class About extends Component {
    constructor() {
        super();
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result);
                this.setState({users:result.data})
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Fetch API Data</h1>
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                            {
                                this.state.users?
                                    this.state.users.map((item, i)=>
                                    <tbody>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    </tbody>
                                    )
                                    :null
                            }
                    
                    </table>
            </div>
        );
    }
}

export default About;
