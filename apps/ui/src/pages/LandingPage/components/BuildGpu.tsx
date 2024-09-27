const BuildGpu = () => {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <div className="flex justify-between py-10 my-20">
        <h2 className="text-3xl max-w-[32.5rem] leading-normal">
          Build a GPU cloud that’s perfect for your workloads
        </h2>
        <div>
          <div className="rounded-3xl flex gap-5 border border-gray-500 max-w-fit p-2 px-3 mb-2">
            <button className="bg-white text-gray-800 rounded-3xl px-3">
              AI
            </button>
            <p className="text-sm cursor-pointer">Rendering</p>
            <p className="text-sm cursor-pointer">Content Creation</p>
          </div>
          <p className="text-base max-w-[37.5rem] leading-normal">
            Deploying AI based workloads on Compute is easy and
            cost-effective. Follow our AI related tutorials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildGpu;
