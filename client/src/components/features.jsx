import React from "react";
import { AdjustmentsVerticalIcon, NewspaperIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';

export default function Features({ Icon, bgColor, title, description }) {
  return (
    <div className="flex flex-col items-center gap-8 first p-5 mb-12 w-full md:w-1/3  bg-white h-1/2 rounded-2xl border-b-2 border-b-transparent hover:border-b-2 hover:border-b-gray-300 hover:shadow-xl transition-all duration-600 delay-100 hover:-translate-y-2">
      <div className={`icon rounded-3xl p-3 ${bgColor}`}>
        {Icon && <Icon className="h-10 w-10 text-white" />}
      </div>
      <h2 className="text-xl font-bold tracking-tight text-center">{title}</h2>
      <span className="text-lg text-gray-500 font-medium tracking-tight text-center">
        {description}
      </span>
    </div>
  );
}