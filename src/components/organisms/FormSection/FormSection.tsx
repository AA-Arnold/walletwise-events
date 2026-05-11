import Container from "@/components/atoms/Container copy 2/Container";
import SectionParagraph from "@/components/atoms/SectionParagraph/SectionParagraph";
import SubTitle from "@/components/atoms/SubTitle/SubTitle";
import Title from "@/components/atoms/Title copy/Title";
import FormWrapper from "@/components/molecules/FormWrapper/FormWrapper";

const FormSection = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex justify-center items-center flex-col gap-4">
          <SubTitle title="PAGEANT REGISTRATION" />
          <Title title="Apply Now" />
          <SectionParagraph desc="Fill in your details below. You'll be taken to a secure  payment page to complete your ₦10,000 registration fee." />
        </div>
        <div className="flex justify-center mt-10 sm:mt-20">
          <FormWrapper />
        </div>
      </Container>
    </div>
  );
};

export default FormSection;
