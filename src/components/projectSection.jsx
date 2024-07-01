import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ProjectSection = () => {
  return (
    <div className="bg-[#000] mt-[20vh] md:mt-[40vh]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#000]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[15rem]">
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
      className="group relative h-[80vh] w-[95vw] md:w-[80vw] overflow-hidden bg-neutral-200 rounded-[30px]">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-[1.03]"></div>
      <div className="absolute z-10 bottom-4 right-4">
        <p className="bg-[#000] rounded-[20px] p-4 text-[2rem] font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;

const cards = [
  {
    url: "./Projects/holesail-03.png",
    title: "Holesail",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
