import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="border-gray-600 border-t border-b py-10">
        <div className="flex justify-center">
          <p className="max-w-[25rem] text-2xl leading-normal">
            Get started today or speak with an expert...
          </p>
          <div className="">
            <p className="flex gap-2 items-center pb-1">
              <span>
                <FaPhoneAlt />
              </span>
              <span>+44 20 8050 7646</span>
            </p>
            <p className="text-sm text-gray-400 pb-5">
              Available Mon-Fri 9am-5pm UK time
            </p>
            <div className="flex justify-center gap-5 w-full ">
              <button
                type="button"
                className="bg-white text-gray-700 p-2 text-sm w-40 rounded-md tracking-tight"
              >
                Get started
              </button>
              <button
                type="button"
                className="bg-transparent text-white border border-gray-600 text-sm p-2  w-40 rounded-md tracking-tight"
              >
                Speak with an expert
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between gap-5 py-10">
          <h2 className="text-2xl">Compute-app</h2>
          <div>
            <h2 className="text-lg pb-6">Products</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className="cursor-pointer hover:underline">GPU rental</li>
              <li className="cursor-pointer hover:underline">
                Virtual machines
              </li>
              <li className="cursor-pointer hover:underline">Bare metal</li>
              <li className="cursor-pointer hover:underline">Enterprise</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg pb-6">Resources</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className="cursor-pointer hover:underline">Documentation</li>
              <li className="cursor-pointer hover:underline">Api references</li>
              <li className="cursor-pointer hover:underline">
                files & resources
              </li>
              <li className="cursor-pointer hover:underline">Data Center</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg pb-6">Company</h2>
            <ul className="text-sm text-gray-300 flex flex-col gap-3">
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">
                Affiliate program
              </li>
              <li className="cursor-pointer hover:underline">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
