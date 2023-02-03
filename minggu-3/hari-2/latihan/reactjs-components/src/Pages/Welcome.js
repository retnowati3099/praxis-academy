import React from "react";
// Componen dapat dibuat menggunakan pendekatan berbasis class atau pendekatan berbasis fungsi

class Welcome extends React.Component{
    name = "Retno Wati";
    render(){
        return <h1>Hello, {this.name}</h1>
    }
}

export default Welcome;