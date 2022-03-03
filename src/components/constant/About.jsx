import Stalk from "../images/sunny-stalk.jpg";
import SusDev from "../images/sustainable-development.jpg";
import EdenRoad from "../images/edenic-road.jpg";

function About(props) {
  function handleClick(event) {
    switch (event.target.name) {
      case "shop":
        props.handlePageChange("shop");
        break;
      case "grow":
        props.handlePageChange("grow");
        break;
      default:
      // code block
    }
  }

  return (
    <div className="about">
      <main className="about-main">
        <div className="inspiration">
          <img
            src={Stalk}
            alt="a single stalk of hemp glowing in the sunshine"
            className="about-img inspiring-image"
          />
          <p className="inspiring-words">
            Imagine a world where everything humans do is in complete harmony
            with nature. Your clothes would come only from the earth, not at the
            earth's expense. Your packages, single-use utensils and dinnerware,
            shampoo bottles, bags, and even car bumpers, are all made of plants.
            Rather than emitting carbon dioxide and other pollutants, these
            items would trap CO2 and other aerosols, as well as chemical
            pollutants, before becoming daily essentials in your life.
          </p>
          <p>
            This still sounds futuristic, but that future is already within
            reach. Plants products like hemp are already being used for a wide
            range of products, in every case displacing their peers which are
            more harmful to human health and the environment. By making the
            switch to hemp-based daily essentials, you are choosing to live in
            greater harmony with the natural world, and in a more loving
            relationship with the earth which is our home.
          </p>
        </div>
        <div className="mission">
          <img
            src={SusDev}
            alt="broad grassy fields of green with a small town centered in the distance overlooked by a wind turbine"
            className="about-img mission-image"
          />
          <p className="mission-statement">
            Our 5 Year Mission: To Boldly Grow Hemp Where No One Has Grown
            Before
          </p>
          <ul>
            <li>Maximum Profits For Growers</li>
            <li>Minimum Hassle For Busy People</li>
            <li>Maximum Air Purification and Carbon Sequestration</li>
            <li>Maximum Material Repurposing</li>
            <li>Minimum Longterm Harm to Our Environment</li>
          </ul>
        </div>
        <div className="strategy">
          <img
            src={EdenRoad}
            alt="soft dirt road flanked by gentle dark green and earthy pines, willows and a field of lush tall grass"
            className="about-img strategy-image"
          />
          <p className="strategy-statement">
            Our strategy is very simple: the more people who grow hemp, the
            greater the supply, the more products can be made with hemp, the
            more hemp-based products can be purchased, the more greenhouse gases
            can be sequestered, the more harmoniously we all can live with
            nature. Get started{" "}
            <button name="grow" onClick={handleClick}>
              growing
            </button>{" "}
            and/or{" "}
            <button name="shop" onClick={handleClick}>
              using
            </button>{" "}
            hemp today!
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
