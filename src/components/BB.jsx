import "./BB.css"
import nature from "./nature.jpg"
export default function BB(){
    return(
        <>
        <header>
    {/* <img src="nature.jpg" alt="nature" /> */}
    <nav className="navbar">
      <div className="front-page"><a href="#">Front Page</a></div>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Latest</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <div className="buttons">
        <input type="button" value="Login" />
        <input type="button" value="sign up" />
      </div>
    </nav>
    {/* Image Section */}
    <div className="image">
        <img src={nature} alt="Image" />
    </div>
    <div className="text-content">
      
      <h2>Learn To Enjoy,<br />Every Moment Of Your Life</h2>
      <p>Learn to enjoy every moment of your life by appreciating the little things that often go unnoticed, like a warm cup of tea, a kind smile, or a peaceful sunset. Life moves quickly, and if we are always worrying about the future or regretting the past, we miss the beauty of the present. Every moment, whether happy or challenging, teaches us something valuable and helps us grow.</p>
    </div>
    {/* <div className="image">
      <img src="nature.jpg" alt="nature" />
    </div> */}
    <div className="play-button">
      <span className="play"> Start Video</span>
      <i className="fas fa-play" onClick={() => click()}></i>
    </div>
  </header>

        </>
    );
}