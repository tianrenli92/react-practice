import React, {Component} from 'react';
import './App.css';

class Course {
    constructor(college, department, number, section, professor) {
        this.college = college;
        this.department = department;
        this.number = number;
        this.section = section;
        this.professor = professor;
        this.key = `${college} ${department} ${number} ${section}`;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        const columns = [
            'College',
            'Department',
            'Number',
            'Section',
            'Professor',
        ];

        this.state = {
            columns,
            courses: [],
            myCourses: [],
        };
    }

    getCourses = () => {
        const courses = [
            new Course('CAS', 'CS', '112', 'B1', 'Sullivan'),
            new Course('CAS', 'CS', '332', 'A1', 'Bun'),
            new Course('CAS', 'CS', '350', 'A1', 'Sarkar'),
        ];
        this.setState({courses});
    };


    addCourse(course) {
        const {myCourses} = this.state;
        myCourses.push(course);
        this.setState({myCourses});
    }

    deleteCourse(course) {
        let {myCourses} = this.state;
        myCourses = myCourses.filter(myCourse => myCourse.key !== course.key);
        this.setState({myCourses});
    }

    render() {
        const {columns, courses, myCourses} = this.state;
        return (
            <div className="App">
                <button onClick={this.getCourses}>Get courses</button>
                <div>Course List</div>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses.map(course =>
                            <tr key={course.key}>
                                <td>{course.college}</td>
                                <td>{course.department}</td>
                                <td>{course.number}</td>
                                <td>{course.section}</td>
                                <td>{course.professor}</td>
                                <td>
                                    <button onClick={() => this.addCourse(course)}>Add to my courses</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>My Courses</div>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        myCourses.map(course =>
                            <tr key={course.key}>
                                <td>{course.college}</td>
                                <td>{course.department}</td>
                                <td>{course.number}</td>
                                <td>{course.section}</td>
                                <td>{course.professor}</td>
                                <td>
                                    <button onClick={() => this.deleteCourse(course)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
