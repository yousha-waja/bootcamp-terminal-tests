export default function yearsAgo(year){
    let currentYear = new Date("2023-03-08")
    return (currentYear.getFullYear()-year);
    }