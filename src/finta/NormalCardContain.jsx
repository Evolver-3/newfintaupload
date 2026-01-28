

const NormalCardContain = ({children,heading,text,logo,className=""}) => {
  
  return (
    <div className="container">
      <div className="relative h-full w-full min-h-100 p-6 lg:px-16 lg:pb-10">
        <div className="flex h-full flex-col justify-end">

          <div className="absolute top-0 left-1/2 flex w-full max-w-106 -translate-x-1/2 justify-center pt-6 lg:pt-10">
            <div className="relative min-h-45 w-full sm:max-w-106">

              <div className="absolute inset-0 flex items-center justify-center min-h-45">

                {children}


              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-y-3 sm:mx-auto sm:max-w-md sm:items-center sm:text-center">
            <h2 className="text-blue-600 flex items-center gap-x-2 uppercase text-[11px] leading-4 font-bold">
              {logo}
              {heading}
            </h2>
            <p className={`font-book text-[13px] md:text-base ${className}`}>
              {text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default NormalCardContain