import React from 'react';

interface Brand {
  name: string;
  src: string;
  filter?: string;
}

const brands: Brand[] = [
  {
    name: 'MOPAR',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:185/quality:100/uri:ifs%3A%2F%2FM%2Fd3b3fffc-7e99-4e55-8b72-cdde04e0f4e1/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAADymtJsnpgXX12abyiii76Oa1FDD1RTqR-JlO5W7NOFd&exp=1771263750&osig=AAAAAAAAAAAAAAAAAAAAANlQlM6YgX2hYbWclg3yvsuwUwgaOoif1ekCErOP9CbZ&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.1)',
  },
  {
    name: 'Motorcraft',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:38/quality:100/uri:ifs%3A%2F%2FM%2Fcedd94a3-4017-49a9-820b-1ff2afa75f13/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAACTQgRjqV0n5wM19eGYxTIGGOnztgVUc70PCdjW8Orxp&exp=1771265657&osig=AAAAAAAAAAAAAAAAAAAAAG19KA0NPjjgLTxzj5tuMDB-snUkwn-8ZWIwsU5lzQxm&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(0.95)',
  },
  {
    name: 'ACDelco',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:78/quality:100/uri:ifs%3A%2F%2FM%2Faa40ad42-47ca-4b07-9906-5683530763e6/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAJnD-UhS9RWsWt9tyGxFmMzGU7JZppUho7q0C88SC3G_&exp=1771266540&osig=AAAAAAAAAAAAAAAAAAAAAAcClUa6tRnDuC2iKbYp_2RUx6batl30cfM4QqmKsPnV&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.0)',
  },
  {
    name: 'Bilstein',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:97/quality:100/uri:ifs%3A%2F%2FM%2F84e8123c-b376-4322-bf66-52092892432d/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAEmMCarbsOQeO9seQVhbPXU-LFBiA51GJzgpezQ2hBmV&exp=1771266408&osig=AAAAAAAAAAAAAAAAAAAAANGqbuEDt9spw6N3rC4BmWl-woXlz9SFsI0iEmDr2_2-&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.0)',
  },
  {
    name: 'BDS Suspension',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:84/quality:100/uri:ifs%3A%2F%2FM%2F09354c02-c3c1-4ecd-a08d-c8b6c361a45c/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAABXSLY8tnNzvmLOFfPfO8xBKyl4DVfWP08EnRhm6OXBc&exp=1771266608&osig=AAAAAAAAAAAAAAAAAAAAAJ65ywxo1jXr-0CdMu7SfcyuJuolR_jAcieh-ltkgUEa&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.05)',
  },
  {
    name: 'Falcon Shocks',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:45/quality:100/uri:ifs%3A%2F%2FM%2F41930d51-7f86-48cf-adc5-4bc0873fe17b/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAKWOK0Aa1Ishbm-roO_Qn72obfPsDEp-UkYKPKoB0YyR&exp=1771263259&osig=AAAAAAAAAAAAAAAAAAAAAEyH6Bmiyah1mK6bebmSKUnH0ZCaQcs93GgXU_OWpvl0&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.1)',
  },
  {
    name: 'PSC Steering',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:72/quality:100/uri:ifs%3A%2F%2FM%2Faef3b6ea-fa49-4768-8e4c-c774e51b9bbf/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAADzWyoX6OCacfsZLMRkE15EMTV_U0T9o_MNElO0SlWqZ&exp=1771264281&osig=AAAAAAAAAAAAAAAAAAAAACBA099uhuNW7gFA2umZSaG33QurZL2NXkxTS_h5nALP&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.0)',
  },
  {
    name: 'XD Wheels',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2Faff71d97-bb81-40e8-8f27-38dde3bac90d/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALEmFgngxrrphXhKe9dwiNtpyHc34MspS8FKGQxPydHR&exp=1771266054&osig=AAAAAAAAAAAAAAAAAAAAAGzVk1eheCIgWaZK9CQ5EQxf8fYdOAkBM9_PulaXKA20&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.1)',
  },
  {
    name: 'AMP Research',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:188/quality:100/uri:ifs%3A%2F%2FM%2F9448a2cf-4291-494d-a61b-280fcf73a50c/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALlGEMXZtUv9GVSGHpXNtVVsStR7JI_SG4Dmp3F1egBL&exp=1771264570&osig=AAAAAAAAAAAAAAAAAAAAAPOGgXwkxL3c0GYayP_3wkp0FVTW8p4ES7vECcEbegpB&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.1)',
  },
  {
    name: 'Go Rhino',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:23/quality:100/uri:ifs%3A%2F%2FM%2F0f41b641-b67d-4dae-8bc9-410507c97e41/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAANOBtI2IK--AwaFpVwoRJV95K_vupJPQhQXmN_BNVz4g&exp=1771265003&osig=AAAAAAAAAAAAAAAAAAAAAMZqnPvJWFzDW05n2BtwB8dg_uWcnL3CTKU-RcT8Xe8e&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.05)',
  },
  {
    name: 'Raptor',
    src: 'https://media.canva.com/v2/image-resize/format:PNG/height:117/quality:100/uri:ifs%3A%2F%2FM%2F85162b1d-286f-43db-ae3b-5683b72d1440/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAADt8RYeBulfJ96hxr29WEi-IxTmvwiXA2eq2LBxnKWqe&exp=1771263521&osig=AAAAAAAAAAAAAAAAAAAAAKuPBPn-h6aH8QeLrLA77z1TUjGnCE_Azn2FxVFLh0YC&signer=media-rpc&x-canva-quality=thumbnail',
    filter: 'brightness(1.1)',
  },
];

// Triplica per evitare salti visivi con pochi elementi
const marqueeItems = [...brands, ...brands, ...brands];

const BrandCard: React.FC<{ brand: Brand; id: string }> = ({ brand, id }) => (
  <div
    key={id}
    className="flex-shrink-0 flex items-center justify-center rounded-lg border border-[#2A2A2A] px-6 py-3 h-16 w-44 hover:border-[#CC0000] transition-colors duration-300 bg-[#1A1A1A]"
  >
    <img
      src={brand.src}
      alt={brand.name}
      className="max-h-10 max-w-full object-contain"
      style={{ filter: brand.filter }}
      loading="lazy"
      draggable={false}
    />
  </div>
);

const BrandLogos: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] border-y border-[#2A2A2A] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="fade-up text-xs font-heading font-semibold tracking-[0.3em] text-[#CC0000] uppercase mb-3">
          Importatore Ufficiale
        </p>
        <h2 className="fade-up font-display font-bold text-3xl sm:text-4xl uppercase tracking-wider text-white">
          Brand USA <span className="text-[#CC0000]">Principali</span>
        </h2>
        <p className="fade-up mt-3 text-[#8A8A8A] text-base max-w-xl mx-auto" style={{ transitionDelay: '150ms' }}>
          Accedi direttamente al catalogo dei marchi americani più richiesti, senza intermediari.
        </p>
      </div>

      {/* Unica riga — scorre a sinistra, fluida e lenta */}
      <div className="relative">
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'brand-marquee-left 80s linear infinite',
          }}
        >
          {marqueeItems.map((brand, index) => (
            <BrandCard key={`r1-${index}`} brand={brand} id={`r1-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
