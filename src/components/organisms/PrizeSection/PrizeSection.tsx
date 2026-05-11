import Container from "@/components/atoms/Container copy 2/Container";
import SectionParagraph from "@/components/atoms/SectionParagraph/SectionParagraph";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";
import Title from "@/components/atoms/Title copy/Title";
import PrizeWrapper from "@/components/molecules/PrizeWrapper/PrizeWrapper";

const PrizeSection = () => {
  return (
    <div
      className="py-16"
      style={{
        background: "url('/assets/images/bg3.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="">
          <div className="flex justify-center items-center flex-col gap-4">
            <SubTitle title="WHAT YOU WIN" />
            <Title title="Star Prize Package" />
            <SectionParagraph desc="The 10th edition comes with our biggest prize package yet. One queen walks away with all of this." />
          </div>
          <PrizeWrapper />
        </div>
      </Container>
    </div>
  );
};

export default PrizeSection;
