import React, { Component } from 'react';

class ControlledCom extends Component {
    upload(e)
    {
        console.warn(e.target.files)
        const files = e.target.files
        const formData = new FormData()
        formData.append('img', files[0]);
        
            // API URL HERE
        fetch('http://127.0.0.1:8000/api/store',{
            method:"POST",
            body:formData
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result);
            })
        })
    }

    render() {
        return (
            <div>
                <h1>About Component Upload File</h1>
                <input type="file" onChange={(e)=>this.upload(e)} name="img" />
            </div>
        );
    }
}

export default ControlledCom;