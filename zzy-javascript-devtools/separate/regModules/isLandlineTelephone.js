export default function isLandlineTelephone(phone) {
  return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(phone)
}