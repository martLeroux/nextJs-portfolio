import Layout from '../components/Layout';
import Error from './_error';
import fetch from 'isomorphic-unfetch'

function About({ user, statusCode }) {
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }

    return (<Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height= "200px" />
    </Layout>)
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/reedbarger')
    const statusCode = res.status > 200 ? res.status : false;
    const user = await res.json()
    console.log(statusCode);
    return { 
        props: {
            user,
            statusCode
        }
    }
}
  
  export default About