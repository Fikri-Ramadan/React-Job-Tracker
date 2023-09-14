import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not found" />
                    <h3>Ohh! page not found</h3>
                    <p>We can&#39;t seem to find the page you&#39;re looking for</p>
                    <Link to="/dashboard">Back to Home</Link>
                </div>
            </Wrapper>
        )
    }
    
    return (
        <Wrapper>
        <div>
            <h3>Something Wen&#39;t Wrong</h3>
        </div>
        </Wrapper>
    );
};

export default Error;
