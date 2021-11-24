import { Token } from '@autoshark-finance/sdk'
import tokens from 'config/constants/tokens'

const { bondly, safemoon } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  bondly,
}

export default SwapWarningTokens
