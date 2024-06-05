import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <header className="dashboard-header">
                    <h1>Real time Weather Notifications</h1>
                </header>
                <div className="button-group">
                    <Button 
                        className="dashboard-button" 
                        variant="contained" 
                        color="primary" 
                        onClick={() => navigate("/publisher")}
                    >
                        Publisher
                    </Button>
                    <Button 
                        className="dashboard-button" 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => navigate("/subscriber")}
                    >
                        Subscriber
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
