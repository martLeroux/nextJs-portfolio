import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({title}) => (
    <li>
        <Link href={`post?title=${title}`}>{title}</Link>
    </li>
);

export default () => (
    <Layout title="My blog">
        <ul>
            <PostLink title="react" />
            <PostLink title="angular" />
            <PostLink title="vue" />
        </ul>
    </Layout>
);