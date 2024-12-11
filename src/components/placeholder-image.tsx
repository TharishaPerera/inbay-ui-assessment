export const Placeholder = () => {
    return (
      <div className="items-center justify-center top-[20%] left-[10%] -translate-x-[10%] absolute -z-10 opacity-15 w-full">
        <h1 className="text-center uppercase text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] xl:text-[350px] font-bold tracking-widest">
          OMDB
        </h1>
        <h3 className="text-center uppercase text-[18px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[40px] -mt-2 sm:-mt-5 md:-mt-8 lg:-mt-12 xl:-mt-20 font-bold tracking-widest">
          Search and find you favorite movies
        </h3>
      </div>
    );
}