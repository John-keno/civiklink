// interface StepShowOfficialProps {
//   sector: string;
//   location: string;
//   onBack: () => void;
// }
interface StepShowOfficialProps {
  sector: string;
  location: string;
  onBack: () => void;
}

const StepShowOfficial = ({ sector, location, onBack }: StepShowOfficialProps) => {
  const officialsMap: Record<string, Record<string, string>> = {
    'Roads & Transport': {
      Lagos: 'Commissioner of Works, Lagos',
      Abuja: 'Minister of Transport, Abuja',
    },
    Education: {
      Lagos: 'Commissioner of Education, Lagos',
      Abuja: 'Minister of Education, Abuja',
    },
    Health: {
      Lagos: 'Commissioner of Health, Lagos',
      Abuja: 'Minister of Health, Abuja',
    },
  };

  const official = officialsMap[sector]?.[location] || 'No official found for this selection.';

  return (
    <div>
      <h2>Responsible Official</h2>
      <p><strong>Sector:</strong> {sector}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Official:</strong> {official}</p>

      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default StepShowOfficial;


// const StepShowOfficial = ({ sector, location, onBack }: StepShowOfficialProps) => {
//   // Mock database
//   const officialsMap = {
//     'Roads & Transport': {
//       Lagos: 'Commissioner of Works, Lagos',
//       Abuja: 'Minister of Transport, Abuja',
//     },
//     Education: {
//       Lagos: 'Commissioner of Education, Lagos',
//       Abuja: 'Minister of Education, Abuja',
//     },
//   };

//   const official = officialsMap[sector]?.[location] || 'No official found for this selection.';

//   return (
//     <div>
//       <h2>Responsible Official</h2>
//       <p><strong>Sector:</strong> {sector}</p>
//       <p><strong>Location:</strong> {location}</p>
//       <p><strong>Official:</strong> {official}</p>

//       <button onClick={onBack}>Go Back</button>
//     </div>
//   );
// };

// export default StepShowOfficial;
