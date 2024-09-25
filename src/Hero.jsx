const features = [
  {
    name: 'Seamless Shopping Experience.',
    description:
      'Navighează ușor prin colecția noastră diversificată de tablouri, cu filtre care îți permit să găsești rapid exact ce cauți. Fiecare operă de artă vine cu detalii complete, inclusiv dimensiuni, materiale folosite și informații despre artist.',
  },
  {
    name: 'Custom Orders Just for You.',
    description: 'Visezi la un tablou care să se potrivească perfect cu decorul tău? Oferim opțiunea de comenzi personalizate, astfel încât să poți colabora direct cu artiștii pentru a crea o lucrare unică, care să reflecte stilul și preferințele tale. Fie că este vorba de o anumită temă, culori sau dimensiuni, suntem aici să îți îndeplinim dorințele artistice.',
  },
  {
    name: 'Fast Shipping Worldwide.',
    description: 'Livrăm rapid și eficient, indiferent de locul în care te afli. Tablourile sunt ambalate cu grijă pentru a ajunge intacte și gata să fie expuse pe pereții tăi.',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-emerald-900">Discover Unique Art</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elevate Your Space</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transformă-ți locuința cu tablouri originale. Fie că ești în căutarea unei opere de artă abstracte sau a unui peisaj liniștitor, găsești aici tot ce ai nevoie pentru a-ți exprima stilul personal.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://i.pinimg.com/564x/a2/ee/86/a2ee865105d9dd9da1717333c2976146.jpg"
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

