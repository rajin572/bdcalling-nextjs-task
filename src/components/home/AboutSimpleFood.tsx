import benifit1 from "@/assest/icons/benifit1.png";
import benifit2 from "@/assest/icons/benifit2.png";
import benifit3 from "@/assest/icons/benifit3.png";
import BenefitCard from "../ui/BenifitCard";
import Container from "../ui/Container";

const benefits = [
  {
    image: benifit1.src,
    title: "Health awareness",
    description:
      "Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.",
    color: "text-green-500",
  },
  {
    image: benifit2.src,
    title: "More Protein",
    description:
      "Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.",
    color: "text-purple-500",
  },
  {
    image: benifit3.src,
    title: "Unending Variety",
    description:
      "Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.",
    color: "text-yellow-500",
  },
];

const AboutSimpleFood = () => {
  return (
    <div className="my-20">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-700 mb-14 text-center">
          Why Simply Good Food
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutSimpleFood;
