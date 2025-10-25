/**
 * @see https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
 * Currently, XCard component doesn't support app.
 */
type Props = {
  card: "summary";
  site?: string;
  siteId?: string;
  creator?: string;
  creatorId?: string;
  description?: string;
  title: string;
  image?: string;
  imageAlt?: string;
};

export const XCard = (props: Props) => {
  const names = Object.keys(props);

  return (
    <>
      {names.map((name) => <meta key={name} name={`twitter:${name}`} content={props[name]} />)}
    </>
  );
};
