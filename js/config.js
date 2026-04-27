/** تخزين الطلبات في المتصفح */
const SB_STORAGE_KEY = "sb2_ords";
const SHIP_FREE_AT = 500;
const DEFAULT_SHIP_COST = 50;

function shippingForSubtotal(sub) {
  return sub >= SHIP_FREE_AT ? 0 : DEFAULT_SHIP_COST;
}
