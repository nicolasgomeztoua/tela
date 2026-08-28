import type { AdFormat } from '@/types/design'

export const AD_FORMATS: AdFormat[] = [
  { id: 'linkedin-feed',      label: 'LinkedIn Feed',       platform: 'linkedin',  width: 1200, height: 627,  aspectRatio: '1.91:1' },
  { id: 'linkedin-sponsored', label: 'LinkedIn Sponsored',  platform: 'linkedin',  width: 1200, height: 1200, aspectRatio: '1:1' },
  { id: 'instagram-feed',     label: 'Instagram Feed',      platform: 'instagram', width: 1080, height: 1080, aspectRatio: '1:1' },
  { id: 'instagram-story',    label: 'Instagram Story',     platform: 'instagram', width: 1080, height: 1920, aspectRatio: '9:16' },
  { id: 'facebook-feed',      label: 'Facebook Feed',       platform: 'facebook',  width: 1200, height: 628,  aspectRatio: '1.91:1' },
  { id: 'facebook-story',     label: 'Facebook Story',      platform: 'facebook',  width: 1080, height: 1920, aspectRatio: '9:16' },
  { id: 'generic-banner',     label: 'Banner',              platform: 'generic',   width: 1200, height: 300,  aspectRatio: '4:1' },
  { id: 'email-header',       label: 'Email Header',        platform: 'email',     width: 640,  height: 90,   aspectRatio: '64:9' },
  { id: 'email-hero',         label: 'Email Hero',          platform: 'email',     width: 640,  height: 360,  aspectRatio: '16:9' },
  { id: 'email-proof',        label: 'Email Proof',         platform: 'email',     width: 640,  height: 480,  aspectRatio: '4:3' },
  { id: 'email-closer',       label: 'Email Closer',        platform: 'email',     width: 640,  height: 280,  aspectRatio: '16:7' },
  { id: 'email-trust',        label: 'Email Trust',         platform: 'email',     width: 640,  height: 192,  aspectRatio: '10:3' },
  { id: 'email-footer',       label: 'Email Footer',        platform: 'email',     width: 640,  height: 202,  aspectRatio: '320:101' },
]

export const DEFAULT_FORMAT = AD_FORMATS.find(f => f.id === 'linkedin-feed')!

export function getFormatsByPlatform(platform: string) {
  return AD_FORMATS.filter(f => f.platform === platform)
}
