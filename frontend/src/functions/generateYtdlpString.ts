import type {
  VideoResolutionType,
  VideoCodecType,
  AudioCodecType,
} from '../configuration/constants/DownloadFormatOptions';

export type FormatOptions = {
  videoResolution: VideoResolutionType;
  videoCodec: VideoCodecType;
  audioCodec: AudioCodecType;
};

/**
 * Generates a yt-dlp format string (-f argument) from simplified options.
 * Returns null if all options are default (use yt-dlp defaults).
 */
const generateFormatString = (options: FormatOptions): string | null => {
  const { videoResolution, videoCodec, audioCodec } = options;

  if (!videoResolution && !videoCodec && !audioCodec) {
    return null;
  }

  let videoSelector = 'bestvideo';
  const videoFilters: string[] = [];

  if (videoResolution) {
    videoFilters.push(`height<=${videoResolution}`);
  }
  if (videoCodec) {
    videoFilters.push(`vcodec~=${videoCodec}`);
  }

  if (videoFilters.length > 0) {
    videoSelector += `[${videoFilters.join('][')}]`;
  }

  let audioSelector = 'bestaudio';
  if (audioCodec) {
    audioSelector += `[acodec~=${audioCodec}]`;
  }

  let fallback = 'best';
  if (videoResolution) {
    fallback += `[height<=${videoResolution}]`;
  }

  return `${videoSelector}+${audioSelector}/${fallback}`;
};

export default generateFormatString;
