// Bodies of the app's customisable avatar, which this module leaves disabled (see
// assets/friendAssets.ts). They render nothing.

import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BodyComponentProps = Record<string, any>

const NoBody: React.FC<BodyComponentProps> = () => null

export const BodySmall = NoBody
export const BodyMedium = NoBody
export const BodyLarge = NoBody
