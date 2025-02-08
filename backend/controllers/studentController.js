const fs = require('fs');
const path = require('path');

const studentDataPath = path.join(__dirname, '../data/student_data.json');

const getStudents = (req, res) => {
    const searchQuery = req.query.query;
    if (!searchQuery || searchQuery.length < 3) {
        return res.status(400).json({ error: 'Query must be at least 3 characters long' });
    }

    fs.readFile(studentDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read student data' });
        }

        const students = JSON.parse(data);
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5);

        res.json(filteredStudents);
    });
};

module.exports = { getStudents };
