const SectionTitle = ({
  title,
  paragraph,
}) => {
  return (
    <>
      <div
        className={`w-full mb-4 mx-auto`}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-relaxed! text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
