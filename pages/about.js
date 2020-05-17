import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'

function About({ user }) {

    return (<Layout title="About">
        {JSON.stringify(user)}
        <p> A javascript programmer</p>
        <img src="/javascript_logo.png" alt="Javascript" height= "200px" />
    </Layout>)
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const user = await res.json()
    return { 
        props: {
            user
        }
    }
}
  
  export default About