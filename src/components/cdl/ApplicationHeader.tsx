import React from 'react';

const ApplicationHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">CDL Driver Application</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground">CDL Roll off Driver – Full time, Year-round employment</h2>
        <div className="space-y-4">
          <p className="text-lg">2k Operating LLC – Richland, TX</p>
          <p className="text-xl font-semibold">$40,000 – $70,000 a year</p>
        </div>
      </div>
      <div className="hidden md:block h-64 w-full">
        <img 
          src="/lovable-uploads/8281520b-b1eb-445b-8b7f-65fc07773cf3.png"
          alt="Professional truck driver standing in front of a commercial truck" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ApplicationHeader;