import Link from 'next/link';

function TagItem({tag}) {
  return (
    <li>
      <Link
        as={`/tags/${tag}`}
        href={`/tags?t=${tag}`}
      >
        <a>
          {tag}
        </a>
      </Link>
    </li>
  );
}

export default function TagsList({tags}) {
  return (
    <div className="centered-wrapper">
      <ul className="tags-list">
        {tags.map(t => <TagItem key={t} tag={t} />)}
      </ul>
    </div>
  );
}
