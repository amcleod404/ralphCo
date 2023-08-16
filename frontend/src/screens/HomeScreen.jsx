import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Loader from '../components/Loader'
import Message from "../components/Message";
import Paginate from '../components/Paginate'
import ProductCarousel from "../components/ProductCarousel";
import { useParams } from "react-router-dom";
import Meta from "../components/Meta";

const HomeScreen = () => {
    const { pageNumber, keyword } = useParams()
    const { data, isLoading, error } = useGetProductsQuery({keyword, pageNumber});
    return (
        <>
            {!keyword ? <ProductCarousel></ProductCarousel> : <Link to='/' className="btn btn-light mb-4"> Go Back</Link>}
            {isLoading ? (
                <Loader></Loader>
            ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) :
            (<>
                <Meta></Meta>
                <h1>Latest Designs</h1>
                <Row>
                    {data.products.map((product) => {
                        return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}></Product>
                        </Col>;
                    })}
                </Row>
                <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''}>
                </Paginate>
            </>)}
            
        </>
    );
};

export default HomeScreen;
