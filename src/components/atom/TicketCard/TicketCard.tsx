import { numberWithCommas } from "@/lib/helpers/formatNumber";
import { Minus, Plus } from "lucide-react";

const TicketCard = ({
  type,
  amount,
  seatsLeft,
  quantitySelected,
  increase,
  descrease,
}: {
  type: string;
  amount: number;
  seatsLeft: number;
  quantitySelected: number;
  increase: () => void;
  descrease: () => void;
}) => {
  const quantityStyle =
    seatsLeft > 10
      ? "bg-[#E2F5E4] text-[#25AD32]"
      : seatsLeft <= 10 && seatsLeft > 0
        ? "bg-[#FDF5EA] text-[#EE9C2E]"
        : "";

  const seat =
    seatsLeft > 10
      ? `${seatsLeft && numberWithCommas(seatsLeft)} left`
      : seatsLeft <= 10 && seatsLeft > 0
        ? `Only ${seatsLeft && numberWithCommas(seatsLeft)} left`
        : "Sold out";

  return (
    <div
      className={`rounded-[16px] border border-[#E5E5E5] p-4 ${seatsLeft === 0 && "opacity-45"}`}
    >
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <div className="space-y-3.25">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-black">{type}</h4>
              <span
                className={`block py-0.5 px-2 rounded-[32px] text-xs font-semibold ${quantityStyle}`}
              >
                {seat}
              </span>
            </div>
            <p className="text-xs font-medium text-[#737373]">
              Standing area - Full event access
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">₦{numberWithCommas(amount)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-[#E5E5E5] rounded-[8px]">
          <button
            type="button"
            onClick={descrease}
            disabled={seatsLeft === 0 || quantitySelected === 0}
            className={`p-3 border-r border-[#E5E5E5] ${seatsLeft === 0 || quantitySelected === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="p-3 border-r border-[#E5E5E5]">
            {quantitySelected}
          </div>
          <button
            type="button"
            onClick={increase}
            disabled={seatsLeft === 0 || quantitySelected === seatsLeft}
            className={`p-3  ${seatsLeft === 0 || quantitySelected === seatsLeft ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
