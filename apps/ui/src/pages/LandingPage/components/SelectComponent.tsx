import { tableCols, tableRow } from '../constant';
import Table from './Table';

const SelectComponent = () => {
  const data = tableRow.map((item) => {
    return {
      model: item.model,
      cost: item.cost,
      month1: item.month1,
      month3: item.month3,
      month6: item.month6,
      details: item.detail,
    };
  });

  return (
    <div className="bg-[#0f0f0f] text-white h-[600px]">
      <div className="flex justify-between pb-10">
        <h2 className="text-3xl max-w-[32.5rem] leading-normal">
          Select from a top range of cost-effective GPUs
        </h2>
        <p className="text-base max-w-[37.5rem] leading-normal">
          Access a wide range of performant NVIDIA and AMD GPUs to accelerate
          your AI, ML & HPC workloads
        </p>
      </div>
      <div>
        <Table cols={tableCols} row={data} h={'h-[440px]'} />
      </div>
    </div>
  );
};

export default SelectComponent;
