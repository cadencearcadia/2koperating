import React from 'react';

const CustomerHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">New Customer Form</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground">Join Our Network of Trusted Partners</h2>
        <div className="space-y-4">
          <p className="text-lg">2k Operating LLC – Richland, TX</p>
          <p className="text-lg text-gray-600">
            Please complete this form to establish your account with us. All information will be kept confidential and secure.
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <img 
          src="/shaking-hands.webp"
          alt="Two business men shaking hands" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CustomerHeader;
