import TradeRate from '@civ-clone/core-trade-rate/TradeRate';
import Yield from '@civ-clone/core-yield/Yield';
export declare class Research extends TradeRate {
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
  static readonly type = 'ResearchTradeRate';
  static tradeYield: typeof Yield;
}
export default Research;
