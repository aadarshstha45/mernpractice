import { useState } from "react"
import axios from 'axios'

export const Register = () => {

    const[user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    //handling input
    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    //handling form submission
    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
       const save = await axios.post('http://localhost:4000/auth/register',user);
       console.log(save.data);
        }catch(e){
            console.log(e.response.data);
        }

    };

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/register.jpg" alt="Registration" width="600" height="500"/>
                        </div>
                    </div>
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration Form</h1>

                        <br />

                        <form onSubmit={handleSubmit} method="post">
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    name="username" 
                                    placeholder="username" 
                                    id="username" 
                                    required 
                                    autoComplete="off" 
                                    value={user.username}
                                    onChange={handleInput}
                                    />
                                
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="email" 
                                    id="email" 
                                    required 
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password" 
                                    id="password" 
                                    required 
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput} />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Register</button>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    
    </>
}
