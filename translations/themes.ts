import { Locale } from '.'
import Cloud from '../../components/icons/Cloud'
import { CloudOutline } from '../../components/icons/CloudOutline'
import { Star } from '../../components/icons/Star'
import { StarOutline } from '../../components/icons/StarOutline'
import { CircleOutline } from '../../components/icons/CircleOutline'
import { Circle } from '../../components/icons/Circle'
import { Appearance } from '../../components/IconButton'
import { SvgIconProps } from '../../components/icons/types'

export type ThemeName = 'hills' | 'mosaic' | 'village' | 'desert'

// 'friend' is the app's customisable avatar. It needs EXPO_PUBLIC_USE_AVATAR_CUSTOMIZATION and its
// own assets (see assets/friendAssets.ts), neither of which this module provides, so it is part of
// the type but never offered in `avatarNames`.
export type AvatarName = 'panda' | 'unicorn' | 'friend'

export const defaultAvatar: AvatarName = 'panda'
export const avatarNames: AvatarName[] = ['panda', 'unicorn']

export const defaultTheme: ThemeName = 'hills'
export const themeNames: ThemeName[] = ['hills', 'village', 'mosaic', 'desert']

export const themeTranslations: Record<Locale, Record<AvatarName | ThemeName, string>> = {
  en: {
    panda: 'panda',
    unicorn: 'unicorn',
    friend: 'friend',
    hills: 'hills',
    mosaic: 'mosaic',
    village: 'village',
    desert: 'desert',
  },
}

export const IconForTheme: Record<ThemeName, Record<Appearance, React.FC<SvgIconProps>>> = {
  hills: {
    fill: Cloud,
    outline: CloudOutline,
  },
  mosaic: {
    fill: Star,
    outline: StarOutline,
  },
  village: {
    fill: Cloud,
    outline: CloudOutline,
  },
  desert: {
    fill: Circle,
    outline: CircleOutline,
  },
}

/* 
  Instead of having Icon buttons (eg clouds) the main screen wheel can be a continuous ring,
  Themes included in this list will use this ring style
*/
export const wheelRingThemes: ThemeName[] = ['desert']
