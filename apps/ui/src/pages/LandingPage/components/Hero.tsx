import HeroBg from '../../../assets/images/compute-banner.jpeg'

const Hero = () => {
  return (
    <div className={`h-[500px] w-full bg-cover bg-center m-10`} 
      style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="container mx-auto flex w-full my-10 h-96 justify-center items-center px-5 lg:px-0">
        <div className="max-w-3xl relative p-8 text-white text-center">
          <div className="pb-20">
            <h1 className="text-4xl leading-[1] text-[#e5e7eb] pb-10">
              Easily{' '}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                rent cloud GPUs
              </span>{' '}
              for a variety of workloads
            </h1>
            <p className="text-xl leading-normal font-normal text-gray-300">
              Select from range of high performance and cost effective GPUs that
              fit all your needs. Perfect for AI and workloads.
            </p>
          </div>

          <div className="flex justify-center gap-5 w-full ">
            <button
              type="button"
              className="bg-white text-gray-700 p-2 text-sm w-44 rounded-md tracking-tight"
            >
              Launch an instant
            </button>
            <button
              type="button"
              className="bg-transparent text-white border border-gray-600 text-sm p-2  w-44 rounded-md tracking-tight"
            >
              Speak with an expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
