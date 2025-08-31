import Image from 'next/image';

const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ">
      <div className="relative h-48 w-full">
        <Image
          src={school.image || '/placeholder.png'}
          alt={school.name}
          layout="fill"
          objectFit="cover"
          className='transform hover:scale-105 transition-all duration-300'
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
            <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
            </div>
            <span className="text-xs font-semibold text-cyan-600 bg-cyan-100 px-2 py-1 rounded-md">{school.state} Board</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{school.city}</p>
        <h3 className="text-xl font-bold text-gray-800 mt-1 truncate">{school.name}</h3>
        <p className="text-md text-gray-600">{school.address}</p>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SchoolCard;