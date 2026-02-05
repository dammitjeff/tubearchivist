export type VideoResolutionType = '' | '2160' | '1440' | '1080' | '720' | '480' | '360';
export const VideoResolutionOptions = [
  { value: '', label: 'Best Available' },
  { value: '2160', label: '4K (2160p)' },
  { value: '1440', label: '1440p' },
  { value: '1080', label: '1080p' },
  { value: '720', label: '720p' },
  { value: '480', label: '480p' },
  { value: '360', label: '360p' },
] as const;

export type AudioQualityType = '' | '320' | '256' | '192' | '128';
export const AudioQualityOptions = [
  { value: '', label: 'Best Available' },
  { value: '320', label: '320 kbps' },
  { value: '256', label: '256 kbps' },
  { value: '192', label: '192 kbps' },
  { value: '128', label: '128 kbps' },
] as const;

export type VideoCodecType = '' | 'av01' | 'vp9' | 'avc1';
export const VideoCodecOptions = [
  { value: '', label: 'No preference' },
  { value: 'av01', label: 'AV1 (iPhone 15 Pro+)' },
  { value: 'vp9', label: 'VP9' },
  { value: 'avc1', label: 'H.264 (universal iOS compatible)' },
] as const;

export type AudioCodecType = '' | 'opus' | 'mp4a';
export const AudioCodecOptions = [
  { value: '', label: 'No preference' },
  { value: 'opus', label: 'Opus' },
  { value: 'mp4a', label: 'AAC (mp4a)' },
] as const;
