const Label = ({ htmlFor, title }: { htmlFor: string; title: string }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium text-sm">
      {title}
    </label>
  );
};

export default Label;
