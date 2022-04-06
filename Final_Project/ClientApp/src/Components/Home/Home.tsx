import './home.css'
import logo1 from "../../HomePagePic1.svg";
import logo2 from "../../HomePagePic2.svg";
import { Carousel } from "react-bootstrap";
import Footer from "../Footer/Footer";


const Home = () => {

    return (
        <div>
            <div className="home-page__container">
                <Carousel className="carousel-outer">
                    <Carousel.Item className="carousel-inner">
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://st2.depositphotos.com/1074529/10959/v/950/depositphotos_109595930-stock-illustration-toys-seamless-pattern-for-kids.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='carousel-title-container'>
                            <h3 className='carousel-title'>Reduce consumption</h3>
                            <p className='carousel-title__sub'>Contribute by buying less new (plastic) toys.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://static.vecteezy.com/system/resources/previews/000/115/516/original/kids-toys-pattern-vectors.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className='carousel-title-container'>
                            <h3 className='carousel-title'>Happier kids!</h3>
                            <p className='carousel-title__sub'>An endless supply of new toys to borrow from BorrowMy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://img.freepik.com/free-vector/kids-toys-pattern_1284-34751.jpg?w=2000"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='carousel-title-container'>
                            <h3 className='carousel-title'>Save money!</h3>
                            <p className='carousel-title__sub'>No need to buy new toys, just trade them!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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
                {/*<img className="home-page__image" src={logo1}/>*/}
            </div>
            <Footer />
        </div>
        
    )
};

export default Home;