import React from 'react';

const JobDescription = () => {
  return (
    <div className="prose max-w-none">
      <p>The Roll Off Driver will be responsible for providing a high level of service to customers both safely and efficiently. These service will include the delivery, removal and emptying of various size containers. This position will be required to enter and exit the truck multiple times throughout the day to secure loads, hook and unhook hoses, and check equipment.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-4">Requirements:</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Good Driving Record</li>
        <li>Tanker Endorsement</li>
        <li>Ability to drive a standard transmission</li>
        <li>Must be able to meet criteria for safety sensitive functions according to DOT and Company standards</li>
        <li>Must be able to demonstrate the ability to safely drive the truck and operate equipment</li>
        <li>Ability to read and interpret a key map or GPS to locate service addresses</li>
        <li>Ability to communicate clearly and effectively</li>
      </ul>

      <div className="bg-muted p-4 rounded-lg mt-6">
        <h3 className="text-xl font-semibold">Service Areas</h3>
        <p>We need drivers in these counties: Navarro, Freestone, Henderson, Anderson, and neighboring counties</p>
      </div>
    </div>
  );
};

export default JobDescription;