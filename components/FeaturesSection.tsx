import { cn } from "@/lib/utils";
import {
  IconRecycle,
  IconAward,
  IconCheck,
  IconPlant,
  IconHeadset,
  IconPigMoney,
  IconClock,
  IconShield,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const advantages = [
    {
      title: "REUSABLE",
      description:
        "Alum Form System can be used 100 - 150 times giving the advantage of additional ROI using the economies of scale",
      icon: <IconRecycle />,
    },
    {
      title: "SUPERIOR FINISHING",
      description:
        "Aluminium's smooth finish eliminates plastering, yielding durable structures with minimal maintenance costs.",
      icon: <IconAward />,
    },
    {
      title: "QUALITY ASSURANCE",
      description:
        "Alum Form System uses High Grade alloy grade and we are dedicated to infusing excellence in every step",
      icon: <IconCheck />,
    },
    {
      title: "ENVIRONMENT FRIENDLY",
      description:
        "Alum Form System uses aluminium and wood for superior concrete finish, eliminating debris.",
      icon: <IconPlant />,
    },
    {
      title: "SITE SUPPORT",
      description:
        "Alum Form System guides clients through any issue, delivering exceptional customer support.",
      icon: <IconHeadset />,
    },
    {
      title: "REASONABLE PRICING",
      description:
        "Get premium quality at competitive rates with Alum Forms, ensuring the best value for your investment.",
      icon: <IconPigMoney />,
    },
    {
      title: "TIMELY DELIVERY",
      description:
        "With our efficient logistics and streamlined processes, we ensures your materials arrive on schedule, every time.",
      icon: <IconClock />,
    },
    {
      title: "DURABLE MATERIALS",
      description:
        "Our high-grade aluminium components are designed to withstand harsh construction environments and provide long-lasting performance.",
      icon: <IconShield />,
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Advantages of Alum Form Systems
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {advantages.map((advantage, index) => (
            <Advantage key={advantage.title} {...advantage} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Advantage = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/advantage border-gray-200",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/advantage:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-gray-50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/advantage:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-gray-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-gray-600 group-hover/advantage:text-[#ECA72C] group-hover/advantage:scale-110 group-hover/advantage:translate-x-4 transition-all duration-200 origin-center">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/advantage:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/advantage:bg-[#ECA72C] transition-all duration-200 origin-center" />
        <span className="group-hover/advantage:translate-x-2 transition duration-200 inline-block text-gray-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
