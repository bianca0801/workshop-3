const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ];
  
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ];
  
  export default function Example() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-32 w-full"> {/* Folosește w-full */}
        <img
          alt=""
          src="https://i.pinimg.com/564x/59/2e/a4/592ea4ebfd579fc86993cfe983d7f9e7.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="px-4 lg:px-8 w-full"> {/* Asigură-te că folosești w-full */}
          <div className="max-w-7xl mx-auto"> {/* Max-width este setat corect */}
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About me</h2>
              <p className="mt-8 text-lg font-bold leading-8 text-white">
              Mă inspir în lucrările mele din natură și emoțiile cotidiene, combinând tehnici tradiționale cu stiluri moderne. Fiecare tablou pe care îl creez reflectă viziunea mea unică și dorința de a aduce frumusețea artei în viețile oamenilor. Prin acest site, îmi doresc să ofer opere originale care să inspire și să transforme spațiile în care sunt expuse.
              </p>
            </div>
            <div className="mt-10 max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">

              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
               
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  