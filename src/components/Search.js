import React, { useState, useEffect } from 'react';
import serverUrl from '../config';

function Search({ onStudentSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [studentResults, setStudentResults] = useState([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const debounceHandler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(debounceHandler);
        };
    }, [searchTerm]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        const fetchStudentResults = async () => {
            if (debouncedSearchTerm.length >= 3) {
                setIsLoading(true);
                try {
                    const response = await fetch(`${serverUrl}api/students?query=${debouncedSearchTerm}`);
                    const data = await response.json();
                    setStudentResults(data);
                } catch (error) {
                    console.error('Error fetching student data:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setStudentResults([]);
            }
        };

        fetchStudentResults();
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                className="form-control mb-3"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search for a student..."
            />
            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <ul className="list-group mb-3">
                    {studentResults.map((student) => (
                        <li
                            key={student.rollNumber}
                            className="list-group-item"
                            onClick={() => onStudentSelect(student)}
                            style={{ cursor: 'pointer' }}
                        >
                            {student.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
