import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florence Attractions Guide - Top Things to See & Do | Guido Monaco',
  description: 'Complete guide to Florence attractions from Guido Monaco apartment. Museums, churches, markets, and hidden gems - all with distances, opening hours, and insider tips.',
  keywords: 'Florence attractions, things to do Florence, Florence museums, Uffizi, Duomo Florence, Ponte Vecchio, Florence sightseeing, what to see Florence',
}

const attractions = [
  {
    category: 'Museums & Galleries',
    places: [
      {
        name: 'Uffizi Gallery',
        distance: '1.9 km',
        walkTime: '22 min',
        description: "The Uffizi Gallery stands as one of the world's most celebrated art museums, housing an unparalleled collection of Renaissance masterpieces. Built in the 16th century by Giorgio Vasari for Cosimo I de' Medici, the U-shaped palazzo was originally designed as offices (hence \"uffizi\") for Florentine magistrates. Today, it showcases the greatest works from the Medici family's art collection, including Botticelli's ethereal \"Birth of Venus\" and \"Primavera,\" Leonardo da Vinci's \"Annunciation,\" Michelangelo's \"Doni Tondo,\" and Caravaggio's dramatic \"Medusa.\" The gallery's 45 rooms trace the evolution of Italian art from the 13th to 18th centuries, with halls dedicated to Giotto, Raphael, Titian, and countless other masters. Walking through its long corridors adorned with ancient sculptures and frescoed ceilings is like stepping through art history itself. The third-floor terrace café offers stunning views of the Arno River and Palazzo Vecchio, providing a perfect respite during your visit. With over 1,500 artworks on display and rooms dedicated to specific periods and schools, art enthusiasts can easily spend an entire day here without seeing everything.",
        hours: 'Tue-Sun 8:15-18:30 (closed Mon)',
        price: '€20-25 (book ahead)',
        tip: `Book timed entry 2-3 weeks in advance online. Go early morning (8:15 opening) or late afternoon (after 16:00) to avoid peak crowds. The museum can get extremely crowded mid-day, especially in summer. Consider buying the Uffizi + Pitti Palace combined ticket for better value if you plan to visit both.`,
      },
      {
        name: 'Galleria dell\'Accademia',
        distance: '1.4 km',
        walkTime: '17 min',
        description: "Home to Michelangelo's iconic statue of David, the Galleria dell'Accademia is a pilgrimage site for art lovers worldwide. Founded in 1784 as Florence's first official art academy, the museum was purpose-built to house the city's most important sculptures and paintings for students to study. The centerpiece is undeniably David, Michelangelo's 5.17-meter marble masterpiece created between 1501-1504 when the artist was just 26 years old. Standing before this Renaissance icon, you'll understand why it's considered the perfect male form - every muscle, vein, and expression carved with supernatural precision. The gallery also showcases Michelangelo's four unfinished \"Prisoners\" or \"Slaves,\" which offer fascinating insight into his sculpting technique as figures appear to emerge from raw marble. Beyond Michelangelo, the museum features an impressive collection of Florentine paintings from the 13th-16th centuries, antique musical instruments including violins crafted by Stradivarius, and the original plaster model for Giambologna's \"Rape of the Sabine Women.\" The Hall of the Colossus displays a massive plaster model and works by Michelangelo's contemporaries, providing context for the Renaissance artistic revolution.",
        hours: 'Tue-Sun 8:15-18:50 (closed Mon)',
        price: '€12-16',
        tip: `Pre-book tickets online to skip the 2+ hour queue - this is essential, not optional. The museum is relatively small, so 1-1.5 hours is sufficient for most visitors. Go early morning right at opening or late afternoon for the shortest waits. Photography is allowed but no flash. Consider hiring an audio guide or joining a guided tour to fully appreciate the artistic and historical context.`,
      },
      {
        name: 'Palazzo Pitti',
        distance: '2.2 km',
        walkTime: '26 min',
        description: "Palazzo Pitti is Florence's largest and most impressive palace, originally built in 1458 for banker Luca Pitti but later acquired by the Medici family who transformed it into their primary residence. This massive Renaissance palace now houses five separate museums within its walls, making it one of Italy's most important cultural complexes. The Palatine Gallery displays over 500 masterpieces in lavishly decorated rooms, including works by Raphael, Titian, Rubens, and Caravaggio, hung salon-style across walls covered in rich fabrics. The Royal Apartments showcase the opulent living quarters of the Medici grand dukes and later the Italian royal family, with original furnishings, tapestries, and decorative arts. The Modern Art Gallery features Italian paintings from the 18th-20th centuries, while the Treasury Museum displays precious gems, jewelry, and exotic objects collected by the Medicis. Don't miss the Costume Gallery, one of the world's most important fashion museums, with historic garments and accessories spanning four centuries. Behind the palace, the magnificent Boboli Gardens offer 45,000 square meters of Renaissance landscaping with fountains, grottos, and spectacular city views.",
        hours: 'Tue-Sun 8:15-18:30',
        price: '€16 (palace + gardens)',
        tip: `Combine your visit with Boboli Gardens using the same ticket. The palace is much less crowded than Uffizi or Accademia, making it perfect for afternoon visits. Allow 2-3 hours to see the main galleries, or a full half-day if including the gardens. Buy the combined ticket for all five museums if you have time, as the individual galleries are fascinating.`,
      },
    ],
  },
  {
    category: 'Churches & Religious Sites',
    places: [
      {
        name: 'Duomo (Cathedral of Santa Maria del Fiore)',
        distance: '1.4 km',
        walkTime: '16 min',
        description: "Florence's Cathedral, known simply as the Duomo, dominates the city skyline with Brunelleschi's revolutionary dome, the largest brick dome ever constructed. Begun in 1296 and taking 140 years to complete, this Gothic masterpiece is the third-largest church in Italy, measuring 153 meters in length. The iconic octagonal dome, completed in 1436, was an engineering marvel that solved the seemingly impossible challenge of spanning the massive 45-meter opening without traditional scaffolding. Climbing the 463 steps to the dome's top rewards you with breathtaking 360-degree views of Florence and reveals Vasari's \"Last Judgment\" frescoes up close. The cathedral's exterior is clad in pink, white, and green marble in intricate geometric patterns, while the interior is surprisingly austere with terracotta floors and simple white walls that emphasize the building's grand proportions. The nearby Baptistery, one of Florence's oldest buildings, features Lorenzo Ghiberti's famous bronze \"Gates of Paradise\" doors (copies - originals in museum). Giotto's Campanile (bell tower) offers an alternative climb with 414 steps and equally stunning views. The Opera del Duomo Museum houses original artworks from the cathedral complex, including Michelangelo's unfinished \"Pietà.\"",
        hours: 'Cathedral: Mon-Sat 10:00-17:00 | Dome: Mon-Fri 8:30-19:00',
        price: 'Free entry (cathedral) | €18-30 (dome climb)',
        tip: `Book dome climb tickets in advance online - they sell out quickly. Strict dress code enforced: covered shoulders and knees, no shorts or tank tops. Best time is early morning or late afternoon. The dome climb is narrow and steep, not suitable for those with mobility issues or claustrophobia. Consider the combined ticket for cathedral, dome, baptistery, bell tower, and museum.`,
      },
      {
        name: 'Basilica di Santa Maria Novella',
        distance: '800 m',
        walkTime: '10 min',
        description: "Santa Maria Novella, Florence's principal Dominican church, is a masterpiece of Gothic and Renaissance architecture just steps from the main train station. Founded in 1279, its striking green and white marble façade was completed by Leon Battista Alberti in 1470, creating one of the most beautiful church exteriors in Italy with perfect Renaissance proportions and mathematical harmonies. Inside, the church is a treasure trove of Renaissance art, including Masaccio's revolutionary \"Holy Trinity\" fresco, which was the first painting to use linear perspective correctly - a breakthrough that changed art history forever. The church houses masterpieces by Giotto, Brunelleschi's wooden crucifix, Ghirlandaio's frescoes in the Tornabuoni Chapel, and Filippino Lippi's Strozzi Chapel decorations. The Spanish Chapel, part of the monastery complex, features stunning 14th-century frescoes by Andrea di Bonaiuto. The Old Sacristy preserves a crucifix by Giotto, while the cloisters provide a peaceful retreat from the city bustle. The church's pharmacy, Officina Profumo-Farmaceutica di Santa Maria Novella, has been operating since 1612 and sells perfumes, soaps, and herbal remedies using centuries-old formulas - worth a visit for unique Florentine gifts.",
        hours: 'Mon-Thu 9:00-17:30, Fri 11:00-17:30',
        price: '€7.50',
        tip: `This is the closest major attraction to Guido Monaco apartment - perfect for your first or last day. Visit early morning to appreciate the art in natural light. The church is still active, so be respectful during services. Don't miss the cloisters and Spanish Chapel included in your ticket. The attached pharmacy makes an excellent stop for authentic Florentine souvenirs.`,
      },
      {
        name: 'Basilica di Santa Croce',
        distance: '2.3 km',
        walkTime: '27 min',
        description: "The Basilica of Santa Croce, Florence's largest Franciscan church, serves as Italy's Westminster Abbey - the final resting place of over 300 notable Italians who shaped world history. Built in 1294 with a striking Gothic façade added in the 19th century, this massive church contains the tombs of Michelangelo, Galileo Galilei, Machiavelli, composer Rossini, and many other Italian luminaries. Walking through feels like touring Italy's hall of fame. The church is also an art museum, with frescoes by Giotto in the Bardi and Peruzzi chapels depicting scenes from the lives of St. Francis and John the Baptist - works that marked a turning point from Byzantine to Renaissance art. Donatello's Annunciation and his wooden crucifix add to the artistic treasures. The Pazzi Chapel, designed by Brunelleschi and considered one of the finest examples of early Renaissance architecture, is accessible through the cloisters. The leather school attached to the church offers demonstrations of traditional Florentine leather crafting, and visitors can purchase high-quality handmade goods directly from the artisans. The beautiful Piazza Santa Croce outside hosts markets, festivals, and the historic Calcio Storico football matches in traditional costume during summer.",
        hours: 'Mon-Sat 9:30-17:30, Sun 14:00-17:30',
        price: '€8',
        tip: `Arrive when it opens to avoid tour groups. Spend time in Piazza Santa Croce afterward - it's one of Florence's liveliest squares with excellent cafés for aperitivo. The leather school visit is included and fascinating. Best light for photography is late morning. Consider combining your visit with a walk through the Santa Croce neighborhood, one of Florence's most authentic areas.`,
      },
    ],
  },
  {
    category: 'Historic Landmarks',
    places: [
      {
        name: 'Ponte Vecchio',
        distance: '1.8 km',
        walkTime: '21 min',
        description: "Ponte Vecchio, literally \"Old Bridge,\" is Florence's most iconic landmark and Europe's oldest stone arch bridge, dating back to 1345. This medieval bridge is unique for the shops built along its sides, a tradition that began in the 13th century when butchers occupied the spaces. In 1593, Grand Duke Ferdinando I ordered the butchers replaced with goldsmiths and jewelers to reduce the unpleasant smells, establishing a tradition that continues today. The bridge's distinctive appearance comes from these three-story shops and houses overhanging the Arno River, connected by the Vasari Corridor running above - a secret elevated passageway commissioned by Cosimo I de' Medici in 1565 to move safely between Palazzo Vecchio and Palazzo Pitti. The bridge was the only one in Florence not destroyed by retreating German forces in World War II, allegedly spared on Hitler's direct orders. The central span features a bust of famous goldsmith Benvenuto Cellini and offers stunning views up and down the Arno. Today's jewelry shops display exquisite gold creations, though prices cater to tourists. The bridge is particularly magical at sunset when golden light bathes the buildings and reflects off the river. Street musicians often perform here, adding to the romantic atmosphere that has made Ponte Vecchio a favorite spot for marriage proposals.",
        hours: 'Open 24/7 (shops vary)',
        price: 'Free',
        tip: `Visit at sunset for golden hour photos or early morning (before 9am) to experience it without crowds. The jewelry shops are expensive, but window shopping is free and fascinating. For the best photos, head to Ponte Santa Trinita just upstream for the classic Ponte Vecchio view. Sunset from this vantage point is spectacular. Padlocks on the bridge's fences are actually prohibited and regularly removed.`,
      },
      {
        name: 'Piazza della Signoria',
        distance: '1.8 km',
        walkTime: '21 min',
        description: "Piazza della Signoria has been the political heart of Florence since the Middle Ages, serving as an outdoor sculpture gallery and witness to centuries of dramatic history. The L-shaped square is dominated by the crenellated Palazzo Vecchio, Florence's imposing town hall since 1302, with its 94-meter tower visible across the city. The square itself is an open-air museum featuring sculptures including a copy of Michelangelo's David (the original stood here until 1873), Ammannati's Fountain of Neptune, Giambologna's equestrian statue of Cosimo I, and Cellini's bronze Perseus with Medusa's head under the Loggia dei Lanzi. The Loggia, a 14th-century open-air sculpture gallery, also displays Roman statues and Giambologna's \"Rape of the Sabine Women.\" This square witnessed some of Florence's most dramatic moments: Savonarola burned \"vanities\" here in his Bonfire of the Vanities, then was himself burned at the stake on the same spot in 1498 (marked by a plaque). Political demonstrations, celebrations, and executions all took place here throughout history. Today it remains the civic and social center of Florence, filled with tourists, street performers, and outdoor café tables. The adjacent Uffizi Gallery entrance and nearby Palazzo Vecchio tours make this essential stop on any Florence itinerary.",
        hours: 'Open 24/7',
        price: 'Free (square) | €12.50 (Palazzo Vecchio)',
        tip: `Free to explore and perfect for people-watching from outdoor café tables, though prices are touristy. Best visited early morning or evening when crowds thin. The Palazzo Vecchio is worth touring for its lavish Renaissance rooms and secret passages. Climb the tower for stunning views over the square and city. Watch for street performers and artists, but politely decline aggressive vendors.`,
      },
      {
        name: 'Piazzale Michelangelo',
        distance: '3.2 km',
        walkTime: '38 min',
        description: "Piazzale Michelangelo offers Florence's most spectacular panoramic vista, perched on a hill south of the Arno River with sweeping views encompassing the entire historic center. Designed in 1869 by architect Giuseppe Poggi during Florence's brief period as Italy's capital, this terrace was created to showcase bronze copies of Michelangelo's famous works, including a replica of David as the centerpiece. The 180-degree view captures all of Florence's iconic landmarks in one breathtaking sweep: the Duomo's massive dome rising above the red-tiled rooftops, Giotto's Campanile, Palazzo Vecchio's tower, the Arno River with its bridges including Ponte Vecchio, and the hills of Chianti stretching to the horizon. This is Florence's most popular sunset spot, where locals and tourists gather with wine and snacks to watch the golden hour transform the city into a sea of warm orange light. The bronze David statue provides a perfect foreground for photos. At night, the illuminated monuments create an equally magical scene. Near the piazza, San Miniato al Monte, one of Florence's finest Romanesque churches, is worth visiting for its beautiful marble façade and mosaic. The climb up is steep but manageable, or take bus #12 or #13 from the center.",
        hours: 'Open 24/7',
        price: 'Free',
        tip: `Walk up for sunset or take bus #12/#13 if you prefer not to climb. Arrive 30-45 minutes before sunset to secure a good spot - it gets very crowded. Bring wine, cheese, and snacks for a picnic (many locals do this). The walk down is easier than up, and the winding path through San Niccolò neighborhood is charming. Visit San Miniato al Monte church just above the piazzale - it's less crowded and equally beautiful. Morning visits offer clearer light for photography and virtually no crowds.`,
      },
    ],
  },
  {
    category: 'Markets & Food',
    places: [
      {
        name: 'Mercato Centrale',
        distance: '700 m',
        walkTime: '9 min',
        description: "Mercato Centrale is Florence's vibrant two-story food market and culinary destination, housed in an elegant cast-iron structure built in 1874. The ground floor is a traditional Italian market where locals shop for fresh produce, meats, cheeses, pasta, olive oil, and specialty ingredients - a feast for the senses with colorful displays, aromatic herbs, and bustling vendors. This is real Florence: butchers preparing fresh cuts, fishmongers displaying the day's catch, and cheese vendors offering tastings of pecorino and parmigiano. The upper floor, opened in 2014, transformed into a modern gourmet food court featuring Florence's best street food vendors, artisan pasta makers, pizza ovens, fresh seafood counters, gelato, pastries, and wine bars. Each stall specializes in one thing done exceptionally well - from lampredotto (traditional Florentine tripe sandwich) to fresh pasta tossed in wheels of Parmigiano-Reggiano. The casual atmosphere with communal seating makes it perfect for lunch or dinner, offering authentic Florentine cuisine at reasonable prices compared to tourist restaurants. The market stays open late (until midnight), making it ideal for evening dining. Cooking classes are available where chefs teach traditional Tuscan recipes using ingredients purchased from the market below. This is culinary Florence at its most authentic and delicious.",
        hours: 'Daily 8:00-24:00',
        price: 'Free entry',
        tip: `The upstairs food court is perfect for lunch - authentic Italian street food at reasonable prices (€8-15 per meal). Go midday for the full bustling market atmosphere. Try lampredotto if you're adventurous, or stick with fresh pasta, pizza, and ribollita soup. The ground floor market closes earlier (around 14:00) so shop for ingredients in the morning. Great place to buy olive oil, balsamic vinegar, and truffle products to take home.`,
      },
      {
        name: 'San Lorenzo Market',
        distance: '900 m',
        walkTime: '11 min',
        description: "San Lorenzo Market sprawls through the streets surrounding the Basilica of San Lorenzo, creating Florence's largest outdoor market and a shopper's paradise for leather goods and souvenirs. The market has two distinct sections: the outdoor stalls filling the surrounding streets sell leather jackets, bags, belts, wallets, scarves, and typical tourist souvenirs, while the covered section houses food vendors similar to Mercato Centrale. The leather market is famous but requires savvy shopping - quality varies dramatically from genuine Italian leather to imported knock-offs. The best stalls offer beautiful handcrafted items, but expect to haggle. This is where Florentines traditionally bargain, so don't pay the first price quoted. The market atmosphere is quintessentially Italian: vendors calling out, tourists browsing, locals shopping for ingredients, and the scent of leather mingling with coffee and pizza. The nearby Basilica of San Lorenzo, often overlooked by tourists rushing through the market, contains Michelangelo's stunning Laurentian Library and the Medici Chapels with tombs designed by Michelangelo. The market has operated here since the 1800s, making it part of Florence's commercial tradition. Best time to visit is morning when vendors are setting up and less aggressive, though the full bustling experience happens midday.",
        hours: 'Daily 9:00-19:00',
        price: 'Free to browse',
        tip: `Haggle! Start at 50-60% of asking price and negotiate. Quality varies greatly - inspect leather goods carefully, check stitching and zippers. Many items are not Italian-made despite claims. Best deals are cash payments. Avoid the pushiest vendors; the best quality is often at quieter stalls. For genuine Florentine leather, look for shops outside the market in the artisan quarter. Early morning (before 10am) means fewer crowds and less aggressive selling.`,
      },
      {
        name: 'Sant\'Ambrogio Market',
        distance: '2.1 km',
        walkTime: '25 min',
        description: "Sant'Ambrogio Market is Florence's most authentic neighborhood market, frequented primarily by locals rather than tourists. Located in the lively Sant'Ambrogio district east of the Duomo, this covered market operates Tuesday through Saturday mornings, offering a genuine slice of Florentine daily life. Inside the 19th-century iron structure, vendors sell the freshest seasonal produce, artisan cheeses, cured meats, fresh pasta, flowers, and household goods at prices significantly lower than tourist areas. The market's surrounding square hosts additional outdoor stalls with clothing, plants, and more food vendors. What makes Sant'Ambrogio special is its authentic atmosphere - you'll hear more Italian than English, see grandmothers haggling over vegetables, and witness the morning ritual of Florentines shopping for their daily ingredients. The market's culinary highlight is Da Rocco, a legendary food stall serving porchetta sandwiches that locals queue for - the slow-roasted pork is incredibly flavorful and a Florence insider secret. Several small trattorie around the market serve traditional Tuscan lunches to market workers and locals. The nearby Piazza Sant'Ambrogio, with its 13th-century church, provides shaded benches perfect for enjoying your market purchases. Visiting Sant'Ambrogio feels like discovering the real Florence that tourists rarely see.",
        hours: 'Mon-Sat 7:00-14:00',
        price: 'Free',
        tip: `Go morning for fresh produce and the authentic market experience. Lines at Da Rocco start forming by 11:30am for lunch - absolutely worth the wait for their famous porchetta sandwich. This is where you'll find the best prices and quality if you're cooking. The market empties by 14:00. Perfect for photographers seeking authentic Florence scenes. Combine with exploring the Sant'Ambrogio neighborhood, one of the city's most genuine areas.`,
      },
    ],
  },
  {
    category: 'Parks & Gardens',
    places: [
      {
        name: 'Boboli Gardens',
        distance: '2.3 km',
        walkTime: '27 min',
        description: "The Boboli Gardens represent one of Europe's finest examples of Italian Renaissance garden design, sprawling across 11 acres behind Palazzo Pitti with terraced landscapes, sculptures, fountains, and grottoes. Created by the Medici family starting in 1549, these gardens influenced garden design across European courts and established principles still used today. The formal Italian garden style on display here - geometric patterns, manicured hedges, statuary, and dramatic vistas - became the template for royal gardens throughout Europe. Walking the gardens takes you through different historical periods, from the original Renaissance sections to Baroque additions and 19th-century English-style areas. Major highlights include the Amphitheater, where the Medici staged elaborate performances; the Buontalenti Grotto with Giambologna's sculptures; the beautiful Island Pool with its central statue; and the Kaffeehaus offering panoramic city views. Over 400 ancient and Renaissance statues dot the grounds, along with Roman ruins. The highest point, the Porcelain Museum (Museo delle Porcellane), displays valuable ceramics collected by the Medici and Lorraine dynasties. In spring, the garden bursts with wisteria, roses, and iris; summer brings lush green shade under ancient oaks; autumn colors glow against the Tuscan sky. It's a masterclass in landscape architecture and a peaceful escape from Florence's crowded streets.",
        hours: 'Daily 8:15-18:30 (seasonal)',
        price: '€10 (or combined with Palazzo Pitti)',
        tip: `Great escape from city crowds - you can easily spend 2-3 hours here. Bring water and wear comfortable shoes as the gardens are large and hilly. Combined ticket with Palazzo Pitti offers best value. Best visiting times are early morning or late afternoon. Spring (April-May) is spectacular with blooming flowers. The views from the top are worth the climb. Several cafés inside for refreshments.`,
      },
      {
        name: 'Giardino Bardini',
        distance: '2.8 km',
        walkTime: '33 min',
        description: "Giardino Bardini is Florence's hidden gem garden, offering stunning panoramic views rivaling Piazzale Michelangelo but without the crowds. This 4-hectare garden on the hill behind Palazzo Pitti remained closed to the public for decades until restoration opened it in 2005. The gardens showcase three distinct styles: an Italian Renaissance formal garden with geometric parterres and box hedges; an English landscape garden with naturalistic plantings and winding paths; and an agricultural section with olive groves and fruit trees. The central axis creates a spectacular vista from the baroque staircase up through the wisteria tunnel to the Belvedere viewpoint overlooking Florence's entire historic center. In late April and early May, the wisteria tunnel (Corridoio del Glicine) blooms in an Instagram-famous cascade of purple flowers - one of Italy's most photographed garden features. The garden contains the stunning Villa Bardini, hosting rotating art exhibitions, and the Museo Pietro Annigoni displaying works by the 20th-century Florentine painter. Winding paths lead past camellias, hydrangeas, roses, and ancient oaks, with secluded benches offering contemplative views. The garden's slope provides dramatically layered views with Florence's monuments rising above garden terraces. A hidden tunnel connects Bardini Gardens directly to Boboli Gardens, allowing combined visits.",
        hours: 'Daily 10:00-19:00 (seasonal)',
        price: '€10',
        tip: `Visit in late April/May for wisteria in bloom - absolutely spectacular and much less crowded than Boboli. The panoramic views are incredible and you might have them almost to yourself. Combined ticket with Boboli Gardens available via the connecting tunnel. Bring your camera - every turn offers a postcard view. The Villa Bardini café has excellent coffee and aperitivo with views. This is Florence's best-kept secret for avoiding tourist hordes while experiencing Renaissance garden beauty.`,
      },
    ],
  },
  {
    category: 'Hidden Gems',
    places: [
      {
        name: 'Cappelle Medicee (Medici Chapels)',
        distance: '1.2 km',
        walkTime: '14 min',
        description: "The Medici Chapels represent one of Michelangelo's greatest architectural and sculptural achievements, yet remain surprisingly overlooked by tourists rushing to the Uffizi and Accademia. This mausoleum complex attached to San Lorenzo Basilica contains the tombs of the Medici family in two spectacular spaces. The New Sacristy, designed entirely by Michelangelo between 1520-1534, features his famous allegorical sculptures of Day, Night, Dawn, and Dusk reclining on the tombs of Lorenzo and Giuliano de' Medici - works that revolutionized sculpture with their psychological depth and dynamic poses. These four figures representing time's passage are among Michelangelo's most powerful creations, with \"Night\" particularly celebrated for its melancholic beauty. The Chapel of Princes (Cappella dei Principi), a Baroque masterpiece covered floor to ceiling in rare marbles, semi-precious stones, and intricate inlay work (pietra dura), creates an overwhelmingly opulent funeral chapel for Medici grand dukes. The octagonal room's dome, 59 meters high and covered in frescoes, rivals the Duomo in grandeur. The craftsmanship of the marble inlay is extraordinary - patterns so intricate they appear painted. The crypt below contains tombs of lesser-known Medici, including Cosimo the Elder. This concentrated dose of Renaissance genius deserves more attention than it receives.",
        hours: 'Mon-Sat 8:15-13:50',
        price: '€9',
        tip: `Often overlooked but spectacular - much quieter than Uffizi/Accademia. Michelangelo's sculptures here are just as masterful as David. Go in the morning for the best light illuminating the marble work. The Chapel of Princes' pietra dura inlay is mind-blowing up close - look for the incredible detail. Combined with nearby San Lorenzo church visit makes an excellent morning. No advance booking usually needed.`,
      },
      {
        name: 'Palazzo Strozzi',
        distance: '1.3 km',
        walkTime: '15 min',
        description: "Palazzo Strozzi is a quintessential Renaissance palace that has evolved into one of Italy's premier contemporary art exhibition venues, creating a fascinating dialogue between 15th-century architecture and 21st-century art. Built between 1489-1538 for wealthy banker Filippo Strozzi to rival the Medici palaces, this massive structure exemplifies Renaissance ideals of proportion, symmetry, and rusticated stonework. The building's perfect cubic design, with three stories of identical height, represents mathematical harmony translated into architecture. Today, the palace hosts world-class temporary exhibitions featuring international contemporary artists, major retrospectives, and innovative installations that transform the historic rooms and courtyard. Past exhibitions have featured Jeff Koons, Ai Weiwei, Marina Abramović, and Olafur Eliasson, drawing art enthusiasts from around the globe. The Renaissance courtyard, with its elegant arches and columns, provides a stunning contrast to modern art installations. The palace's Strozzina, an underground contemporary art space, hosts cutting-edge exhibitions and multimedia works. Thursday evening openings (until 23:00) feature special events, concerts, and aperitivo, creating a vibrant cultural scene. The palace also houses an excellent bookshop and café. Unlike traditional museums, Palazzo Strozzi's rotating exhibitions mean there's always something new to discover, making it worth checking the current show before visiting.",
        hours: 'Daily 10:00-20:00 (Thu until 23:00)',
        price: 'Varies by exhibition',
        tip: `Check their website for current exhibitions - often world-class contemporary art shows. Thursday evening openings until 23:00 are special with events and aperitivo. Less crowded than major museums. The palazzo itself is architectural perfection. The courtyard is free to visit and beautiful. Excellent bookshop for art books and unique gifts. Located in the heart of luxury shopping district.`,
      },
      {
        name: 'Fortezza da Basso',
        distance: '500 m',
        walkTime: '6 min',
        description: "Fortezza da Basso, an imposing 16th-century fortress built by Alessandro de' Medici in 1534, represents a lesser-known but significant piece of Florentine history. This pentagonal fortress was designed by Antonio da Sangallo the Younger as a defensive structure, but ironically, its primary purpose was intimidating Florence's own citizens rather than external enemies - Alessandro was an unpopular tyrant who needed protection from his subjects. The massive brick walls, star-shaped design, and strategic position near the old city gates made it militarily formidable. Throughout history, the fortress served various military purposes, housing garrisons and even serving as a POW camp during World War II. Today, it's been transformed into Florence's largest exhibition and convention center, hosting major trade fairs, fashion shows during Florence's Pitti Uomo events, art exhibitions, and cultural events. While you can't always access the interior (depends on events), the exterior perimeter makes for an excellent morning jog or walk along the historic fortifications. The surrounding park offers green space and benches - a local secret for peaceful relaxation. The fortress's massive scale and Renaissance military architecture provide fascinating contrast to Florence's artistic monuments. Its proximity to Guido Monaco apartment makes it an easy visit for architecture enthusiasts.",
        hours: 'Varies by event',
        price: 'Free (exterior)',
        tip: `Walk around the perimeter for morning jog or evening stroll - locals use it for exercise. Closest historic site to Guido Monaco apartment! Interior only accessible during events, but check the calendar for interesting exhibitions. The surrounding area has nice parks for picnics. Great example of Renaissance military architecture often overlooked by tourists. Free to admire from outside and photograph the impressive fortifications.`,
      },
    ],
  },
]

