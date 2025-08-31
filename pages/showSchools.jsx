import SchoolCard from '../components/SchoolCard';
import { query } from '../lib/db'; 

export default function ShowSchools({ schools }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Schools
        </h1>
        {schools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No schools found.</p>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const schoolsData = await query({
      query: 'SELECT * FROM schools ORDER BY id DESC',
      values: [],
    });

    const schools = JSON.parse(JSON.stringify(schoolsData));

    return {
      props: {
        schools,
      },
    };
  } catch (error) {
    return {
      props: {
        schools: [],
      },
    };
  }
}