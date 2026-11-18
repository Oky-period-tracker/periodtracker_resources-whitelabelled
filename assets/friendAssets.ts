// The app's customisable avatar ("friend") is an optional feature, switched on with
// EXPO_PUBLIC_USE_AVATAR_CUSTOMIZATION. This module does not ship its assets, so keep that
// variable unset: the helpers for its parts below return nothing.
//
// The avatar and theme pickers also read their pictures from here, so those are provided,
// built from the same images as the rest of the app.

import React from 'react'
import { DimensionValue, Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native'
import { assets } from './index'

type PictureProps = {
  width?: DimensionValue
  height?: DimensionValue
  style?: StyleProp<ImageStyle>
}

type PictureComponent = React.ComponentType<PictureProps>

// The pickers expect a component they can size, like an imported SVG
const picture = (source: ImageSourcePropType): PictureComponent => {
  const Picture = ({ width, height, style }: PictureProps) =>
    React.createElement(Image, { source, resizeMode: 'contain', style: [{ width, height }, style] })
  return Picture
}

const toPictures = (sources: Record<string, ImageSourcePropType>) =>
  Object.fromEntries(Object.entries(sources).map(([name, source]) => [name, picture(source)]))

const standardAvatarPictures: Record<string, PictureComponent> = toPictures({
  panda: assets.avatars.panda.stationary_colour,
  unicorn: assets.avatars.unicorn.stationary_colour,
})

const themePictures: Record<string, PictureComponent> = toPictures({
  hills: require('./images/static/themes/icn_theme_1.png'),
  village: require('./images/static/themes/icn_theme_2.png'),
  mosaic: require('./images/static/themes/icn_theme_3.png'),
  desert: require('./images/static/themes/icn_theme_4.png'),
})

export const getStandardAvatarSvg = (avatarName: string): PictureComponent | null =>
  standardAvatarPictures[avatarName] ?? null

export const getThemeSvg = (themeName: string): PictureComponent | null =>
  themePictures[themeName] ?? null

export type BodySize = 'small' | 'medium' | 'large'

type SvgComponent = React.ComponentType<{
  width?: number | string
  height?: number | string
  color?: string
  fill?: string
}>

export const getSelectionAsset: (
  category: 'body' | 'hair' | 'eyes' | 'clothing' | 'devices' | 'categories',
  item: string | null,
) => ImageSourcePropType | SvgComponent | null = () => null

export const getPreviewAsset: (
  category: 'body' | 'hair' | 'eyes' | 'clothing' | 'devices' | 'smile',
  item: string | null,
  bodySize?: BodySize,
) => SvgComponent | null = () => null

export const getCategoryIcon: (
  category: 'body' | 'hair' | 'eyes' | 'clothing' | 'devices',
) => ImageSourcePropType | null = () => null