export default function AttractionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8f7ee' }}>
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
            Florence Attractions
          </h1>
          <p className="text-xl mt-3 text-white opacity-95" style={{ fontFamily: 'Georgia, serif' }}>
            Complete guide from Guido Monaco apartment
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Intro */}
        <div className="bg-white rounded shadow-sm p-8 mb-8">
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed mb-4">
            Florence is packed with world-class museums, historic churches, and Renaissance masterpieces. 
            From Guido Monaco apartment on Via Guido Monaco, you're within walking distance of everything.
          </p>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-lg leading-relaxed">
            All distances and walking times are calculated from the apartment. Prices and hours are current as of 2026 - 
            always check official websites before visiting.
          </p>
        </div>

        {/* Attractions by Category */}
        {attractions.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-3xl font-normal mb-6">
              {section.category}
            </h2>
            
            <div className="space-y-6">
              {section.places.map((place, placeIdx) => (
                <div key={placeIdx} className="bg-white rounded shadow-sm p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal">
                      {place.name}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold">
                        📍 {place.distance}
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }}>
                        🚶 {place.walkTime}
                      </span>
                    </div>
                  </div>
                  
                  <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-base leading-relaxed mb-4">
                    {place.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                        Hours:
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                        {place.hours}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                        Price:
                      </span>
                      <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                        {place.price}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ backgroundColor: '#e8f7ee' }} className="p-3 rounded">
                    <span style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="font-semibold text-sm">
                      💡 Insider Tip:
                    </span>
                    <span style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="text-sm ml-2">
                      {place.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-white rounded shadow-sm p-8 mt-12">
          <h3 style={{ color: '#4d9a6e', fontFamily: 'Georgia, serif' }} className="text-2xl font-normal mb-4">
            Perfect Base for Florence Exploration
          </h3>
          <p style={{ color: '#1d1d1b', fontFamily: 'Georgia, serif' }} className="mb-4 text-lg leading-relaxed">
            Guido Monaco apartment puts you 5 minutes from Santa Maria Novella station and within walking distance 
            of every major attraction. Modern comfort meets Renaissance art.
          </p>
          <a 
            href="https://www.homesinflorence.it/guido-monaco-florence"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#4d9a6e', fontFamily: 'Georgia, serif' }}
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
              style={{ color: '#4d9a6e' }}
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
