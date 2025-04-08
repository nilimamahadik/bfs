
export const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(d.getFullYear()); // Get the last two digits of the year
   
    return `${day}-${month}-${year}`;
}

export const getIndianTimestamp = (utcTimestamp) => {
    const date = new Date(utcTimestamp); 
    const options = {
      timeZone: "Asia/Kolkata", // IST Timezone
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, 
    };
      const indianTime = date.toLocaleString("en-IN", options);
      return indianTime.replace(",", "");
  }
  
  export const formatIndianCurrency = (value) => {
    if (!value) return "";
    const parts = value.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? "." + parts[1] : "";
   
    // Format integer part with Indian style
    const lastThreeDigits = integerPart.slice(-3);
    const otherDigits = integerPart.slice(0, -3);
    const formattedInteger = otherDigits
      ? otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThreeDigits
      : lastThreeDigits;
   
    return formattedInteger + decimalPart;
  };
   