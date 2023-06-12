
const BannerDescription = () => {
    return (
        <div className="  md:w-2/4  shadow-md">
            <h2 className="text-center text-3xl md:text-5xl font-extrabold"> Welcome to <span className="block md:inline">
            FluentVerse</span></h2>
            <p className="my-8 md:mx-0 mx-10 text-slate-300 md:leading-8">Multiple Languages. Immerse yourself in a world of linguistic exploration, where language barriers become bridges.  <span className="hidden md:block">Discover interactive lessons, engage with a vibrant community, and watch your language skills soar. Join FluentVerse today and embark on a journey to language mastery!</span> </p>
           <div className="text-center"> <button className="myBtn  px-4 py-1">explore more</button></div>
        </div>
    );
};

export default BannerDescription;