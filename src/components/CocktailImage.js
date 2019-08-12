import Collins from './svg/Collins';
import Coupe from "./svg/Coupe";
import Flute from "./svg/Flute";
import MartiniGlass from "./svg/MartiniGlass";
import RocksGlass from "./svg/RocksGlass";
import Snifter from "./svg/Snifter";
import WineGlass from "./svg/WineGlass";

const SVG = {
  collins: Collins,
  coupe: Coupe,
  flute: Flute,
  martini: MartiniGlass,
  rocks: RocksGlass,
  snifter: Snifter,
  wine: WineGlass,
};

const GENERIC_IMAGE = {
  url: '/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

export default function CocktailImage({ image, glassType }) {
  const GlassSvg = SVG[glassType];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <div className="drink-card__image">
      {image ? (
        <img
          src={`/static${image.url}`}
          alt={image.alt}
          style={{ objectPosition: image.align || "50%" }}
        />
      ) : (
        <GlassSvg />
      )}
    </div>
  );
}
