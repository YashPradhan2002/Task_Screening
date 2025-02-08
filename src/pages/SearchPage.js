import React, { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

function SearchPage() {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleStudentSelect = (student) => {
        setSelectedStudent(student);
    };

    return (
        <div className="container" style={{ padding: '20px' }}>
            <Header />
            <Search onStudentSelect={handleStudentSelect} />
            {selectedStudent && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{selectedStudent.name}</h5>
                        <p className="card-text">Class: {selectedStudent.class}</p>
                        <p className="card-text">Roll Number: {selectedStudent.rollNumber}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
