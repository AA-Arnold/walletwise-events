import Prize from "../../atoms/Prize/Prize";

import { prizes } from "@/features/pageantry/constants";

const PrizeWrapper = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-183.5 w-full space-y-4">
        {prizes?.map((prize) => (
          <Prize id={prize?.id} prize={prize?.prize} key={prize?.id} />
        ))}
      </div>
    </div>
  );
};

export default PrizeWrapper;
