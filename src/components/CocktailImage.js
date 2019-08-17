import glasses from './svg/glasses';

const GENERIC_IMAGE = {
  url: '/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

export default function CocktailImage({ image, glassType, className }) {
  const GlassSvg = glasses[glassType];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <div className={`cocktail-image ${className}`}>
      {image ? (
        <img
          src={`/static${image.url}`}
          alt={image.alt}
          style={{ objectPosition: image.align || '50%' }}
        />
      ) : (
        <div className="svg-wrapper">
          <GlassSvg />
        </div>
      )}
    </div>
  );
}
