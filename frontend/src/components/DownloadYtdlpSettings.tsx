import { useState } from 'react';
import {
  VideoResolutionOptions,
  AudioQualityOptions,
  VideoCodecOptions,
  AudioCodecOptions,
  type VideoResolutionType,
  type AudioQualityType,
  type VideoCodecType,
  type AudioCodecType,
} from '../configuration/constants/DownloadFormatOptions';
import generateFormatString from '../functions/generateYtdlpString';
import InputConfig from './InputConfig';
import Button from './Button';

type DownloadYtdlpSettingsProps = {
  format: string | null;
  formatSort: string | null;
  extractorLang: string | null;
  setFormat: React.Dispatch<React.SetStateAction<string | null>>;
  setFormatSort: React.Dispatch<React.SetStateAction<string | null>>;
  setExtractorLang: React.Dispatch<React.SetStateAction<string | null>>;
  oldFormat: string | null;
  oldFormatSort: string | null;
  oldExtractorLang: string | null;
  updateCallback: (name: string, value: string | boolean | number | null) => void;
};

const DownloadYtdlpSettings = ({
  format,
  formatSort,
  extractorLang,
  setFormat,
  setFormatSort,
  setExtractorLang,
  oldFormat,
  oldFormatSort,
  oldExtractorLang,
  updateCallback,
}: DownloadYtdlpSettingsProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [videoResolution, setVideoResolution] = useState<VideoResolutionType>('');
  const [audioQuality, setAudioQuality] = useState<AudioQualityType>('');
  const [videoCodec, setVideoCodec] = useState<VideoCodecType>('');
  const [audioCodec, setAudioCodec] = useState<AudioCodecType>('');

  const handleApplySimple = () => {
    const generatedFormat = generateFormatString({
      videoResolution,
      videoCodec,
      audioCodec,
    });
    updateCallback('downloads.format', generatedFormat);
  };

  const hasSimpleChanges =
    videoResolution !== '' || audioQuality !== '' || videoCodec !== '' || audioCodec !== '';

  return (
    <>
      <div className="settings-box-wrapper">
        <div>
          <p>Video resolution</p>
        </div>
        <div>
          <select
            value={videoResolution}
            onChange={e => setVideoResolution(e.target.value as VideoResolutionType)}
          >
            {VideoResolutionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="settings-box-wrapper">
        <div>
          <p>Audio quality</p>
        </div>
        <div>
          <select
            value={audioQuality}
            onChange={e => setAudioQuality(e.target.value as AudioQualityType)}
          >
            {AudioQualityOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="settings-box-wrapper">
        <div>
          <p>Video codec</p>
        </div>
        <div>
          <select
            value={videoCodec}
            onChange={e => setVideoCodec(e.target.value as VideoCodecType)}
          >
            {VideoCodecOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="settings-box-wrapper">
        <div>
          <p>Audio codec</p>
        </div>
        <div>
          <select
            value={audioCodec}
            onChange={e => setAudioCodec(e.target.value as AudioCodecType)}
          >
            {AudioCodecOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasSimpleChanges && (
        <div className="settings-box-wrapper">
          <div></div>
          <div>
            <Button label="Apply" onClick={handleApplySimple} />
          </div>
        </div>
      )}

      <div className="settings-box-wrapper">
        <div></div>
        <div>
          <Button
            label={showAdvanced ? 'Hide advanced settings' : 'Show advanced settings'}
            onClick={() => setShowAdvanced(!showAdvanced)}
          />
        </div>
      </div>

      {showAdvanced && (
        <>
          <div className="settings-box-wrapper">
            <div>
              <p>Format string (yt-dlp -f)</p>
            </div>
            <InputConfig
              type="text"
              name="downloads.format"
              value={format}
              setValue={setFormat}
              oldValue={oldFormat}
              updateCallback={updateCallback}
            />
          </div>
          <div className="settings-box-wrapper">
            <div>
              <p>Format sort (yt-dlp --format-sort)</p>
            </div>
            <InputConfig
              type="text"
              name="downloads.format_sort"
              value={formatSort}
              setValue={setFormatSort}
              oldValue={oldFormatSort}
              updateCallback={updateCallback}
            />
          </div>
          <div className="settings-box-wrapper">
            <div>
              <p>Extractor Language</p>
            </div>
            <InputConfig
              type="text"
              name="downloads.extractor_lang"
              value={extractorLang}
              setValue={setExtractorLang}
              oldValue={oldExtractorLang}
              updateCallback={updateCallback}
            />
          </div>
        </>
      )}
    </>
  );
};

export default DownloadYtdlpSettings;
