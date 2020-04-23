import React, { Component } from 'react';
import axios from '../config/axios';

class Register extends Component {


   registerUser = (e) => {
      e.preventDefault()
      let username = this.username.value
      let name = this.name.value
      let age = this.age.value
      let email = this.email.value
      let password = this.password.value

      axios.post('/users', {username, name, email, age, password})
         .then(res => {
            if(res.data.errmsg){
               let feedback = prompt('Masukkan feedback')
            }
            if(!username || !name || !age || !email || !password){
               alert('Lengkapi Data!')
            } else {
               alert('Data Tersimpan')
            }
            
         })
         .catch(err => {
            let feedback = prompt('Masukkan feedback')
         })
  }

   render() { 
      return (
         <form onSubmit={this.registerUser} >
            <div className="mt-5 row">
               <div className="col-sm-4 mx-auto card">
                  <div className="card-body">
                     <div className="border-bottom border-secondary card-title">
                        <h1>Register</h1>
                     </div>

                     <div className="card-title mt-1">
                        <h4>Username</h4>
                     </div>
                     <form className="input-group "> <input ref={(input) => {this.username = input}} className="form-control" type="text"/></form>
                     
                     <div className="card-title mt-1">
                        <h4>Name</h4>
                        <form className="input-group"><input ref={(input) => {this.name = input}} className="form-control" type="text"/> </form>
                     </div>
                  
                     <div className="card-title mt-1">
                        <h4>Age</h4>
                        <form className="input-group"><input ref={(input) => {this.age = input}} className="form-control" type="number"/></form>
                     </div>
                     
                     <div className="card-title mt-1">
                        <h4>Email</h4>
                        <form className="input-group"><input ref={(input) => {this.email = input}} className="form-control" type="email"/></form>
                     </div>
                     
                     <div className="card-title mt-1">
                        password
                        <form className="input-group"><input ref={(input) => {this.password = input}} className="form-control" type="password"/></form>
                     </div>

                     <input className="btn btn-success btn-block" type="submit" value="Register"/>
                  </div>
               </div>
            </div>

         </form>
      );
   }
}
 
export default Register;