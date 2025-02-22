import { useState } from "react";
import { ISortInput } from "@/interfaces";

const RenderInput = ({ data }: { data: ISortInput[] }): React.ReactNode => {
  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>({});

  const handleChange = (name: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  return data.map(({ id, label, name }) => (
    <div key={id} className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="peer hidden"
        checked={!!selectedValues[name]} 
        onChange={() => handleChange(name)}
      />
      <label
        htmlFor={id}
        className="w-6 h-6 border peer-checked:border-4 border-gray-400 rounded-md flex items-center justify-center cursor-pointer peer-checked:border-black peer-checked:bg-transparent"
      ></label>
      <span className="text-lg">{label}</span>
    </div>
  ));
};

export default RenderInput;
