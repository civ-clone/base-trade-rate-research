"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Research = void 0;
const Research_1 = require("@civ-clone/base-city-yield-research/Research");
const TradeRate_1 = require("@civ-clone/core-trade-rate/TradeRate");
class Research extends TradeRate_1.default {
}
exports.Research = Research;
/**
 * A save records this class by name, and `Research` is claimed by two
 * other things: the research quantity in `core-science` (which
 * `base-city-yield-research` now re-exports) and this trade rate.
 *
 * This one is genuinely different — it `extends TradeRate`, not `Yield`,
 * and points at the yield through `tradeYield` — so it keeps its own
 * identity rather than being merged. Untagged, `ClassRegistry` refused
 * both claimants, and before that a save naming `Research` resolved to
 * *this* class, because the trade rate was the only one in a registry.
 */
Research.type = 'ResearchTradeRate';
Research.tradeYield = Research_1.Research;
exports.default = Research;
//# sourceMappingURL=Research.js.map