/* eslint-disable jsx-a11y/img-redundant-alt */
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import {
    useState
} from 'react';

import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import PublisherHome from './PublisherHome';
import Background from '../images/download.png';
import * as URLS from './../utils.js';
import './PublisherLogin.css';

const PublisherLogin = () => {

    const [user, setUser] = useState('siddhesh@gmail.com');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    console.log(user, pwd);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URLS.PUBLISHER_LOGIN_URL,
                {
                    username: user,
                    password: pwd
                }
            )
            // console.warn(response);
            setUser(user);
            setPwd(pwd);
            localStorage.setItem("user", user);
            setSuccess(true);
            
        } catch (err) {
            setSuccess(false);
            setErrMsg(err.response.data.message);
            // console.log(err.response.data.message);
        }
    } 
    
    return (
        <div className="dashboard-container">
            {success? (
                <>
                   <PublisherHome/>
                </>
            ):(
            
                <MDBContainer style={{backgroundImage: "url("+ Background +")", height: "100vh", display: "flex", backgroundSize:"cover",backgroundPosition: "center", backgroundRepeat:"no-repeat", justifyContent: "center", alignItems: "center"}}>
                
                
                <MDBRow >
                <section>
                    {errMsg && (
                    <div style={{ backgroundColor: '#ff0000', color: '#ffffff', padding: '10px', marginTop: '10px' }}>
                        {errMsg}
                    </div>
                    )}
                </section>
                
                   
                    <MDBCol >
                    <div style={{ backgroundColor: 'white', padding: '90px',paddingTop:"10px", paddingTop:"10px", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <form onSubmit={handleSubmit}>
                            <MDBInput 
                                wrapperClass='mt-5 mb-4'
                                label='Email address'
                                id='emailId'
                                type='email'
                                size="lg"
                                
                                required
                            />
                            <MDBInput 
                                wrapperClass='mb-4'
                                label='Password'
                                id='passwordU'
                                type='password'
                                size="lg"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                    
                            <div className='text-center text-md-start mt-6 pt-2'>
                                <MDBBtn>Login</MDBBtn>
                            </div>
                        </form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            )}
        </div>
        
    );
}

export default PublisherLogin;