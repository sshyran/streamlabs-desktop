import React, { useEffect, useState } from 'react';
import SvgContainer from 'components-react/shared/SvgContainer';
import { $t } from 'services/i18n';

const loadingStrings = () => [
  // Basic Feature Usage
  $t('You can edit the sounds of your stream alerts from the alertbox properties menu.'),
  $t('You can access our theme library from the left sidebar.'),
  $t('Our 24/7 support staff is available at Discord.gg/stream.'),
  $t('Sources are what we call media like text, images, video & audio feeds.'),
  $t('Undo works in the Editor. Praise the Ctrl + Z gods!'),
  $t(
    'The sources listed at the top of your sources pane will be layered the highest in your editor.',
  ),
  $t('Studio Mode is a powerful way to curate a professional-quality stream.'),
  $t('Cloudbot is a chatbot that can help you moderate your stream.'),
  $t('The Remote Control feature lets you control your active scene in real-time from your phone.'),
  $t('Set Hotkeys from your settings to control your stream with your keyboard.'),
  $t('With Game Overlay you can view chat messages while gaming without switching screens.'),
  $t('The editor is fully customizable. Try repositioning things from the Layout Editor.'),
  $t(
    'Studio Mode allows you to customize a scene while you are live before your viewers can see it.',
  ),
  $t('With the Highlighter, you can save clips during your stream and publish them to YouTube.'),
  $t("You can login to Streamlabs from any device, and we'll load your scenes from the cloud."),
  $t('As your scenes get more complex, try managing your sources in folders.'),
  $t(
    'To fine-tune the positioning of a source, select it from the editor then press any arrow key.',
  ),
  $t('Right-click a source, then choose "Properties" to view its advanced settings.'),
  $t('You can position your chat panel to be either on the left or right side of your screen.'),
  $t('Right-click on your camera source to add filters to your webcam.'),
  $t(
    'You can add and edit stinger transitions by clicking the settings cog near your scene collections.',
  ),
  $t('To crop your webcam, press Alt then drag the bounding box.'),
  $t('Widgets are dynamic, interactive overlays you can add to your scene.'),

  // Prime Feature Usage
  $t('Our App Store contains advanced technology to take your stream to the next level.'),
  $t('With multi-stream, you can stream to YouTube, Twitch, Trovo, and Facebook at the same time.'),
  $t('You can customize the design of your tip page from the Theme Library.'),
];

export default function Loader() {
  const [loaderText, setLoaderText] = useState('');
  useEffect(lifecycle, []);

  function lifecycle() {
    function loopRandomText() {
      const randomIndex = Math.floor(Math.random() * loadingStrings.length);
      if (loaderText === loadingStrings()[randomIndex]) {
        loopRandomText();
      } else {
        setLoaderText(loadingStrings[randomIndex]);
      }
    }
    loopRandomText();
    const interval = setInterval(loopRandomText, 5000);

    return function cleanup() {
      clearInterval(interval);
    };
  }

  return (
    <div className="s-loader">
      <div className="s-loader__bg">
        <div className="s-loader__inner">
          <Spinner />
          <div className="s-loader__text">{loaderText}</div>
        </div>
      </div>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="s-spinner s-spinner__overlay">
      <div className="s-bars">
        <SvgContainer src={spinnerSrc} className="s-spinner--large" />
      </div>
    </div>
  );
}

const spinnerSrc = `
<svg
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 0 28 40"
>
  <path d="M0 0, l0 4, l0 -4" id="s-bar-y-path"></path>
  <rect width="4" height="40" x="0" y="0" ry="2" rx="2" class="s-spinner__bar">
    <animate
      attributeName="opacity"
      values=".24; .08; .24"
      begin="0s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animate
      attributeName="height"
      values="40; 32; 40"
      begin="0s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animateMotion begin="0s" dur="1.2s" repeatCount="indefinite">
      <mpath xlink:href="#s-bar-y-path"></mpath>
    </animateMotion>
  </rect>
  <rect width="4" height="40" x="12" y="0" ry="2" rx="2" class="s-spinner__bar">
    <animate attributeName="opacity" values=".24; .24; .24" begin="0s" dur="0.4s"></animate>
    <animate
      attributeName="opacity"
      values=".24; .08; .24"
      begin="0.4s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animate
      attributeName="height"
      values="40; 32; 40"
      begin="0.4s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animateMotion begin="0.4s" dur="1.2s" repeatCount="indefinite">
      <mpath xlink:href="#s-bar-y-path"></mpath>
    </animateMotion>
  </rect>
  <rect width="4" height="40" x="24" y="0" ry="2" rx="2" class="s-spinner__bar">
    <animate attributeName="opacity" values=".24; .24; .24" begin="0s" dur="0.8s"></animate>
    <animate
      attributeName="opacity"
      values=".24; .08; .24"
      begin="0.8s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animate
      attributeName="height"
      values="40; 32; 40"
      begin="0.8s"
      dur="1.2s"
      repeatCount="indefinite"
    ></animate>
    <animateMotion begin="0.8s" dur="1.2s" repeatCount="indefinite">
      <mpath xlink:href="#s-bar-y-path"></mpath>
    </animateMotion>
  </rect>
</svg>`;
