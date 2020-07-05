import Layout from '../components/Layout';

const Post = ({url}) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum</p>
    </Layout>
)

export default Post;