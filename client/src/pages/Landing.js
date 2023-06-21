import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    // Wrapper at each component is only responsible for styling from "../assets/wrappers"
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            augue quis nulla vulputate congue. Sed auctor faucibus massa, a
            mollis quam bibendum nec. Duis dignissim, massa vel rutrum feugiat,
            sem ex rhoncus tellus, eget scelerisque ipsum velit non urna.
          </p>
          <button className="btn btn-hero">Login / Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
