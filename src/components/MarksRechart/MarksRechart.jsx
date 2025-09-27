import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksReChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    const marksChertData = marksData.map(studentData =>{
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math,
        }
        const avg = (student.physics + student.chemistry + student.math) /3;
        student.avg =avg;
        return student;
    })
    console.log(marksChertData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksChertData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip labelClassName='text-black'></Tooltip>
                <Bar dataKey="avg" fill='purple'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
                <Bar dataKey="physics" fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksReChart;