import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({slug, title}) => (
    <li>
        <Link as={`/${slug}`} href={`post?title=${title}`}>{title}</Link>
    </li>
);

export default () => (
    <Layout title="My blog">
        <ul>
            <PostLink slug="react-post" title="React Post" />
            <PostLink slug="angular-post" title="Angular post" />
            <PostLink slug="vue-post" title="Vue post" />
        </ul>
    </Layout>
);