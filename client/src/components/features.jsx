import React from "react";
import { AdjustmentsVerticalIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';

export default function Features({ Icon, bgColor, title, description }) {
  return (
    <div className="flex lg:h-[250px] lg:w-[350px] flex-col items-center gap-5 p-5 mb-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mx-3">

      <div className={`icon rounded-3xl p-3 ${bgColor}`}>
        {Icon && <Icon className="h-10 w-10 text-white" />}
      </div>
      <h2 className="text-xl font-bold tracking-tight text-center">{title}</h2>
      <span className="text-mdtext-gray-700  tracking-tight text-center">
        {description}
      </span>
    </div>
  );
}