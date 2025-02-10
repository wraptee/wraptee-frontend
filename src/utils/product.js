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
    imageUrl: ImageLinks.skyBlueTshirt,
    description: "Elevate your look with the Customize Sky Blue T-shirt. Its calming blue shade and customization options allow you to showcase your creativity. Perfect for casual wear, team uniforms, or promotional events.",
  },
  {
    category: "tshirt",
    description: "Express yourself with the achieve Your Life Stream T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.achieveYourLifeStream,
    name: "achieve Your Life Stream Custom T-shirt",
    price: 399,
    sku: "tshirt0037"
  }, {
    category: "tshirt",
    description: "Express yourself with the Always Positive T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.AlwaysPositive,
    name: "Always Positive Custom T-shirt",
    price: 409,
    sku: "tshirt0038"
  }, {
    category: "tshirt",
    description: "Express yourself with the Aum Om Ohm T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.AumOmOhm,
    name: "Aum Om Ohm Custom T-shirt",
    price: 419,
    sku: "tshirt0039"
  }, {
    category: "tshirt",
    description: "Express yourself with the Baddest Witch Around T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.BaddestWitchAround,
    name: "Baddest Witch Around Custom T-shirt",
    price: 429,
    sku: "tshirt0040"
  }, {
    category: "tshirt",
    description: "Express yourself with the Chokurei T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Chokurei,
    name: "Chokurei Custom T-shirt",
    price: 439,
    sku: "tshirt0041"
  }, {
    category: "tshirt",
    description: "Express yourself with the Creativity Is Not Competition T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.CreativityIsNotCompetition,
    name: "Creativity Is Not Competition Custom T-shirt",
    price: 399,
    sku: "tshirt0042"
  }, {
    category: "tshirt",
    description: "Express yourself with the Creativity Is Intelligence Having Fun T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.CreativityIsIntelligenceHavingFun,
    name: "Creativity Is Intelligence Having Fun Custom T-shirt",
    price: 409,
    sku: "tshirt0043"
  }, {
    category: "tshirt",
    description: "Express yourself with the Daikomyo T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Daikomyo,
    name: "Daikomyo Custom T-shirt",
    price: 419,
    sku: "tshirt008"
  }, {
    category: "tshirt",
    description: "Express yourself with the Daikomyo2 T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Daikomyo2,
    name: "Daikomyo2 Custom T-shirt",
    price: 429,
    sku: "tshirt009"
  }, {
    category: "tshirt",
    description: "Express yourself with the Daikomyo3 T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Daikomyo3,
    name: "Daikomyo3 Custom T-shirt",
    price: 439,
    sku: "tshirt010"
  }, {
    category: "tshirt",
    description: "Express yourself with the Do More Of What Makes You Happy T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.DoMoreOfWhatMakesYouHappy,
    name: "Do More Of What Makes You Happy Custom T-shirt",
    price: 399,
    sku: "tshirt011"
  }, {
    category: "tshirt",
    description: "Express yourself with the Fire Serpent T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.FireSerpent,
    name: "Fire Serpent Custom T-shirt",
    price: 409,
    sku: "tshirt012"
  }, {
    category: "tshirt",
    description: "Express yourself with the Gnosa T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Gnosa,
    name: "Gnosa Custom T-shirt",
    price: 419,
    sku: "tshirt013"
  }, {
    category: "tshirt",
    description: "Express yourself with the Hand T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Hand,
    name: "Hand Custom T-shirt",
    price: 429,
    sku: "tshirt014"
  }, {
    category: "tshirt",
    description: "Express yourself with the Hand2 T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Hand2,
    name: "Hand2 Custom T-shirt",
    price: 439,
    sku: "tshirt015"
  }, {
    category: "tshirt",
    description: "Express yourself with the Harth T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Harth,
    name: "Harth Custom T-shirt",
    price: 399,
    sku: "tshirt016"
  }, {
    category: "tshirt",
    description: "Express yourself with the Healing Energy Never Fades T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.HealingEnergyNeverFades,
    name: "Healing Energy Never Fades Custom T-shirt",
    price: 409,
    sku: "tshirt017"
  }, {
    category: "tshirt",
    description: "Express yourself with the Hon Sha Ze Sho Nen T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.HonShaZeShoNen,
    name: "Hon Sha Ze Sho Nen Custom T-shirt",
    price: 419,
    sku: "tshirt018"
  }, {
    category: "tshirt",
    description: "Express yourself with the Life Is Short And The World Is Wide T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.LifeIsShortAndTheWorldIsWide,
    name: "Life Is Short And The World Is Wide Custom T-shirt",
    price: 429,
    sku: "tshirt019"
  }, {
    category: "tshirt",
    description: "Express yourself with the Meditation Is A Powerful Resource T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.MeditationIsAPowerfulResource,
    name: "Meditation Is A Powerful Resource Custom T-shirt",
    price: 439,
    sku: "tshirt020"
  }, {
    category: "tshirt",
    description: "Express yourself with the Namaste T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Namaste,
    name: "Namaste Custom T-shirt",
    price: 399,
    sku: "tshirt021"
  }, {
    category: "tshirt",
    description: "Express yourself with the Not All Heroes Wear T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.NotAllHeroesWear,
    name: "Not All Heroes Wear Custom T-shirt",
    price: 409,
    sku: "tshirt022"
  }, {
    category: "tshirt",
    description: "Express yourself with the Palm Daikomyo T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.PalmDaikomyo,
    name: "Palm Daikomyo Custom T-shirt",
    price: 419,
    sku: "tshirt023"
  }, {
    category: "tshirt",
    description: "Express yourself with the Palmistry T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Palmistry,
    name: "Palmistry Custom T-shirt",
    price: 429,
    sku: "tshirt024"
  }, {
    category: "tshirt",
    description: "Express yourself with the Reiki T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Reiki,
    name: "Reiki Custom T-shirt",
    price: 439,
    sku: "tshirt025"
  }, {
    category: "tshirt",
    description: "Express yourself with the Reiki Master T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.ReikiMaster,
    name: "Reiki Master Custom T-shirt",
    price: 399,
    sku: "tshirt026"
  }, {
    category: "tshirt",
    description: "Express yourself with the Reiki Mode On T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.ReikiModeOn,
    name: "Reiki Mode On Custom T-shirt",
    price: 409,
    sku: "tshirt027"
  }, {
    category: "tshirt",
    description: "Express yourself with the Sending You Healing Energy T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.SendingYouHealingEnergy,
    name: "Sending You Healing Energy Custom T-shirt",
    price: 419,
    sku: "tshirt028"
  }, {
    category: "tshirt",
    description: "Express yourself with the Seven Chakras T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.SevenChakras,
    name: "Seven Chakras Custom T-shirt",
    price: 429,
    sku: "tshirt029"
  }, {
    category: "tshirt",
    description: "Express yourself with the Shine Your Healing Light T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.ShineYourHealingLight,
    name: "Shine Your Healing Light Custom T-shirt",
    price: 439,
    sku: "tshirt030"
  }, {
    category: "tshirt",
    description: "Express yourself with the Take Your Dreams Seriously T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.TakeYourDreamsSeriously,
    name: "Take Your Dreams Seriously Custom T-shirt",
    price: 399,
    sku: "tshirt031"
  }, {
    category: "tshirt",
    description: "Express yourself with the The Art Of Palmistry T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.TheArtOfPalmistry,
    name: "The Art Of Palmistry Custom T-shirt",
    price: 409,
    sku: "tshirt032"
  }, {
    category: "tshirt",
    description: "Express yourself with the The Best Way To Predict Future T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.TheBestWayToPredictFuture,
    name: "The Best Way To Predict Future Custom T-shirt",
    price: 419,
    sku: "tshirt033"
  }, {
    category: "tshirt",
    description: "Express yourself with the Trust Your Crazy Ideas T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.TrustYourCrazyIdeas,
    name: "Trust Your Crazy Ideas Custom T-shirt",
    price: 429,
    sku: "tshirt034"
  }, {
    category: "tshirt",
    description: "Express yourself with the Your Design Here T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.YourDesignHere,
    name: "Your Design Here Custom T-shirt",
    price: 439,
    sku: "tshirt035"
  }, {
    category: "tshirt",
    description: "Express yourself with the Zona T-shirt. Designed for comfort and style, it's perfect for casual wear, team events, or promotional branding. Made with high-quality fabric to keep you stylish and comfortable all day long.",
    imageUrl: ImageLinks.Zona,
    name: "Zona Custom T-shirt",
    price: 399,
    sku: "tshirt036"
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
  },
  // Gifts

  {
    category: "gift",
    description: "See the beauty of sustainability with the Classic Transparent Window Jute Bag. Stylish, sturdy, and perfect for showcasing your essentials while staying eco-friendly.",
    imageUrl: ImageLinks.gift1,
    name: "Premium Corporate Gift Set",
    price: 599,
    sku: "gift-01"
  }, {
    category: "gift",
    description: "A premium collection of corporate gifts that leaves a lasting impression. Sleek, stylish, and designed for professionals.",
    imageUrl: ImageLinks.gift2,
    name: "Luxury Executive Collection",
    price: 609,
    sku: "gift-02"
  }, {
    category: "gift",
    description: "Eco-friendly, stylish, and useful—this sustainable corporate gift set is perfect for modern professionals.",
    imageUrl: ImageLinks.gift3,
    name: "Eco-Friendly Corporate Essentials",
    price: 619,
    sku: "gift-03"
  }, {
    category: "gift",
    description: "Make a statement with this luxurious business gift pack, carefully curated for elegance and functionality.",
    imageUrl: ImageLinks.gift4,
    name: "Elegant Business Gift Pack",
    price: 629,
    sku: "gift-04"
  }, {
    category: "gift",
    description: "Designed for executives, this exclusive office gift set enhances productivity and style at work.",
    imageUrl: ImageLinks.gift5,
    name: "Exclusive Office Gift Hamper",
    price: 639,
    sku: "gift-05"
  }, {
    category: "gift",
    description: "A sustainable choice for corporate gifting—eco-conscious products that align with modern work ethics.",
    imageUrl: ImageLinks.gift6,
    name: "Sustainable Gifting Solution",
    price: 649,
    sku: "gift-06"
  }, {
    category: "gift",
    description: "Gift your team a work companion that combines functionality and style in one premium package.",
    imageUrl: ImageLinks.gift7,
    name: "Stylish Work Companion",
    price: 659,
    sku: "gift-07"
  }, {
    category: "gift",
    description: "An elegant collection of office essentials that redefine sophistication for professionals.",
    imageUrl: ImageLinks.gift8,
    name: "Professional Gift Ensemble",
    price: 669,
    sku: "gift-08"
  }, {
    category: "gift",
    description: "Classic, timeless, and perfect for professionals who appreciate organization and efficiency.",
    imageUrl: ImageLinks.gift9,
    name: "Classic Office Essentials",
    price: 679,
    sku: "gift-09"
  }, {
    category: "gift",
    description: "High-end business accessories that add a touch of sophistication to any workspace.",
    imageUrl: ImageLinks.gift10,
    name: "High-End Business Accessories",
    price: 689,
    sku: "gift-10"
  }, {
    category: "gift",
    description: "Boost productivity with this all-in-one gift kit designed for high achievers.",
    imageUrl: ImageLinks.gift11,
    name: "Ultimate Productivity Kit",
    price: 699,
    sku: "gift-11"
  }, {
    category: "gift",
    description: "The perfect balance of functionality and modern aesthetics, ideal for any professional setting.",
    imageUrl: ImageLinks.gift12,
    name: "Modern Professional Package",
    price: 709,
    sku: "gift-12"
  }, {
    category: "gift",
    description: "A luxury leather organizer set that enhances work efficiency while maintaining a sleek look.",
    imageUrl: ImageLinks.gift13,
    name: "Luxury Leather Organizer Set",
    price: 719,
    sku: "gift-13"
  }, {
    category: "gift",
    description: "Designed for smart professionals, this office gear set ensures productivity with elegance.",
    imageUrl: ImageLinks.gift14,
    name: "Smart Office Gear",
    price: 729,
    sku: "gift-14"
  }, {
    category: "gift",
    description: "Excellence in a box—this executive set is perfect for professionals who aim for success.",
    imageUrl: ImageLinks.gift15,
    name: "Executive Excellence Pack",
    price: 739,
    sku: "gift-15"
  }, {
    category: "gift",
    description: "A corporate companion that promotes sustainability, style, and efficiency.",
    imageUrl: ImageLinks.gift16,
    name: "Green Corporate Companion",
    price: 749,
    sku: "gift-16"
  }, {
    category: "gift",
    description: "Upgrade any workspace with these premium desk essentials tailored for modern professionals.",
    imageUrl: ImageLinks.gift17,
    name: "Premium Desk Essentials",
    price: 759,
    sku: "gift-17"
  }, {
    category: "gift",
    description: "An exclusive selection of gifts curated for corporate success and sophistication.",
    imageUrl: ImageLinks.gift18,
    name: "Corporate Success Kit",
    price: 769,
    sku: "gift-18"
  }, {
    category: "gift",
    description: "Sophisticated, stylish, and highly functional—ideal for corporate gifting.",
    imageUrl: ImageLinks.gift19,
    name: "Sophisticated Work Set",
    price: 779,
    sku: "gift-19"
  }, {
    category: "gift",
    description: "A collection of work essentials designed to elevate productivity and workplace aesthetics.",
    imageUrl: ImageLinks.gift20,
    name: "Office Productivity Boost",
    price: 789,
    sku: "gift-20"
  }, {
    category: "gift",
    description: "Eco-friendly, professional, and practical—this work hamper is a must-have for employees.",
    imageUrl: ImageLinks.gift21,
    name: "Eco-Conscious Work Hamper",
    price: 799,
    sku: "gift-21"
  }, {
    category: "gift",
    description: "An elegant blend of business essentials that complement any workspace.",
    imageUrl: ImageLinks.gift22,
    name: "Elegant Business Essentials",
    price: 809,
    sku: "gift-22"
  }, {
    category: "gift",
    description: "Smart accessories to optimize workflow and maintain a stylish office setup.",
    imageUrl: ImageLinks.gift23,
    name: "Smart Workstation Accessories",
    price: 819,
    sku: "gift-23"
  }, {
    category: "gift",
    description: "A perfect blend of utility and luxury—this corporate gift pack speaks volumes.",
    imageUrl: ImageLinks.gift24,
    name: "Professional Power Pack",
    price: 829,
    sku: "gift-24"
  }, {
    category: "gift",
    description: "Versatility at its best! A multi-purpose office gift set that suits professionals of all levels.",
    imageUrl: ImageLinks.gift25,
    name: "Versatile Office Gift Set",
    price: 839,
    sku: "gift-25"
  }, {
    category: "gift",
    description: "Refined and practical—crafted for executives who value excellence in their workspace.",
    imageUrl: ImageLinks.gift26,
    name: "Refined Business Bundle",
    price: 849,
    sku: "gift-26"
  }, {
    category: "gift",
    description: "An innovative hamper filled with professional tools to enhance daily work routines.",
    imageUrl: ImageLinks.gift27,
    name: "Innovative Corporate Hamper",
    price: 859,
    sku: "gift-27"
  }, {
    category: "gift",
    description: "Minimalistic yet highly efficient—this executive set embodies modern corporate culture.",
    imageUrl: ImageLinks.gift28,
    name: "Minimalist Executive Set",
    price: 869,
    sku: "gift-28"
  }, {
    category: "gift",
    description: "An elite collection of work essentials designed to impress clients and employees alike.",
    imageUrl: ImageLinks.gift29,
    name: "Elite Office Companion",
    price: 879,
    sku: "gift-29"
  }, {
    category: "gift",
    description: "Signature corporate gifts that redefine elegance and efficiency.",
    imageUrl: ImageLinks.gift30,
    name: "Signature Corporate Kit",
    price: 889,
    sku: "gift-30"
  }, {
    category: "gift",
    description: "Timeless and practical business essentials to complement any professional’s lifestyle.",
    imageUrl: ImageLinks.gift31,
    name: "Timeless Business Essentials",
    price: 899,
    sku: "gift-31"
  }, {
    category: "gift",
    description: "A new-age corporate collection designed for professionals who thrive on innovation.",
    imageUrl: ImageLinks.gift32,
    name: "Next-Gen Office Collection",
    price: 909,
    sku: "gift-32"
  }, {
    category: "gift",
    description: "Work essentials that prioritize sustainability without compromising on sophistication.",
    imageUrl: ImageLinks.gift33,
    name: "Sustainable Work Essentials",
    price: 919,
    sku: "gift-33"
  }, {
    category: "gift",
    description: "A chic and professional ensemble designed to enhance productivity with style.",
    imageUrl: ImageLinks.gift34,
    name: "Chic Professional Ensemble",
    price: 929,
    sku: "gift-34"
  }, {
    category: "gift",
    description: "Classic, durable, and a must-have for every professional's daily routine.",
    imageUrl: ImageLinks.gift35,
    name: "Classic Executive Set",
    price: 939,
    sku: "gift-35"
  }, {
    category: "gift",
    description: "An all-in-one organizer set crafted for modern business executives.",
    imageUrl: ImageLinks.gift36,
    name: "Smart Business Organizer",
    price: 949,
    sku: "gift-36"
  }, {
    category: "gift",
    description: "Designed for professionals who prefer sustainable, high-quality work accessories.",
    imageUrl: ImageLinks.gift37,
    name: "Eco-Smart Office Kit",
    price: 959,
    sku: "gift-37"
  }, {
    category: "gift",
    description: "Luxury essentials for an upgraded work experience—stylish, durable, and efficient.",
    imageUrl: ImageLinks.gift38,
    name: "Luxury Workstation Must-Haves",
    price: 969,
    sku: "gift-38"
  }, {
    category: "gift",
    description: "A charming corporate gift set with a unique blend of utility and elegance.",
    imageUrl: ImageLinks.gift39,
    name: "Corporate Charm Gift Set",
    price: 979,
    sku: "gift-39"
  }, {
    category: "gift",
    description: "A deluxe selection of office essentials crafted to enhance productivity and organization.",
    imageUrl: ImageLinks.gift40,
    name: "Office Deluxe Essentials",
    price: 989,
    sku: "gift-40"
  }, {
    category: "gift",
    description: "Empower professionals with this power-packed productivity kit, designed for efficiency.",
    imageUrl: ImageLinks.gift41,
    name: "Productivity Power Pack",
    price: 999,
    sku: "gift-41"
  }, {
    category: "gift",
    description: "Everything a professional needs to stay on top of their work—sleek, stylish, and practical.",
    imageUrl: ImageLinks.gift42,
    name: "Essential Business Tools",
    price: 1009,
    sku: "gift-42"
  }, {
    category: "gift",
    description: "A comprehensive corporate set tailored to enhance work-life balance and efficiency.",
    imageUrl: ImageLinks.gift43,
    name: "Complete Corporate Set",
    price: 1019,
    sku: "gift-43"
  }, {
    category: "gift",
    description: "Business-class gifts that redefine elegance in the corporate world.",
    imageUrl: ImageLinks.gift44,
    name: "Business Class Gift Hamper",
    price: 1029,
    sku: "gift-44"
  }, {
    category: "gift",
    description: "A premium work essentials set that exudes professionalism and style.",
    imageUrl: ImageLinks.gift45,
    name: "Elite Work Essentials",
    price: 1039,
    sku: "gift-45"
  },
  // Pens
  {
    category: "pen",
    description: "Classic, durable, and a must-have for every professional's daily routine.",
    imageUrl: ImageLinks.pen1,
    name: "Classic Executive Set",
    price: 90,
    sku: "pen-01"
  }, {
    category: "pen",
    description: "A luxury metal pen designed for executives who value sophistication and smooth writing.",
    imageUrl: ImageLinks.pen2,
    name: "Luxury Metal Pen",
    price: 95,
    sku: "pen-02"
  }, {
    category: "pen",
    description: "Premium business pen with a sleek design and long-lasting ink for effortless writing.",
    imageUrl: ImageLinks.pen3,
    name: "Premium Business Pen",
    price: 100,
    sku: "pen-03"
  }, {
    category: "pen",
    description: "A sleek and stylish corporate pen that adds a touch of professionalism to your desk.",
    imageUrl: ImageLinks.pen4,
    name: "Sleek Corporate Pen",
    price: 105,
    sku: "pen-04"
  }, {
    category: "pen",
    description: "A signature writing tool crafted for those who appreciate fine craftsmanship and smooth flow.",
    imageUrl: ImageLinks.pen5,
    name: "Signature Writing Tool",
    price: 110,
    sku: "pen-05"
  }, {
    category: "pen",
    description: "Elegant, durable, and designed for professionals who prefer a seamless writing experience.",
    imageUrl: ImageLinks.pen6,
    name: "Elegant Office Pen",
    price: 115,
    sku: "pen-06"
  }, {
    category: "pen",
    description: "A high-end fountain pen with superior ink flow, making every signature stand out.",
    imageUrl: ImageLinks.pen7,
    name: "Professional Fountain Pen",
    price: 120,
    sku: "pen-07"
  }, {
    category: "pen",
    description: "Experience precision with this smooth ink rollerball, crafted for business professionals.",
    imageUrl: ImageLinks.pen8,
    name: "Smooth Ink Rollerball",
    price: 125,
    sku: "pen-08"
  }, {
    category: "pen",
    description: "A timeless corporate pen that combines style and functionality effortlessly.",
    imageUrl: ImageLinks.pen9,
    name: "Timeless Corporate Pen",
    price: 130,
    sku: "pen-09"
  }, {
    category: "pen",
    description: "Designed for executives, this stylish pen offers superior comfort and smooth writing.",
    imageUrl: ImageLinks.pen10,
    name: "Stylish Work Companion",
    price: 135,
    sku: "pen-10"
  }, {
    category: "pen",
    description: "Refined and sophisticated, this writing instrument ensures elegance in every stroke.",
    imageUrl: ImageLinks.pen11,
    name: "Refined Writing Instrument",
    price: 140,
    sku: "pen-11"
  }, {
    category: "pen",
    description: "An executive excellence pen with a modern design and premium build quality.",
    imageUrl: ImageLinks.pen12,
    name: "Executive Excellence Pen",
    price: 145,
    sku: "pen-12"
  }, {
    category: "pen",
    description: "Write with precision using this high-quality gel pen designed for comfort and durability.",
    imageUrl: ImageLinks.pen13,
    name: "High-Precision Gel Pen",
    price: 150,
    sku: "pen-13"
  }, {
    category: "pen",
    description: "A smart office signature pen, perfect for professionals who demand quality and style.",
    imageUrl: ImageLinks.pen14,
    name: "Smart Office Signature Pen",
    price: 155,
    sku: "pen-14"
  }, {
    category: "pen",
    description: "A luxurious gold-trim business pen that enhances your writing experience with elegance.",
    imageUrl: ImageLinks.pen15,
    name: "Gold Trim Business Pen",
    price: 160,
    sku: "pen-15"
  }, {
    category: "pen",
    description: "Minimalist, lightweight, and sleek—this corporate pen is perfect for daily use.",
    imageUrl: ImageLinks.pen16,
    name: "Minimalist Corporate Pen",
    price: 165,
    sku: "pen-16"
  }, {
    category: "pen",
    description: "Sophisticated matte finish with a premium ink refill, ensuring a flawless writing experience.",
    imageUrl: ImageLinks.pen17,
    name: "Sophisticated Matte Pen",
    price: 170,
    sku: "pen-17"
  }, {
    category: "pen",
    description: "An ergonomic comfort pen designed for smooth and effortless handwriting.",
    imageUrl: ImageLinks.pen18,
    name: "Ergonomic Comfort Pen",
    price: 175,
    sku: "pen-18"
  }, {
    category: "pen",
    description: "Ultra-smooth and long-lasting ink flow makes this signature pen a professional favorite.",
    imageUrl: ImageLinks.pen19,
    name: "Ultra-Smooth Signature Pen",
    price: 180,
    sku: "pen-19"
  }, {
    category: "pen",
    description: "A modern executive ballpoint pen with a durable metal body and stylish finish.",
    imageUrl: ImageLinks.pen20,
    name: "Modern Executive Ballpoint",
    price: 185,
    sku: "pen-20"
  }, {
    category: "pen",
    description: "The classic black metal pen—a timeless choice for professionals and executives.",
    imageUrl: ImageLinks.pen21,
    name: "Classic Black Metal Pen",
    price: 190,
    sku: "pen-21"
  }, {
    category: "pen",
    description: "A premium silver pen with a professional touch and smooth writing experience.",
    imageUrl: ImageLinks.pen22,
    name: "Premium Silver Pen",
    price: 195,
    sku: "pen-22"
  }, {
    category: "pen",
    description: "Grip-friendly gel pen with precision ink technology for effortless writing.",
    imageUrl: ImageLinks.pen23,
    name: "Professional Grip Gel Pen",
    price: 200,
    sku: "pen-23"
  }, {
    category: "pen",
    description: "A luxury gold-plated pen, making every signature bold and remarkable.",
    imageUrl: ImageLinks.pen24,
    name: "Luxury Gold Plated Pen",
    price: 205,
    sku: "pen-24"
  }, {
    category: "pen",
    description: "Sleek chrome finish with a professional look—perfect for corporate gifting.",
    imageUrl: ImageLinks.pen25,
    name: "Sleek Chrome Finish Pen",
    price: 210,
    sku: "pen-25"
  }, {
    category: "pen",
    description: "A timeless wooden pen that adds warmth and style to your writing experience.",
    imageUrl: ImageLinks.pen26,
    name: "Timeless Wooden Pen",
    price: 215,
    sku: "pen-26"
  }, {
    category: "pen",
    description: "High-end business pen with a metallic grip and smooth ink flow.",
    imageUrl: ImageLinks.pen27,
    name: "High-End Business Pen",
    price: 220,
    sku: "pen-27"
  }, {
    category: "pen",
    description: "Eco-friendly bamboo pen for professionals who appreciate sustainability and style.",
    imageUrl: ImageLinks.pen28,
    name: "Eco-Friendly Bamboo Pen",
    price: 225,
    sku: "pen-28"
  }, {
    category: "pen",
    description: "An elegant leather-wrapped pen with a luxurious feel and durable ink cartridge.",
    imageUrl: ImageLinks.pen29,
    name: "Elegant Leather Wrapped Pen",
    price: 230,
    sku: "pen-29"
  }, {
    category: "pen",
    description: "Diamond-tip signature pen designed for smooth, uninterrupted writing.",
    imageUrl: ImageLinks.pen30,
    name: "Diamond Tip Signature Pen",
    price: 235,
    sku: "pen-30"
  }, {
    category: "pen",
    description: "A magnetic cap business pen with a sleek design and easy-to-use functionality.",
    imageUrl: ImageLinks.pen31,
    name: "Magnetic Cap Business Pen",
    price: 240,
    sku: "pen-31"
  }, {
    category: "pen",
    description: "A luxury crystal pen with a unique grip and smooth ink distribution.",
    imageUrl: ImageLinks.pen32,
    name: "Luxury Crystal Pen",
    price: 245,
    sku: "pen-32"
  }, {
    category: "pen",
    description: "Corporate branded pen—an ideal promotional gift with a premium touch.",
    imageUrl: ImageLinks.pen33,
    name: "Corporate Branded Pen",
    price: 250,
    sku: "pen-33"
  }, {
    category: "pen",
    description: "Precision writing tool with a fine-tip for clean, detailed strokes.",
    imageUrl: ImageLinks.pen34,
    name: "Precision Writing Tool",
    price: 255,
    sku: "pen-34"
  }, {
    category: "pen",
    description: "An exclusive executive pen that redefines sophistication and professionalism.",
    imageUrl: ImageLinks.pen35,
    name: "Exclusive Executive Pen",
    price: 260,
    sku: "pen-35"
  }

]

// Other categories (packing boxes, bottles or sippers, pens, key chains, trophies, travel bags) can follow the same structure.

export default productData;
