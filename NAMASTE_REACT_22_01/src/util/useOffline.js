import React from 'react';

const OfflineMessage = () => {
    return (
        <div style={{
            padding: '10px',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            backgroundColor: '#f2f2f2'
        }}>
            <h1 style={{
                color: 'black',
                fontSize: '32px',
                marginBottom: '20px'
            }}>
                You're Offline
            </h1>
            <p style={{
                color: 'black',
                fontSize: '18px',
                fontWeight: 'light'
            }}>
                Please check your connection.
            </p>
        </div>
    );
}

export default OfflineMessage;
