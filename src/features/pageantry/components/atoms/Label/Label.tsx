const Label = ({ title, id }: { title: string; id: string }) => {
  return (
    <label
      className="text-[#A0A0A0] sm:text-sm text-xs font-medium"
      htmlFor={id}
    >
      {title}
    </label>
  );
};

export default Label;
