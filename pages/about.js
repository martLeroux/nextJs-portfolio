import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'

function About({ user }) {
    return (<Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height= "200px" />
    </Layout>)
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/reedbarger')
    const user = await res.json()
    return { 
        props: {
            user
        }
    }
}
  
  export default About