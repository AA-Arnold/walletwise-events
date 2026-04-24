interface LabelProps {
  title: string;
  className?: string;
}

const Label = ({
  title,
  className = "text-sm font-medium text-[#A0A0A0]",
}: LabelProps) => {
  return <label className={`block ${className}`}>{title}</label>;
};

export default Label;
