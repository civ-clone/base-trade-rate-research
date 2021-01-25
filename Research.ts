import { Research as ResearchYield } from '@civ-clone/base-city-yield-research/Research';
import TradeRate from '@civ-clone/core-trade-rate/TradeRate';
import Yield from '@civ-clone/core-yield/Yield';

export class Research extends TradeRate {
  static tradeYield: typeof Yield = ResearchYield;
}

export default Research;
