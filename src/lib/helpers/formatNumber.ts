export function numberWithCommas(x: number) {
  const num = parseFloat(x.toString());
  return Number.isInteger(num)
    ? num.toLocaleString()
    : num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
}

export const formatInputTextNumberWithCommas = (value: string) => {
  // Remove all non-numeric characters except for the decimal point
  let numericValue = value.replace(/,/g, "").replace(/[^0-9.]/g, "");

  // Ensure only one decimal point is allowed
  const parts = numericValue.split(".");

  if (parts.length > 2) {
    numericValue = parts[0] + "." + parts[1]; // Keep only first decimal
  }

  // Limit decimal places to two
  if (parts[1]?.length > 2) {
    numericValue = `${parts[0]}.${parts[1].slice(0, 2)}`;
  }

  // Format with commas for thousands
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatInputTextNumber = (value: string) => {
  return value.replace(/[^0-9+]/g, "");
};

export const removeCommas = (value: string | number): string => {
  if (value === null || value === undefined) return "";

  const stringValue = String(value);
  return stringValue.includes(",")
    ? stringValue.replace(/,/g, "")
    : stringValue;
};
