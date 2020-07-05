import Layout from '../components/Layout';

export default ({statusCode}) => (
    <Layout title="Error!!!">
        {statusCode ? `COuld not load your user data: Status Code ${statusCode}` : "Couldn't get that page, sorry!"}
        <p>Couldn't get that page, sorry!</p>
    </Layout>
);