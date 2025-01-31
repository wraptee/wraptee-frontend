import ImageLinks from "./imageLink";

const productData = [
  // Coasters
  {
    sku: "cst001",
    name: "Festive Birthday Celebration Coaster (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.birthday1,
    description: "Celebrate every sip with our vibrant Birthday Coaster, designed to add a festive touch to your table. Perfect for all your special occasions and durable enough for everyday use.",
  },
  {
    sku: "cst002",
    name: "Ethenic Printed Coaster (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.coasterPrint1,
    description: "Add a touch of sophistication to your tableware with our Elegant Printed Coaster, featuring a stylish square design and premium quality to protect your surfaces in style.",
  },
  {
    sku: "cst003",
    name: "Artisan Designer Wooden Coaster (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.designerCoaster1,
    description: "Elevate your home décor with our Designer Coaster, crafted from high-quality wood and boasting intricate designs that blend functionality with artistry.",
  },
  {
    sku: "cst004",
    name: "Minimalistic Rich-Design Coaster (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.normalCoaster1,
    description: "Keep it classy and practical with our Simple Rich Coaster. Its minimalistic design and robust material make it a versatile addition to any home or office setup.",
  },
  {
    sku: "cst005",
    name: "Personalized Printed Coaster for Every Occasion (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.printCoaster1,
    description: "Create a personalized statement with our Customize Printed Coaster. Add your unique designs or messages to make every coffee break memorable.",
  },
  {
    sku: "cst006",
    name: "Rustic Elegant Wooden Coaster (6pc)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.woodenCoaster1,
    description: "Experience timeless elegance with our Elegant Wooden Coaster. Handcrafted from premium wood, it brings a natural, rustic charm to your table.",
  },
  {
    sku: "cst007",
    name: "Bright and Cheerful Yellow Shade Coaster (6pcs)",
    price: 499,
    category: "coaster",
    imageUrl: ImageLinks.yellowCoaster1,
    description: "Brighten up your dining experience with our Elegant Yellow Shade Coaster. Its cheerful color and sturdy design make it the perfect companion for your beverages.",
  },


  // Mugs
  {
    sku: "cup001",
    name: "Vintage Charm Chariot Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.chariot,
    description: "Sip in style with the Elegant Chariot Mug, featuring a sophisticated design inspired by vintage chariots. Perfect for your favorite hot beverages and a delightful addition to your mug collection.",
  },
  {
    sku: "cup002",
    name: "Cozy Comfort Couch Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.couch,
    description: "Relax and unwind with the Elegant Couch Mug. Its cozy design makes every sip feel like a comforting moment on your favorite couch.",
  },
  {
    sku: "cup003",
    name: "Captivating Eye Look Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.eye,
    description: "Start your mornings with a captivating gaze! The Eye Look Mug brings charm and mystery to your coffee rituals, making every sip unforgettable.",
  },
  {
    sku: "cup004",
    name: "Modern Flair Last Straw Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.lastStraw,
    description: "The Elegant Last Straw Mug is your go-to for a bold statement. With its modern design and vibrant aesthetics, it’s perfect for those who love standing out.",
  },
  {
    sku: "cup005",
    name: "Romantic Elegance Lover Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.lover,
    description: "Celebrate love with the Elegant Lover Mug. A perfect gift for your special someone, this mug embodies romance and warmth in every sip.",
  },
  {
    sku: "cup006",
    name: "Heartwarming Mom Custom Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.mom,
    description: "Show your love for Mom with a personal touch! The Elegant Customize Mom Mug allows you to add your unique design or message for a heartwarming gift.",
  },
  {
    sku: "cup007",
    name: "Timeless Simplicity Plain Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.plain,
    description: "Simplicity meets elegance with the Elegant Plain Mug. Its timeless design is perfect for any beverage, blending seamlessly into any kitchen aesthetic.",
  },
  {
    sku: "cup008",
    name: "Playful Quirks Prick Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.pricks,
    description: "Add a playful touch to your mornings with the Elegant Prick Mug. Featuring quirky designs, it’s a fun way to start your day.",
  },
  {
    sku: "cup0010",
    name: "Calm Serenity Relaxed Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.relaxation,
    description: "Take a break and enjoy serenity with the Elegant Relaxed Mug. Its calming design and ergonomic shape are perfect for unwinding with your favorite drink.",
  },
  {
    sku: "cup0011",
    name: "Bold Style Show Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.show,
    description: "Be the star of every coffee break with the Elegant Show Mug. Featuring a bold and eye-catching design, it’s the perfect conversation starter.",
  },
  {
    sku: "cup0012",
    name: "Shimmering Star Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.star,
    description: "Shine bright every morning with the Elegant Star Mug. Its stellar design and durable build make it a must-have for every stargazer.",
  },
  {
    sku: "cup0013",
    name: "Personalized Starry Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.starMug,
    description: "Make it yours with the Customize Star Mug! Personalize it with your favorite starry design for a truly unique coffee experience.",
  },
  {
    sku: "cup0014",
    name: "Empowering Strength Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.strength,
    description: "Embrace your inner strength with the Elegant Strength Mug. Its bold design inspires confidence and determination with every sip.",
  },
  {
    sku: "cup0015",
    name: "Statement Symbol Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.symbol,
    description: "Make a statement with the Elegant Symbol Mug. Its unique design symbolizes style and individuality, perfect for your daily caffeine fix.",
  },
  {
    sku: "cup0016",
    name: "Mystic Universe Tarot Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.tarrot1,
    description: "Discover the mysteries of the universe with the Elegant Tarot Mug. Perfect for tea, coffee, or a bit of morning fortune-telling.",
  },
  {
    sku: "cup0017",
    name: "Customizable Tarot Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.tarrot2,
    description: "Add a personal twist to your Tarot readings with the Elegant Customize Tarot Mug. Make it uniquely yours with custom designs.",
  },
  {
    sku: "cup0018",
    name: "Artistic Design Tarot Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.tarrot3,
    description: "Infuse your mornings with intrigue and elegance with the Designed Tarot Mug. Its intricate patterns bring a touch of magic to every sip.",
  },
  {
    sku: "cup0019",
    name: "Mystical Tarot Printed Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.tarrot4,
    description: "Start your day with a mystical vibe! The Elegant Tarot Printed Mug features stunning designs inspired by Tarot, perfect for the spiritually inclined.",
  },
  {
    sku: "cup0020",
    name: "Custom Mystical Tarot Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.tarrot5,
    description: "Bring your personal style to the table with the Elegant Tarot Customize Mug. Perfect for custom designs with a mystical flair.",
  },
  {
    sku: "cup0021",
    name: "Mindful Yoga Custom Mug",
    price: 599,
    category: "cup",
    imageUrl: ImageLinks.yoga,
    description: "Embrace tranquility with the Elegant Customize Yoga Mug. Personalize it to reflect your yoga journey and enjoy a mindful moment with every sip.",
  },


  // Sipper
  {
    sku: "sipper001",
    name: "Sleek Personalized Black Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.blackSipper,
    description: "Stay refreshed in style with the Customize Black Sipper. Its sleek black design and customizable surface make it perfect for personalizing with your name or logo. Durable, lightweight, and ideal for daily hydration on the go.",
  },
  {
    sku: "sipper002",
    name: "Modern Elegance Round Black Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.blackSipper2,
    description: "The Elegant Round Black Sipper combines premium craftsmanship with a modern design. Perfect for gym-goers, office use, or outdoor adventures, this sipper keeps your beverages fresh and your style on point.",
  },
  {
    sku: "sipper003",
    name: "Bold Black Hydration Companion Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.sipperBlack,
    description: "Upgrade your hydration game with the Elegant Black Sipper. Its bold black finish and ergonomic design ensure a comfortable grip, while its sturdy build keeps you hydrated in any environment.",
  },
  {
    sku: "sipper004",
    name: "Vibrant Custom Blue Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.sipperBlue,
    description: "Brighten your day with the Customize Blue Sipper. Its vibrant blue color and personalization options make it a standout accessory for work, workouts, or leisure. Built to last and designed for convenience.",
  },
  {
    sku: "sipper005",
    name: "Striking Red Personalized Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.sipperRed,
    description: "Add a bold touch to your daily routine with the Customize Red Sipper. Featuring a striking red hue and customizable design, it’s perfect for showcasing your unique style while staying hydrated.",
  },
  {
    sku: "sipper006",
    name: "Sleek Silver Elegance Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.sipperSilver,
    description: "Elegance meets functionality in the Customize Silver Sipper. Its sleek metallic finish, lightweight design, and personalization options make it a must-have for professionals and fitness enthusiasts alike.",
  },
  {
    sku: "sipper007",
    name: "Minimalist White Personalized Sipper",
    price: 399,
    category: "sipper",
    imageUrl: ImageLinks.sipperWhite,
    description: "Keep it classic with the Customize White Sipper. Perfect for minimalists, its clean white finish pairs beautifully with custom prints, making it a versatile and stylish choice for all occasions.",
  },

  // Tshirts

  {
    sku: "tshirt001",
    name: "Classic White Customizable T-shirt",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.white,
    description: "Create your own style with the Customize White T-shirt. This classic white tee offers a clean canvas for personal designs, logos, or messages. Made with premium, breathable fabric for all-day comfort, it's perfect for casual outings or custom branding.",
  },
  {
    sku: "tshirt002",
    name: "Rich Dark Green Personalized T-shirt",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.darkGreen,
    description: "Stand out in the rich and earthy tones of the Customize Dark Green T-shirt. Ideal for personalization, this shirt combines a bold color with durable, soft material, making it a go-to choice for events, promotions, or everyday wear.",
  },
  {
    sku: "tshirt003",
    name: "Vibrant Green Customizable T-shirt",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.green,
    description: "Brighten your wardrobe with the Customize Green T-shirt. Its vibrant shade and customizable surface make it perfect for expressing your personality or promoting your brand. Lightweight and comfortable, it's designed for all-day versatility.",
  },
  {
    sku: "tshirt004",
    name: "Elegant Lavender Customizable T-shirt",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.lavender,
    description: "Embrace elegance with the Customize Lavender T-shirt. This soft, pastel-colored tee offers a subtle yet stylish look. Customize it with unique designs to create a standout piece for any casual or professional setting.",
  },
  {
    sku: "tshirt005",
    name: "Soothing Light Green Custom T-shirt",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.lightGreen,
    description: "Refresh your wardrobe with the Customize Light Green T-shirt. Its gentle, soothing shade pairs effortlessly with custom prints or logos, making it an ideal choice for casual days, team events, or brand promotion.",
  },
  {
    sku: "tshirt006",
    name: "Trendy Mint Green Customizable Tee",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.mintGreen,
    description: "Stay cool and stylish with the Customize Mint T-shirt. This refreshing color brings a modern twist to a classic tee. Add personalized designs to make it uniquely yours while enjoying its soft, breathable fabric.",
  },
  {
    sku: "tshirt007",
    name: "Sky Blue Custom T-shirt for All Occasions",
    price: 399,
    category: "tshirt",
    imageUrl: ImageLinks.skyBlue,
    description: "Elevate your look with the Customize Sky Blue T-shirt. Its calming blue shade and customization options allow you to showcase your creativity. Perfect for casual wear, team uniforms, or promotional events.",
  },  

  // Photo Frames
  {
    sku: "dpl001",
    name: "Elegant Leather Planner",
    price: 599,
    category: "diaries or planner",
    imageUrl: ImageLinks.cafe,
    description: "Organize your life with the Elegant Leather Planner. Featuring premium leather covers and smooth pages, it’s perfect for daily schedules, goal setting, and creative journaling.",
  },
  {
    sku: "dpl002",
    name: "Classic Hardcover Diary",
    price: 599,
    category: "diaries or planner",
    imageUrl: ImageLinks.cafe,
    description: "Capture your thoughts and ideas with the Classic Hardcover Diary. Its durable binding and high-quality paper make it an ideal companion for journaling, note-taking, or sketching.",
  },
  {
    sku: "dpl003",
    name: "Portable Pocket Planner",
    price: 599,
    category: "diaries or planner",
    imageUrl: ImageLinks.cafe,
    description: "Stay on top of your schedule wherever you go with the Portable Pocket Planner. Its compact size fits perfectly in your bag, ensuring productivity on the move.",
  },
  {
    sku: "dpl004",
    name: "Personalized Custom Planner",
    price: 599,
    category: "diaries or planner",
    imageUrl: ImageLinks.cafe,
    description: "Design your own planner with the Personalized Custom Planner. Tailor it with your favorite colors, layouts, or designs to suit your unique style and organizational needs.",
  },
  // Diaries or Planners/Users/rudra/Downloads/bags photo
  {
    sku: "ppn-29",
    name: "Sleek Black Leather Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.black,
    description: "Embrace the elegance of simplicity with our Sleek Black Leather Diary. Its smooth black cover exudes sophistication, making it the perfect companion for professionals who appreciate the finer details. Keep your thoughts, ideas, and plans secure in style."
  },
  {
    sku: "ppn-19",
    name: "Vibrant Bright Orange Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.brightOrange,
    description: "Brighten your day and your desk with our Vibrant Bright Orange Diary. With its bold, energetic hue, it stands out as a statement piece that will ignite creativity and inspire productivity. A must-have for those who want to add a pop of color to their workspace."
  },
  {
    sku: "ppn-04",
    name: "Deep Blue Serenity Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.darkBlue,
    description: "Dive into calm with the Deep Blue Serenity Diary. Its rich, serene color evokes peace of mind, making it the perfect space to capture your thoughts, dreams, and plans. Ideal for those seeking clarity and focus in their day-to-day life."
  },
  {
    sku: "ppn-05",
    name: "Elegant Dark Gray Journal",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.darkGray,
    description: "The Elegant Dark Gray Journal is the epitome of understated luxury. Its smooth texture and refined shade make it perfect for professionals, students, and creatives alike. Whether you're writing notes or planning your next big project, do it with elegance."
  },
  {
    sku: "ppn-06",
    name: "Stylish Dark Orange Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.darkOrange,
    description: "Make a bold statement with the Stylish Dark Orange Diary. The dynamic hue pairs perfectly with its high-quality craftsmanship, making it ideal for those who seek creativity, energy, and a touch of flair in their everyday essentials."
  },
  {
    sku: "ppn-13",
    name: "Rich Deep Dark Blue Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.deepDarkBlue,
    description: "The Rich Deep Dark Blue Diary combines timeless style with practicality. This diary offers a stunning dark blue cover with ample space for organizing your thoughts, making it perfect for those who cherish both beauty and functionality in their stationery."
  },
  {
    sku: "ppn-30",
    name: "Serene Deep Sky Blue Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.deepSkyBlue,
    description: "Inspired by the clear, expansive sky, the Serene Deep Sky Blue Diary brings a sense of calm and tranquility to your daily routine. Perfect for jotting down ideas, to-dos, and inspirations while adding a peaceful touch to your desk."
  },
  {
    sku: "ppn-16",
    name: "Vivid Dual Orange Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.deepOrange,
    description: "Add energy to your desk with the Vivid Dual Orange Diary. Featuring a bold dual-tone design, this diary is perfect for those who seek a balance of fun and functionality. Let the vibrant color fuel your creativity and elevate your daily writing experience."
  },
  {
    sku: "ppn-31",
    name: "Sophisticated Elegant Gray Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.elegantGray,
    description: "Subtle yet striking, the Sophisticated Elegant Gray Diary is the ideal companion for the discerning individual. Its sleek and versatile gray cover makes it perfect for any occasion, offering a premium writing experience with every page you turn."
  },
  {
    sku: "ppn-15",
    name: "Trendy Fabricated Sky Blue Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.fabricatedSkyBlue,
    description: "The Trendy Fabricated Sky Blue Diary blends soft texture with refreshing color. Its sky-blue cover and high-quality binding make it a stylish and functional addition to any desk. Perfect for those who appreciate an artistic yet organized way of journaling."
  },
  {
    sku: "ppn-20",
    name: "Classic Faded Brown Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.fadedBrown,
    description: "The Classic Faded Brown Diary is a timeless piece that adds warmth to your writing space. Its earthy tones and rugged texture make it the perfect choice for creatives, travelers, and those who appreciate a natural, vintage look."
  },
  {
    sku: "ppn-01",
    name: "Minimalist Gray Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.grayDiary,
    description: "Simple, sleek, and elegant—the Minimalist Gray Diary is designed for those who appreciate the beauty of simplicity. Its soft gray cover is perfect for both professional and personal use, providing a clean slate for your ideas, plans, and reflections."
  },
  {
    sku: "ppn-14",
    name: "Warm Light Brown Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.lightBrown,
    description: "Embrace natural warmth with the Light Brown Diary. Its soft, inviting color and smooth texture make it a comforting and practical companion. Ideal for those who enjoy writing with a personal touch and appreciate a rustic, yet polished look."
  },
  {
    sku: "ppn-23",
    name: "Charming Light Royal Gray Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.lightRoyalGreen,
    description: "The Charming Light Royal Gray Diary is a sophisticated and graceful addition to any desk. Its light gray tone exudes professionalism and elegance, while its durable construction ensures that your thoughts, ideas, and goals stay protected in style."
  },
  {
    sku: "ppn-10",
    name: "Soothing Light Sky Blue Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.lightSkyBlue,
    description: "Bring a touch of calm and serenity to your desk with the Soothing Light Sky Blue Diary. Perfect for those who need a peaceful space to organize their thoughts, it’s both a stylish and functional tool for journaling, planning, and creating."
  },
  {
    sku: "ppn-08",
    name: "Elegant Lined Dark Blue Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.linedDarkBlue,
    description: "The Elegant Lined Dark Blue Diary adds sophistication to your everyday writing experience. With its premium lined pages and sleek dark blue cover, it's perfect for capturing your ideas in style, whether you're at work, at home, or on the go."
  },
  {
      sku: "ppn-29",
      name: "Stylish Lined Light Blue Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.linedLightBlue,
    description: "Infuse your writing with fresh energy using the Stylish Lined Light Blue Diary. This diary combines the tranquil hue of light blue with premium lined pages, making it perfect for those who appreciate a clean and organized way to capture their thoughts."
  },
  {
      sku: "ppn-11",
      name: "Rich Maroon Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.maroon,
    description: "Make a bold statement with the Rich Maroon Diary. Its deep red color evokes strength and sophistication, while its luxurious feel makes it a must-have for professionals, creatives, and anyone who wants to keep their ideas organized in style."
  },
  {
      sku: "ppn-03",
      name: "Vibrant Orange Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.orange,
    description: "Add a burst of energy to your day with the Vibrant Orange Diary. Its lively orange cover is perfect for those who want to stay motivated and inspired, while its high-quality pages provide the perfect canvas for your creative thoughts."
  },
  {
      sku: "ppn-22",
      name: "Royal Blue Executive Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.royalBlue,
    description: "The Royal Blue Executive Diary is the perfect balance of professionalism and personality. Its bold blue color and premium finish make it an ideal companion for executives, entrepreneurs, and anyone who wants to take their organization to the next level."
  },
  {
      sku: "ppn-24",
      name: "Regal Royal Dark Gray Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.royalDarkGray,
    description: "The Regal Royal Dark Gray Diary combines refined style with exceptional quality. Perfect for those who want to add a touch of luxury to their work, this diary offers ample space to jot down ideas, set goals, and track progress in a sophisticated manner."
  },
  {
      sku: "ppn-12",
      name: "Chic Shaded Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.shaded,
    description: "Embrace a modern aesthetic with the Chic Shaded Diary. Its unique shaded design and durable cover make it a standout accessory for creatives and professionals alike, offering the perfect space to document your thoughts and achievements."
  },
  {
      sku: "ppn-02",
      name: "Calming Sky Blue Diary",
      price: 599,
    category: "diaries",
    imageUrl: ImageLinks.skyBlue,
    description: "Inspired by clear skies and peaceful moments, the Calming Sky Blue Diary is perfect for organizing your thoughts and goals. Its serene blue cover and smooth pages provide a soothing environment to help you focus and reflect."
  },
  {
    sku: "ppn-25",
    name: "Wooden Brown Diary",
    price: 599,
    category: "diaries",
    imageUrl: ImageLinks.woodenBrown,
    description: "Bring the charm of nature to your desk with the Wooden Brown Diary. Its rustic, wooden-inspired cover offers a unique aesthetic that’s perfect for creatives, writers, and those who appreciate the warm, earthy tones of nature."
  },

  // Bags

  {
    sku: "bag-01",
    name: "Eco-Chic Blue Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.blueJute,
    description: "Make a stylish eco-friendly statement with the Eco-Chic Blue Jute Bag! Durable, sustainable, and spacious—perfect for shopping, office, or daily use. Stay trendy while being kind to the planet!"
  },
  {
    sku: "bag-02",
    name: "Rustic Charm Brown Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.brownJute,
    description: "Classic, durable, and naturally stylish! The Rustic Charm Brown Jute Bag blends tradition with modern utility, making it the ideal go-to bag for your everyday essentials."
  },
  {
    sku: "bag-03",
    name: "Earthy Elegance Dark Brown Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.darkBrownJute,
    description: "Embrace the beauty of nature with the Earthy Elegance Dark Brown Jute Bag. Crafted for durability and sophistication, it’s perfect for work, casual outings, or eco-conscious gifting."
  },
  {
    sku: "bag-04",
    name: "Vibrant Bliss Colorful Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.colorFulJute,
    description: "Why choose one color when you can have them all? The Vibrant Bliss Colorful Jute Bag is a fun, stylish, and eco-conscious accessory that adds energy to your everyday look!"
  },
  {
    sku: "bag-05",
    name: "Elegant Hanging Jute Tote",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.juteBagWithHanging,
    description: "Designed for convenience and charm, the Elegant Hanging Jute Tote is perfect for carrying essentials while making a fashion-forward, eco-friendly statement."
  },
  {
    sku: "bag-06",
    name: "Sunset Glow Orange Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.orangeBag,
    description: "Radiate warmth and positivity with the Sunset Glow Orange Jute Bag! A vibrant, stylish, and durable companion for your shopping trips, work, or everyday errands."
  },
  {
    sku: "bag-07",
    name: "Bold & Beautiful Red Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.redBag,
    description: "Turn heads with the Bold & Beautiful Red Jute Bag! Its striking color, eco-friendly material, and spacious design make it the perfect mix of fashion and function."
  },
  {
    sku: "bag-08",
    name: "Elegant White Window Jute Tote",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.whiteWindowBag,
    description: "Minimalist yet sophisticated! The Elegant White Window Jute Tote offers a unique see-through design, blending modern aesthetics with natural sustainability."
  },
  {
    sku: "bag-09",
    name: "Classic Transparent Window Jute Bag",
    price: 599,
    category: "bags",
    imageUrl: ImageLinks.windowJuteBag,
    description: "See the beauty of sustainability with the Classic Transparent Window Jute Bag. Stylish, sturdy, and perfect for showcasing your essentials while staying eco-friendly."
    }
]

// Other categories (packing boxes, bottles or sippers, pens, key chains, trophies, travel bags) can follow the same structure.

export default productData;
