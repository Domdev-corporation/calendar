/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ConfigT, ModesT, ViewsT } from '../types'

export const configService = (config: ConfigT[], windowWidth: number) => {
  const getSuitableParamsByScreen = (): ConfigT | undefined => {
    return config.filter(({ minWidth }) => windowWidth > minWidth)?.at(-1)
  }

  const getView = (defaultView: ViewsT): ViewsT => {
    const data = getSuitableParamsByScreen()

    return data?.view || defaultView
  }

  const getMode = (defaultMode: ModesT): ModesT => {
    const data = getSuitableParamsByScreen()

    return data?.mode || defaultMode
  }

  return { getView, getMode }
}
