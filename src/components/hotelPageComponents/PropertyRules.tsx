import { propertyRulesSchema } from "@/data/data";

const PropertyRules = () => {

    return (
        <div className="space-y-10">
            <div className="mt-10">
               <h3 className="text-3xl font-semibold">Property Rules</h3>
            </div>
            <div className="space-y-4">
                {propertyRulesSchema.slice(0,5).map((name) => (
                    <div key={name.key} className="flex items-center">
                        <p className="ml-2 font-medium">{name.name}</p>
                    </div>
                ))}
                <div className="mt-5">
                    <button className="border border-black px-28 py-2 rounded-md font-medium hover:bg-black hover:text-white transition-all duration-300">Reed More</button>
                </div>
            </div>
            <hr />
        </div>
    )
};

export default PropertyRules;