const Footer = () => {
  const footerInfo = [
    {
      title: "Company",
      list1: "Supported Device",
      list2: "Interest Based Ads",
    },
    {
      title: "Language",
      list1: "English",
      list2: "Indonesia",
    },
    {
      title: "Need Help?",
      list1: "Help",
      list2: "Feedback",
    },
    {
      title: "Connect With Us",
      list1: "email",
      list2: "Innstagram",
    },
  ];
  return (
    <>
      <div className="bg-transparent relative bottom-0 w-full grow">
        <div className="relative px-8 md:px-16 py-8 space-y-4 w-full">
          <div className="absolute z-10 w-full h-full left-0 bottom-0" />
          <div className="grid grid-cols-2  md:flex md:justify-between">
            {footerInfo.map((list, index) => (
              <div className="z-40" key={index}>
                <h1 className="font-bold">{list.title}</h1>
                <div>
                  <button className="opacity-75">{list.list1}</button>
                </div>
                <div>
                  <button className="opacity-75">{list.list2}</button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <button className="opacity-75">
                  © 2023 Zenplay and Related Entities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
