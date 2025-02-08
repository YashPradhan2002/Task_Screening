import React from 'react';

function Header() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Student Search</h1>
            <a href="https://drive.google.com/file/d/1NINyRYNi2TDjjUrKji-nZQAuzajloQHG/view" target="_blank">
                Sample Data File
            </a>
        </div>
    );
}

export default Header;
