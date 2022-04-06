import './home.css'
import logo1 from "../../HomePagePic1.svg";
import logo2 from "../../HomePagePic2.svg";
import { Carousel } from "react-bootstrap";


const Home = () => {

    return (
        <div className="home-page__container">
            <div className="home-page__header">Welcome to <strong className="nav-header__sub">Borrow</strong>My!</div>

            <div className="home-page__description">
                <p className="home-page__paragraph"> The platform where you can borrow toys from your neighbours, and lend out toys that your kids play with only sometimes.
                </p>
                <p className="home-page__paragraph">Do your kids love new toys, but you don’t love the ever-growing mountain of vehicles, dolls and games spilling out of your cupboards?
                </p>
                <p className="home-page__paragraph">We have created a platform were you can connect with like-minded parents to lend toys to each other, creating a large toy library for your children.
                </p>
            </div>
            <h4 className="home-page__subheader">Benefits of using BorrowMy:</h4>
            <ul className="home-page__list">
                <li className="home-page__list-item">Reduce consumption, especially of plastics, which is better for the environment.</li>
                <li className="home-page__list-item">Save money and have less clutter in your home.</li>
                <li className="home-page__list-item">Kids get to play with new and exciting toys often.</li>
            </ul>
            <Carousel className="carousel-outer">
                <Carousel.Item className="carousel-inner">
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1588348442528-85c6fa3b0440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/children-playing-with-colorful-blocks-building-a-block-tower-picture-id589961490?s=612x612"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/*<img className="home-page__image" src={logo1}/>*/}
        </div>
    )
};

export default Home;