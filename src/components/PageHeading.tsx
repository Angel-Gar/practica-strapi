interface Props{
    text:string;
}

const PageHeading = ({text}: Props) => {
  return <h1 className="text-5xl font-extrabold dark:text-white">{text}</h1>;
};

export default PageHeading;
