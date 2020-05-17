import Layout from '../components/Layout';
import { useEffect, useState } from "react";

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/reedbarger')
        .then(res => res.json())
        .then(data => {
            setData(data);
        }) 
    });

    return (
        <Layout title="About">
            {JSON.stringify(data)}
            <p> A javascript programmer</p>
            <img src="/javascript_logo.png" alt="Javascript" height= "200px" />
        </Layout>
    )
};