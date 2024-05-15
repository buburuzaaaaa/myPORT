import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './Scroller.css'

const Example = () => {
  return (
    <div className="backg">
      <SmoothScroller />
    </div>
  );
};

const SmoothScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.5], ["15%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] backg">
      <div className="sticky top-0 flex items-center overflow-hidden h-[40vh] ">
        <motion.div style={{ x }} className="flex gap-4" id="gapper">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
<div
  key={card.id}
  className="group relative h-[450px] w-[1000px] overflow-hidden p-8" id="carder"
>
  <div
    className="absolute left-0 top-0 h-[30%] w-[30%] z-0" id="iamge "
    style={{
      backgroundImage: `url(${card.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="absolute right-0 top-[30%] h-[70%]} w-[100%] z-10 flex flex-col justify-flex-start p-1" id="text-width">
    <h2 className="text-3xl font-bold text-white">{card.title}</h2>
    <p className="text-white mt-4">{card.description}</p>
  </div>
</div>

  );
};

export default Example;

const cards = [
  {
    url: require("../html.webp"),
    title: "HTML",
    description:" I've cultivated a deep understanding of its structure and semantics, enabling me to craft clean, well-organized, and accessible web pages",
    id: 1,
  },
  {
    url: require("../css.png"),
    title: "CSS / SCSS",
    description:"I've delved deep into its intricacies, mastering layout techniques, responsive design principles, and advanced styling concepts",
    id: 2,
  },
  {
    url: require("../next.webp"),
    title: "Next js",
    description:"I've mastered its powerful features, allowing me to build scalable and high-performance web applications with ease",
    id: 3,
  },{
    url: require("../react.png"),
    title: "React",
    description:"I feel confident in React because I've honed my skills in leveraging its hooks like useRef and useState to craft dynamic and responsive user interfaces effectively.",
    id: 3,
  },{
    url: require("../js.jpg"),
    title: "Javascript",
    description:"I demonstrate proficiency in JavaScript coding with your adept handling of complex layout and styling tasks using frameworks.",
    id: 3,
  },{
    url: require("../arrow.png"),
    title: "What I Code In",
    description:"Here is the languages i have experience with",
    id: 3,
  },
];