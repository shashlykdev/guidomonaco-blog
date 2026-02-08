import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florence Events Calendar - Annual Festivals & Events | Guido Monaco',
  description: 'Complete guide to Florence annual events, festivals, and celebrations. From Scoppio del Carro to Calcio Storico, experience authentic Florentine traditions.',
  keywords: 'Florence events, Florence festivals, Calcio Storico, Scoppio del Carro, Florence calendar, things to do Florence',
}

const events = [
  {
    name: 'Scoppio del Carro (Explosion of the Cart)',
    month: 'Easter Sunday (March/April)',
    location: 'Piazza del Duomo',
    description: "The Scoppio del Carro is Florence's most spectacular Easter tradition, dating back to the First Crusade in 1097. On Easter Sunday morning, a towering antique cart loaded with fireworks is pulled through the streets by white oxen wearing floral garlands to the Duomo. During Easter Mass, at precisely 11:00 AM when the Gloria is sung, the Archbishop lights a mechanical dove called the \"colombina\" which zooms along a wire from the high altar through the church and out to ignite the fireworks cart in the piazza. The explosion erupts in a dazzling display of pyrotechnics, creating thunderous booms and cascading sparks while thousands of spectators watch. According to tradition, if the dove successfully completes its journey and returns to the altar, Florence will have a prosperous year; if not, misfortune awaits. This dramatic ceremony blends religious significance with medieval pageantry, costumed flag-throwers, and Renaissance history. The cart itself dates from the 18th century and is stored year-round in a special building near Porta al Prato. Arrive early (by 9:00 AM) to secure a viewing spot near the Duomo as crowds pack the square. The event is free and uniquely Florentine.",
    timing: '11:00 AM Easter Sunday',
    admission: 'Free',
  },
  {
    name: 'Maggio Musicale Fiorentino',
    month: 'April - June',
    location: 'Teatro dell\'Opera di Firenze & various venues',
    description: "The Maggio Musicale Fiorentino, founded in 1933, ranks among the world's most prestigious music festivals, attracting renowned opera singers, conductors, and orchestras for a season of world-class performances. Italy's oldest music festival presents opera, ballet, symphonic concerts, and chamber music across three months, with productions in Florence's beautiful Teatro dell'Opera and historic venues like Teatro della Pergola. Past festivals have featured legendary artists like Zubin Mehta, Riccardo Muti, and Plácido Domingo, along with innovative stagings of classic operas and premieres of contemporary works. The festival's orchestra, Maggio Musicale Fiorentino Orchestra, is considered one of Italy's finest. Recent seasons have included Verdi's complete works, Wagner cycles, and modern experimental productions that push operatic boundaries. The festival also offers free outdoor concerts in Piazza della Signoria, making high culture accessible to all. Performances range from traditional Italian opera classics to avant-garde contemporary works. Tickets sell out months in advance for major productions, so book early through the official website. Student and last-minute discounts are sometimes available.",
    timing: 'Various times, evening performances typically 20:00',
    admission: '€20-200 depending on production and seating',
  },
  {
    name: 'Calcio Storico Fiorentino (Historic Football)',
    month: 'June (typically mid-month)',
    location: 'Piazza Santa Croce',
    description: "Calcio Storico Fiorentino is an ancient and brutal sport combining soccer, rugby, and wrestling, played in medieval costume with four teams representing Florence's historic quarters. Dating back to the 15th century, this isn't your typical football - it's a violent, chaotic contest where 27 players per team battle for 50 minutes with minimal rules. Punching, tackling, headbutting, and choking are not only allowed but expected, making it more gladiatorial combat than sport. The four teams wear traditional colors: Azzurri (Blues) from Santa Croce, Bianchi (Whites) from Santo Spirito, Rossi (Reds) from Santa Maria Novella, and Verdi (Greens) from San Giovanni. Matches take place on a sand-covered Piazza Santa Croce transformed into a Renaissance arena, with 16th-century pageantry including a historic parade of over 500 participants in authentic costumes. The tournament culminates on June 24th, Florence's patron saint San Giovanni's feast day. Winning teams receive a white calf (historically the prize) though now it's ceremonial. The atmosphere is electric with passionate neighborhood rivalries dating back centuries. Tickets must be booked months ahead - matches sell out instantly.",
    timing: 'Three matches in June, finals June 24th at 18:00',
    admission: '€30-100+ depending on seating',
  },
  {
    name: 'Festa di San Giovanni (St. John the Baptist Day)',
    month: 'June 24',
    location: 'Piazzale Michelangelo & city-wide',
    description: "Florence celebrates its patron saint, John the Baptist, with festivities culminating in a spectacular fireworks display over the Arno River visible from Piazzale Michelangelo. This public holiday features religious processions, the Calcio Storico finals (see above), and special masses at the Baptistery dedicated to San Giovanni. The day represents Florentine civic pride and religious devotion combined. Historic flag-throwing demonstrations by sbandieratori in Renaissance costume take place in Piazza della Signoria, while artisan markets line the streets. The evening's main event is the fireworks extravaganza at 22:00, when thousands gather along the riverbanks and Piazzale Michelangelo to watch pyrotechnics illuminate Florence's skyline. The show lasts about 40 minutes with synchronized fireworks launched from multiple points, reflecting spectacularly in the Arno. Restaurants and bars offer special San Giovanni menus. The atmosphere is festive but respectful, combining ancient religious tradition with modern celebration. This is Florence's most important holiday, when locals and tourists unite in appreciation of the city's patron and protector.",
    timing: 'All day, fireworks at 22:00',
    admission: 'Free (fireworks public)',
  },
  {
    name: 'Festa della Rificolona',
    month: 'September 7',
    location: 'City-wide, culminating at Piazza Santissima Annunziata',
    description: "The Festa della Rificolona is a charming lantern festival dating to medieval times when farmers walked to Florence for the Nativity of the Virgin Mary celebrations carrying paper lanterns. Today, on September 7th eve, children parade through streets carrying colorful paper lanterns shaped like boats, stars, and traditional designs while adults sing traditional folk songs. The main procession winds from Piazza Santa Felicita across Ponte Vecchio to Piazza Santissima Annunziata, creating a magical river of bobbing lights through Florence's medieval streets. The festival's name \"rificolona\" derives from the raggedy clothes worn by peasant women in historical celebrations. Street vendors sell traditional pastries and fair food, while artisans demonstrate lantern-making techniques. The atmosphere is wholesome family fun, distinctly different from Florence's more intense events. Fireworks from Piazzale Michelangelo at night cap the festivities. This lesser-known festival offers authentic local culture without overwhelming tourist crowds. Anyone can participate - buy a paper lantern from street vendors and join the procession. The festival celebrates Florence's agricultural heritage and community spirit.",
    timing: 'Evening, procession starts around 20:00',
    admission: 'Free',
  },
  {
    name: 'Biennale dell\'Antiquariato',
    month: 'September (odd-numbered years)',
    location: 'Palazzo Corsini',
    description: "The Biennale Internazionale dell'Antiquariato is Italy's most prestigious antiques fair, attracting elite dealers, collectors, and museums from around the globe every two years. Established in 1959, this invitation-only event transforms the magnificent Palazzo Corsini into a showcase of exceptional antiquities, fine art, furniture, jewelry, and decorative objects spanning centuries. Approximately 70 carefully vetted exhibitors present museum-quality pieces ranging from ancient Roman artifacts to Renaissance paintings, Baroque furniture, and Art Nouveau jewelry. Each item is authenticated by experts, making this a serious marketplace for collectors willing to invest hundreds of thousands of euros. Beyond commerce, the Biennale features scholarly conferences, expert-led tours, and special exhibitions exploring specific periods or themes in antique arts. The event attracts international auction houses like Sotheby's and Christie's, private collectors, and museum curators seeking rare acquisitions. For those who can't afford purchases, the fair offers a unique opportunity to see extraordinary objects rarely displayed publicly. The palazzo setting enhances the experience - Renaissance frescoes provide backdrop for period furniture and art. Admission fees are substantial, reflecting the exclusivity.",
    timing: '10 days in late September, typically 10:30-20:00',
    admission: '€15-25 entry fee',
  },
  {
    name: 'Florence Marathon',
    month: 'November (last Sunday)',
    location: 'Starts and finishes at Piazzale Michelangelo',
    description: "The Florence Marathon offers runners a unique opportunity to race through one of the world's most beautiful cities, with a course passing nearly every major Renaissance landmark. Established in 1984, this international event attracts over 10,000 runners annually from 70+ countries. The 42.195 km route begins at Piazzale Michelangelo with panoramic views, descends to the historic center passing the Duomo, Piazza della Signoria, Ponte Vecchio, and Palazzo Pitti, then winds through the Oltrarno neighborhood and along the Arno River before climbing back to finish where it started. Unlike flat urban marathons, Florence's course challenges runners with its hills, cobblestone streets, and elevation changes, but rewards with unparalleled scenery. Spectators line the entire route, creating an enthusiastic atmosphere with live music performances at key points. The day also features a 10K run and charity races. Runners receive a finisher's medal featuring Michelangelo's David and the coveted post-race pasta party. The event shuts down much of the historic center, creating a rare opportunity to run freely through streets normally packed with traffic and tourists. Registration opens months in advance.",
    timing: 'Start at 10:00 AM',
    admission: 'Registration required (€60-80), spectators free',
  },
  {
    name: 'Christmas Markets & Nativity Scenes',
    month: 'December (entire month)',
    location: 'Piazza Santa Croce & various locations',
    description: "Florence's Christmas season transforms the city into a festive wonderland with traditional markets, elaborate nativity scenes (presepi), and holiday decorations throughout December. The main Christmas Market in Piazza Santa Croce features wooden chalets selling artisan crafts, ornaments, local food specialties, and gift items, creating a German-style Weihnachtsmarkt atmosphere with Italian flair. Vendors offer handmade ceramics, leather goods, textiles, and Christmas decorations alongside mulled wine (vin brulé), roasted chestnuts, and traditional Tuscan sweets. Churches across Florence display intricate nativity scenes ranging from traditional manger settings to elaborate artistic interpretations. The Duomo, Santa Maria Novella, and Santo Spirito feature particularly beautiful presepi. Shops on Via de' Tornabuoni and Via Roma install spectacular holiday window displays and light installations. The city's Christmas tree in Piazza del Duomo becomes a gathering point for caroling and celebrations. New Year's Eve brings massive crowds to Piazza Michelangelo for fireworks and Piazza della Signoria for concerts. Throughout December, churches host Christmas concerts featuring Gregorian chants, sacred music, and Renaissance compositions in atmospheric candlelit settings.",
    timing: 'All December, markets typically 10:00-20:00',
    admission: 'Free entry (purchases separate)',
  },
  {
    name: 'Festa dell\'Unità d\'Italia',
    month: 'March 17',
    location: 'Piazza della Repubblica',
    description: "Italy's National Unity Day commemorates March 17, 1861, when the Kingdom of Italy was officially proclaimed, unifying the peninsula under one nation. Florence, which served as Italy's capital from 1865-1871, celebrates with special significance. The day features flag-raising ceremonies, military parades with the Italian Army and police forces in full dress uniform, and speeches by local officials honoring Italy's founding fathers like Garibaldi, Cavour, and Mazzini. The Tricolore (Italian flag) appears everywhere - on balconies, in shop windows, and worn by citizens. Piazza della Repubblica hosts concerts featuring patriotic music and Italian folk songs. Schools organize special programs teaching children about the Risorgimento and Italy's journey to independence. Museums offer free entry, including Palazzo Vecchio where you can visit the room where Florence briefly governed Italy. The atmosphere is more reflective than festive, with Florentines taking pride in their role in Italian history. Many businesses close for the holiday. In the evening, Piazzale Michelangelo sometimes hosts a flag-lowering ceremony with the Italian national anthem echoing across the city.",
    timing: 'Various events throughout day, ceremonies typically morning',
    admission: 'Free',
  },
  {
    name: 'Pitti Uomo Fashion Week',
    month: 'January & June',
    location: 'Fortezza da Basso & Pitti Uomo venues',
    description: "Pitti Immagine Uomo is the world's most important menswear trade show, transforming Florence into global fashion capital twice yearly. This invitation-only industry event attracts over 10,000 buyers, journalists, designers, and fashion insiders from 100+ countries. Held at Fortezza da Basso, the massive Renaissance fortress near Guido Monaco apartment, Pitti showcases next season's collections from established luxury brands and emerging designers. The four-day event features runway shows, presentations, networking events, and parties across Florence's most exclusive venues. While the main exhibition halls require trade credentials, the atmosphere spills into the city with well-dressed fashionistas filling cafés, restaurants, and boutiques. The Piazzale delle Cascine becomes an outdoor stage for guerrilla fashion shows and brand activations. Luxury brands host private parties at historic palazzi and villas. The event coincides with Florence's other fashion fairs (Pitti Bimbo for children's wear, Pitti Filati for yarns), creating a comprehensive industry gathering. For fashion enthusiasts unable to access the trade show, street style watching around Fortezza da Basso offers incredible people-watching - this is where trends are born.",
    timing: '4 days, typically 9:00-19:00',
    admission: 'Trade credentials required (public cannot enter)',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      <header 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1691319683514-7f0ec295151f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="text-white py-16"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/" style={{ fontFamily: 'Georgia, serif' }} className="text-white hover:opacity-80 transition block mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-normal text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Florence Events Calendar
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Annual festivals, celebrations & cultural events
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Intro */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Florence's calendar is packed with centuries-old traditions, world-class cultural events, and unique celebrations 
            that bring the city's Renaissance spirit to life. From medieval football matches to Easter explosions, 
            these events offer authentic glimpses into Florentine culture.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed">
            Many events require advance planning and tickets. Check official websites for current year dates and booking information.
          </p>
        </div>

        {/* Events by Month */}
        <div className="space-y-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h2 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal">
                  {event.name}
                </h2>
                <span style={{ backgroundColor: '#ae9a64', fontFamily: 'Georgia, serif' }} className="px-4 py-2 rounded text-white text-sm">
                  {event.month}
                </span>
              </div>

              <div className="mb-4 space-y-2" style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                <p className="text-base">
                  <strong style={{ color: '#ae9a64' }}>Location:</strong> {event.location}
                </p>
                <p className="text-base">
                  <strong style={{ color: '#ae9a64' }}>Timing:</strong> {event.timing}
                </p>
                <p className="text-base">
                  <strong style={{ color: '#ae9a64' }}>Admission:</strong> {event.admission}
                </p>
              </div>

              <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded shadow-sm p-8 mt-12">
          <h3 style={{ color: '#ae9a64', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Experience Authentic Florence
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg leading-relaxed">
            Guido Monaco apartment puts you in the heart of Florence's cultural calendar. 
            Book your stay to coincide with these unique events and experience the city like a local.
          </p>
          <a 
            href="https://www.homesinflorence.it/guido-monaco-florence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#ae9a64', fontFamily: 'Georgia, serif' }}
            className="inline-block text-white px-8 py-3 rounded font-normal hover:opacity-90 transition"
          >
            Check Availability & Book
          </a>
        </div>
      </main>

      <footer style={{ backgroundColor: '#333' }} className="text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p style={{ fontFamily: 'Georgia, serif' }} className="opacity-90">
            © 2026 Guido Monaco Florence
          </p>
          <p className="mt-3" style={{ fontFamily: 'Georgia, serif' }}>
            <a 
              href="https://www.instagram.com/guidomonacobnb" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#ae9a64' }}
              className="hover:opacity-75"
            >
              Follow us on Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
