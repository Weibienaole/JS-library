export default function formatMoney(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}